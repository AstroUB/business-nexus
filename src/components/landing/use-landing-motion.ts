import { useEffect } from "react";
export function useLandingMotion() {
  useEffect(() => {
    let disposed = false;
    let context: { revert: () => void } | undefined;
    let media: { revert: () => void } | undefined;
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
                ".detail-tile, .rich-opportunity, .community-tile, .work-card, .loop-copy > div, .animated-story-grid",
              );
              if (cards.length)
                gsap.from(cards, {
                  y: 65,
                  opacity: 0,
                  rotateX: 7,
                  transformPerspective: 1100,
                  stagger: 0.12,
                  duration: 1.05,
                  ease: "power3.out",
                  scrollTrigger: { trigger: cards[0], start: "top 90%" },
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
                    const step = Math.min(4, Math.round(self.progress * 4));
                    const counter = journey.querySelector(".journey-position");
                    if (counter) counter.textContent = `0${step + 1} / 05`;
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
          });
        });
        document.fonts.ready.then(() => {
          if (!disposed) ScrollTrigger.refresh();
        });
      },
    );
    return () => {
      disposed = true;
      media?.revert();
      context?.revert();
    };
  }, []);
}
