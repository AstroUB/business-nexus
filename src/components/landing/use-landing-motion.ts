import { useEffect } from "react";
export function useLandingMotion() {
  useEffect(() => {
    let disposed = false;
    let context: { revert: () => void } | undefined;
    let media: ReturnType<typeof import("gsap")["gsap"]["matchMedia"]> | undefined;
    let removePointerListeners: (() => void) | undefined;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        context = gsap.context(() => {
          media = gsap.matchMedia();
          media.add("(prefers-reduced-motion: no-preference)", () => {
            document.querySelectorAll("main > section").forEach((section) => {
              if (section.classList.contains("journey-full")) return;
              const targets = section.querySelectorAll(
                ".section-heading, .intro h2, .hero-copy, .hero-actions, .hero-note, .trust p, .logo-row, .manifesto h2, .manifesto p, .faq-heading, .faq-item, .final-cta h2, .final-cta p",
              );
              if (targets.length)
                gsap.from(targets, {
                  y: 38,
                  opacity: 0,
                  duration: 1,
                  stagger: 0.1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 86%",
                    toggleActions: "play none none none",
                  },
                });
              const cards = section.querySelectorAll(
                ".detail-tile, .rich-opportunity, .community-tile, .investor-research-art, .investor-research-copy, .loop-copy > div, .animated-story-grid, .investor-step, .investment-feed",
              );
              cards.forEach((card) => {
                gsap.from(card, {
                  y: 65,
                  opacity: 0,
                  rotateX: card.classList.contains("animated-story-grid") ? 0 : 7,
                  transformPerspective: 1100,
                  duration: 1.05,
                  ease: "power3.out",
                  scrollTrigger: { trigger: card, start: "top 90%" },
                });
              });
            });
            gsap.from(".hero h1", { y: 45, opacity: 0, duration: 1.2, ease: "power3.out" });
            gsap.from(".hero-visual", {
              y: 80,
              rotateX: 9,
              transformPerspective: 1200,
              opacity: 0,
              duration: 1.3,
              delay: 0.2,
              ease: "power3.out",
            });
            const heroDashboard = document.querySelector(".hero-dashboard-scroll");
            if (heroDashboard) {
              const heroScroll = gsap.timeline({
                scrollTrigger: {
                  trigger: ".hero-visual",
                  start: "top 65%",
                  end: "bottom 15%",
                  scrub: 1.2,
                  invalidateOnRefresh: true,
                },
              });
              heroScroll.fromTo(heroDashboard,
                 { rotateX: 16, scale: 0.96, transformPerspective: 1600, transformOrigin: "center bottom" },
                 { rotateX: 0, scale: 1, y: -24, ease: "none" }, 0);
              heroScroll.to(".hero-visual .product-feed", { y: -12, ease: "none" }, 0);
              heroScroll.to(".hero-visual .post-art img", { y: -14, rotation: -8, scale: 1.12, ease: "none" }, 0);
              heroScroll.to(".hero-visual .hero-float", { x: -32, y: -65, rotation: -12, ease: "none" }, 0);
              heroScroll.to(".hero-visual .hero-float.right", { x: 32, y: -38, rotation: 15, ease: "none" }, 0);
              heroScroll.to(".hero-visual .floating-note", { y: -52, rotation: 3, ease: "none" }, 0);
            }
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
              const surface = document.querySelector<HTMLElement>(".hero-visual");
              const tilt = document.querySelector<HTMLElement>(".hero-dashboard-tilt");
              if (!surface || !tilt) return;
              gsap.set(tilt, { transformPerspective: 1600, transformOrigin: "center center" });
              const rotateX = gsap.quickTo(tilt, "rotateX", { duration: 0.45, ease: "power3.out" });
              const rotateY = gsap.quickTo(tilt, "rotateY", { duration: 0.45, ease: "power3.out" });
              const move = (event: PointerEvent) => {
                const box = surface.getBoundingClientRect();
                rotateY(((event.clientX - box.left) / box.width - 0.5) * 18);
                rotateX(-((event.clientY - box.top) / box.height - 0.5) * 12);
              };
              const reset = () => { rotateX(0); rotateY(0); };
              surface.addEventListener("pointermove", move);
              surface.addEventListener("pointerleave", reset);
              removePointerListeners = () => {
                surface.removeEventListener("pointermove", move);
                surface.removeEventListener("pointerleave", reset);
              };
            }
            gsap.from(".pitch-stage, .pitch-perspective, .pitch-path > div", {
              y: 45, opacity: 0, stagger: 0.12, duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".pitch-theater", start: "top 85%" },
            });
            gsap.from(".showcase-stage", {
              y: 60,
              rotateX: 7,
              transformPerspective: 1300,
              opacity: 0,
              duration: 1.2,
              scrollTrigger: { trigger: ".showcase-stage", start: "top 88%" },
            });
            gsap.to(".matching-visual img, .journey-page-visual img, .loop-visual > img", {
              y: -16,
              rotation: 3,
              duration: 3.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              stagger: 0.25,
            });
            gsap.to(".loop-ring", { rotation: 360, duration: 50, repeat: -1, ease: "none" });
            const journey = document.querySelector<HTMLElement>(".journey-full");
            const track = document.querySelector<HTMLElement>(".journey-full-track");
            if (journey && track)
              gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                  trigger: journey,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 0.8,
                  invalidateOnRefresh: true,
                  onUpdate: (self) => {
                    const count = track.children.length;
                    const step = Math.min(count - 1, Math.round(self.progress * (count - 1)));
                    const counter = journey.querySelector(".journey-position");
                    if (counter) counter.textContent = `${String(step + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
                    journey
                      .querySelectorAll(".journey-full-progress > span")
                      .forEach((el, i) => el.classList.toggle("active", i === step));
                  },
                },
              });
            gsap.from(".footer-grid", {
              y: 40,
              opacity: 0,
              duration: 1,
              scrollTrigger: { trigger: ".footer", start: "top 90%" },
            });
            return () => removePointerListeners?.();
          });
        });
        document.fonts.ready.then(() => {
          if (!disposed) ScrollTrigger.refresh();
        });
      },
    );
    return () => {
      disposed = true;
      removePointerListeners?.();
      media?.revert();
      context?.revert();
    };
  }, []);
}
