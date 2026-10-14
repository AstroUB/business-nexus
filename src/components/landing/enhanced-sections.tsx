import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Heart,
  Layers,
  MessageCircle,
  Palette,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BizLogo, businesses } from "./product-showcase";
import links from "@/assets/connect-links.png";
import appIcon from "@/assets/app-icon.png";
import founder from "@/assets/founder.jpg";
import male from "@/assets/founder-male.jpg";
import creative from "@/assets/founder-creative.jpg";

function Heading({ label, title, copy }: { label: string; title: React.ReactNode; copy: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
export function FeatureBento() {
  return (
    <section className="section container-wide" id="features">
      <Heading
        label="Good things, all in one place"
        title={
          <>
            A bigger stage.
            <br />
            <span className="serif">A more meaningful network.</span>
          </>
        }
        copy="Everything your business needs to show up, stand out, and turn shared ambition into something real."
      />
      <div className="detail-bento">
        <article className="detail-tile feature-network">
          <div className="tile-kicker">
            <Users />
            01 — Meaningful discovery
          </div>
          <h3>
            The right fit.
            <br />
            Not just another follow.
          </h3>
          <p>
            Find teams by what they build, what they offer, and what they need. Shared interests
            start the conversation. Complementary skills keep it going.
          </p>
          <div className="matching-visual">
            <div className="match-business">
              <BizLogo mark="o" style="ink" />
              <strong>Orbit Studio</strong>
              <small>Offers brand design</small>
              <span>Looking for development</span>
            </div>
            <img
              src={links}
              alt="Two complementary businesses connected"
              width={220}
              height={220}
              loading="lazy"
            />
            <div className="match-business">
              <BizLogo mark="f" />
              <strong>Forma Labs</strong>
              <small>Offers development</small>
              <span>Looking for brand design</span>
            </div>
          </div>
          <div className="tile-foot">
            <Check />
            Shared vision. Different superpowers.
          </div>
        </article>
        <article className="detail-tile profile-detail">
          <div className="tile-kicker">
            <Layers />
            02 — Your business identity
          </div>
          <h3>
            More story.
            <br />
            Less résumé.
          </h3>
          <p>
            Put your services, team, and strongest work in one place. Let potential partners
            understand your business before the first hello.
          </p>
          <div className="profile-sample">
            <div className="profile-sample-cover">
              <img
                src={appIcon}
                alt="Orbit brand project"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <BizLogo mark="o" style="ink" />
            <strong>
              Orbit Studio <Check />
            </strong>
            <small>Independent minds. Remarkable brands.</small>
            <div className="detail-tags">
              <span>Strategy</span>
              <span>Identity</span>
              <span>Digital</span>
            </div>
            <div className="profile-stats">
              <span>
                <b>12</b>Projects
              </span>
              <span>
                <b>3</b>Services
              </span>
              <span>
                <b>↗</b>Open to partner
              </span>
            </div>
          </div>
        </article>
        <article className="detail-tile exchange-detail">
          <div className="tile-kicker">
            <Zap />
            03 — Service exchange
          </div>
          <h3>
            Trade expertise.
            <br />
            Multiply possibilities.
          </h3>
          <p>
            You need a website. They need a brand. Discuss scope, align expectations, and create an
            exchange that benefits both businesses.
          </p>
          <div className="exchange-receipt">
            <div>
              <Palette />
              <span>
                You offer<b>Brand identity</b>
              </span>
              <Check />
            </div>
            <div className="receipt-divider">
              A win on both sides <ArrowRight />
            </div>
            <div>
              <Code2 />
              <span>
                You receive<b>Website development</b>
              </span>
              <Check />
            </div>
          </div>
        </article>
        <article className="detail-tile feed-detail">
          <div className="tile-kicker">
            <Rocket />
            04 — Your work, out loud
          </div>
          <h3>
            Make the journey
            <br />
            part of your story.
          </h3>
          <p>
            Post a launch, a lesson, or a behind-the-scenes look. Each update gives your business
            another chance to be discovered.
          </p>
          <div className="launch-sample">
            <div className="flex items-center gap-2">
              <BizLogo mark="f" />
              <strong>
                Forma Labs <small>Just shared a milestone</small>
              </strong>
            </div>
            <div className="launch-art">
              <img
                src={appIcon}
                alt="Product launch artwork"
                width={130}
                height={130}
                loading="lazy"
              />
              <span>
                Built with ambition.
                <br />
                <b>Launched together.</b>
              </span>
            </div>
            <div className="launch-engagement">
              <Heart />
              128
              <MessageCircle />
              24
              <ArrowUpRight />
            </div>
          </div>
        </article>
        <article className="detail-tile conversation-detail">
          <div className="tile-kicker">
            <MessageCircle />
            05 — Real conversations
          </div>
          <h3>
            Start with hello.
            <br />
            Keep building from there.
          </h3>
          <p>
            No pitch required. Talk about a project, swap ideas, and get to know the people behind
            the business.
          </p>
          <div className="chat-bubble">
            Hey! Your latest work caught our eye.<small>Orbit Studio · 10:24</small>
          </div>
          <div className="chat-bubble reply">
            We’ve been following your launch too. Let’s build something.
            <small>
              Acme Studio · 10:26 <Check />
            </small>
          </div>
          <div className="tile-foot">
            <ShieldCheck />
            Your next chapter starts with a conversation.
          </div>
        </article>
      </div>
    </section>
  );
}
const steps = [
  {
    number: "01",
    label: "Make yourself known",
    title: (
      <>
        Your story.
        <br />
        <span className="serif">Your business home.</span>
      </>
    ),
    copy: "Create a profile that feels like your business. Share your purpose, the services you offer, and the work you want the world to see.",
    points: [
      "Showcase your best projects",
      "Tell the story behind your team",
      "Let partners know what you offer",
    ],
    image: appIcon,
    stamp: "A little introduction. A lasting impression.",
  },
  {
    number: "02",
    label: "Share what you’re building",
    title: (
      <>
        Small updates.
        <br />
        <span className="serif">Big visibility.</span>
      </>
    ),
    copy: "Give your work a life beyond the project folder. Share launches, milestones, and lessons with businesses who understand the journey.",
    points: [
      "Celebrate the wins",
      "Share work in progress",
      "Build a presence, one post at a time",
    ],
    image: appIcon,
    stamp: "Your latest work might be their next inspiration.",
  },
  {
    number: "03",
    label: "Find your kind of ambitious",
    title: (
      <>
        Different skills.
        <br />
        <span className="serif">Shared energy.</span>
      </>
    ),
    copy: "Explore businesses that think like you and bring something different to the table. Find complementary services and a shared drive to build.",
    points: [
      "Discover teams across industries",
      "Explore portfolios and services",
      "Connect with businesses that fit",
    ],
    image: links,
    stamp: "Good partners bring what you’re missing.",
  },
  {
    number: "04",
    label: "Turn hello into possibility",
    title: (
      <>
        A conversation.
        <br />
        <span className="serif">A new beginning.</span>
      </>
    ),
    copy: "Skip the cold pitch. Start with genuine interest, talk about what you need, and explore what you could achieve together.",
    points: [
      "Start a meaningful conversation",
      "Discuss goals and expectations",
      "Find the shape of your collaboration",
    ],
    image: links,
    stamp: "The best partnerships start human.",
  },
  {
    number: "05",
    label: "Build something together",
    title: (
      <>
        Exchange skills.
        <br />
        <span className="serif">Grow your circle.</span>
      </>
    ),
    copy: "Agree on a project or a service exchange. Bring your strengths together, make something worth sharing, and let the next connection begin.",
    points: [
      "Align scope and deliverables",
      "Exchange complementary expertise",
      "Share the work you made together",
    ],
    image: appIcon,
    stamp: "One collaboration. A world of what’s next.",
  },
];
export function FullPageJourney() {
  return (
    <section className="journey-full" id="how-it-works">
      <div className="journey-full-sticky">
        <div className="journey-header container-wide">
          <span className="eyebrow">How a connection becomes something more</span>
          <span className="journey-position">01 / 05</span>
        </div>
        <div className="journey-full-track">
          {steps.map((step) => (
            <article className="journey-page" key={step.number}>
              <div className="journey-page-inner container-wide">
                <div className="journey-page-copy">
                  <div className="tile-kicker">
                    {step.number} — {step.label}
                  </div>
                  <h2>{step.title}</h2>
                  <p>{step.copy}</p>
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>
                        <Check />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="journey-page-visual">
                  <span className="journey-giant-number">{step.number}</span>
                  <img
                    src={step.image}
                    alt="Connecto sculptural connection artwork"
                    width={450}
                    height={450}
                    loading="lazy"
                  />
                  <div className="journey-glass-note">
                    <Sparkles />
                    <span>{step.stamp}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="journey-full-progress container-wide">
          {steps.map((s) => (
            <span key={s.number}>
              <i />
              <small>
                {s.number} — {s.label}
              </small>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Opportunities({ explore }: { explore: () => void }) {
  const data = [
    {
      biz: businesses[0],
      type: "Brand & digital design",
      title: "A fresh identity for your next chapter.",
      description:
        "An independent studio bringing ambitious brands to life. We’re looking for a development team to turn bold ideas into beautiful websites.",
      offer: "Brand strategy & identity",
      need: "A creative development partner",
      image: appIcon,
      theme: "brand-opportunity",
    },
    {
      biz: businesses[1],
      type: "Product development",
      title: "You dream it.<br />We’ll build it.",
      description:
        "A small product team with big engineering energy. Let’s partner with a creative studio to make your next product feel as good as it works.",
      offer: "Web & product development",
      need: "Brand and interface design",
      image: links,
      theme: "tech-opportunity",
    },
    {
      biz: businesses[2],
      type: "Marketing & storytelling",
      title: "Good stories deserve an audience.",
      description:
        "We help businesses turn their story into meaningful attention. Open to trading content expertise for a fresh visual perspective.",
      offer: "Content strategy & social",
      need: "Visual storytelling & design",
      image: appIcon,
      theme: "social-opportunity",
    },
  ];
  return (
    <section className="section opportunity-section" id="opportunities">
      <div className="container-wide">
        <Heading
          label="Opportunity looks good on you"
          title={
            <>
              There’s a perfect fit
              <br />
              <span className="serif">somewhere in your feed.</span>
            </>
          }
          copy="Real work. Clear needs. Complementary strengths. Discover the kinds of collaborations waiting to happen."
        />
        <div className="rich-opportunity-grid">
          {data.map((item) => (
            <article className={`rich-opportunity ${item.theme}`} key={item.biz.name}>
              <div className="opportunity-cover">
                <span>
                  <span className="availability-dot" />
                  Open to collaborate
                </span>
                <img
                  src={item.image}
                  alt={`${item.biz.name} project artwork`}
                  width={220}
                  height={220}
                  loading="lazy"
                />
                <div className="cover-label">
                  {item.type}
                  <ArrowUpRight />
                </div>
              </div>
              <div className="opportunity-info">
                <div className="opportunity-company">
                  <BizLogo mark={item.biz.mark} style={item.biz.style} />
                  <div>
                    <b>{item.biz.name}</b>
                    <small>{item.biz.location}</small>
                  </div>
                  <ShieldCheck />
                </div>
                <h3>
                  {item.title.split("<br />").map((t, i) => (
                    <span className="block" key={i}>
                      {t}
                    </span>
                  ))}
                </h3>
                <p>{item.description}</p>
                <dl>
                  <div>
                    <dt>Bringing to the table</dt>
                    <dd>{item.offer}</dd>
                  </div>
                  <div>
                    <dt>Looking for</dt>
                    <dd>{item.need}</dd>
                  </div>
                </dl>
                <Button variant="outline" onClick={explore}>
                  Meet {item.biz.name}
                  <ArrowUpRight />
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="sample-note">A glimpse of what’s possible. Sample business opportunities.</p>
      </div>
    </section>
  );
}
export function CommunityBento({ explore }: { explore: () => void }) {
  const groups = [
    {
      title: "Startups",
      subtitle: "Big ideas. Early chapters.",
      copy: "Find your first creative partner, a product collaborator, or the team that helps your next launch land.",
      icon: Rocket,
      class: "startup-community",
      tags: ["Launch together", "Build in public"],
    },
    {
      title: "Creative studios",
      subtitle: "Independent minds. Shared magic.",
      copy: "Meet teams who need your perspective. Bring brands, experiences, and ambitious projects to life.",
      icon: Palette,
      class: "studio-community",
      tags: ["Branding", "Digital experiences"],
    },
    {
      title: "Tech teams",
      subtitle: "Builders meet dreamers.",
      copy: "Connect with businesses who have the vision. Bring the engineering expertise that makes it happen.",
      icon: Code2,
      class: "tech-community",
      tags: ["Products", "Development"],
    },
    {
      title: "Agencies",
      subtitle: "A bigger circle of expertise.",
      copy: "Expand your capabilities without doing it all yourself. Find specialist partners for your next client project.",
      icon: TrendingUp,
      class: "agency-community",
      tags: ["Marketing", "Strategy"],
    },
    {
      title: "Small businesses",
      subtitle: "Local roots. Open horizons.",
      copy: "Share what makes your business special and discover useful partnerships, near you and beyond.",
      icon: Globe2,
      class: "small-community",
      tags: ["Services", "New connections"],
    },
  ];
  return (
    <section className="section community-section" id="community">
      <div className="container-wide">
        <Heading
          label="Your kind of people. Your kind of ambition."
          title={
            <>
              Different businesses.
              <br />
              <span className="serif">The same drive to build.</span>
            </>
          }
          copy="From a two-person studio to a growing product team, there’s a place for your business—and someone who needs what you do."
        />
        <div className="community-bento">
          {groups.map((g, i) => (
            <article className={`community-tile ${g.class}`} key={g.title}>
              <div className="community-tile-top">
                <g.icon />
                <span>0{i + 1}</span>
              </div>
              <div className="community-tile-art">
                {i === 0 || i === 1 ? (
                  <img
                    src={i === 0 ? appIcon : links}
                    alt=""
                    width={160}
                    height={160}
                    loading="lazy"
                  />
                ) : (
                  <div className="category-symbol">
                    <g.icon />
                  </div>
                )}
              </div>
              <h3>{g.title}</h3>
              <h4>{g.subtitle}</h4>
              <p>{g.copy}</p>
              <div className="detail-tags">
                {g.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Button variant="ghost" onClick={explore} aria-label={`Explore ${g.title}`}>
                Find your circle <ArrowUpRight />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const stories = [
  {
    name: "Arjun Mehta",
    role: "Co-founder, Orbit",
    quote: "Our best collaboration started with a simple hello.",
    metric: "2.5",
    caption: "hours saved on outreach",
    image: male,
    tone: "peach",
  },
  {
    name: "Sophia Patel",
    role: "Co-founder, Syntra",
    quote: "We found more than a partner. We found a team that gets what we’re building.",
    metric: "3x",
    caption: "more meaningful connections",
    image: founder,
    tone: "sky",
  },
  {
    name: "Maya Carter",
    role: "Founder, Bloom",
    quote: "Less chasing leads. More building things with good people.",
    metric: "34",
    caption: "new business connections",
    image: creative,
    tone: "lavender",
  },
];
export function AnimatedTestimonials() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % 3), 6000);
    return () => clearInterval(timer);
  }, [paused]);
  useEffect(() => {
    let cancelled = false;
    let context: { revert: () => void } | undefined;
    import("gsap").then(({ gsap }) => {
      if (cancelled || !root.current) return;
      context = gsap.context(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const mobile = window.innerWidth < 700;
        root.current?.querySelectorAll<HTMLElement>(".story-card").forEach((card, i) => {
          gsap.to(card, {
            flexGrow: i === active ? 2.35 : 1,
            duration: reduced ? 0 : 0.85,
            ease: "power3.inOut",
          });
          gsap.to(card.querySelector(".story-portrait"), {
            width: i === active ? (mobile ? "42%" : "44%") : "0%",
            opacity: i === active ? 1 : 0,
            duration: reduced ? 0 : 0.7,
            ease: "power3.inOut",
          });
          gsap.fromTo(
            card.querySelector(".story-portrait img"),
            { scale: 1.1 },
            { scale: 1, duration: reduced ? 0 : 1.1 },
          );
          if (i === active && !reduced)
            gsap.fromTo(
              card.querySelector(".story-shine"),
              { xPercent: -180 },
              { xPercent: 350, duration: 1.8, delay: 0.4, ease: "power2.inOut" },
            );
        });
      }, root);
    });
    return () => {
      cancelled = true;
      context?.revert();
    };
  }, [active]);
  return (
    <section className="section testimonials container-wide" id="stories">
      <Heading
        label="Community stories"
        title="What Teams Are Saying"
        copy="Big ambitions. Real connections. A better way to grow together."
      />
      <div
        className="animated-story-grid"
        ref={root}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        }}
      >
        {stories.map((s, i) => (
          <article
            className={`story-card story-${s.tone} ${i === active ? "is-active" : ""}`}
            key={s.name}
          >
            <div className="story-shine" />
            <div className="story-portrait" aria-hidden={i !== active}>
              <img
                src={s.image}
                alt={i === active ? `Illustrative portrait of ${s.name}` : ""}
                width={768}
                height={1024}
                loading="lazy"
              />
              <div className="story-person">
                {s.name}
                <small>{s.role}</small>
              </div>
            </div>
            <div className="story-body">
              <Button
                variant="ghost"
                className="story-select"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.name}'s story`}
                aria-pressed={i === active}
              >
                <span className="quote-mark">”</span>
              </Button>
              <p>“{s.quote}”</p>
              <div className="quote-metric">
                <strong>{s.metric}</strong>
                <small>{s.caption}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="story-controls">
        {stories.map((s, i) => (
          <Button
            variant="ghost"
            size="icon"
            key={s.name}
            aria-label={`Select ${s.name}'s testimonial`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span className={i === active ? "story-dot active" : "story-dot"} />
          </Button>
        ))}
        <Button variant="ghost" onClick={() => setPaused(!paused)} className="text-xs">
          {paused ? "Play stories" : "Pause stories"}
        </Button>
      </div>
      <p className="sample-note">
        Illustrative community stories and sample results. Not verified customer testimonials.
      </p>
    </section>
  );
}
export function WorkInPublic({ explore }: { explore: () => void }) {
  return (
    <section className="section work-section" id="show-your-work">
      <div className="container-wide">
        <Heading
          label="A little more behind the business"
          title={
            <>
              Don’t just show the result.
              <br />
              <span className="serif">Share the spark behind it.</span>
            </>
          }
          copy="The process, the breakthroughs, the lessons. Let other businesses see the thinking that makes your work yours."
        />
        <div className="work-gallery">
          {[
            {
              mark: "o",
              name: "Orbit Studio",
              label: "A new look. A bigger vision.",
              type: "Brand identity",
              image: appIcon,
            },
            {
              mark: "f",
              name: "Forma Labs",
              label: "Built better. Built together.",
              type: "Product launch",
              image: links,
            },
            {
              mark: "b",
              name: "Bloom Social",
              label: "Stories worth stopping for.",
              type: "Creative campaign",
              image: appIcon,
            },
          ].map((w, i) => (
            <article className={`work-card work-${i}`} key={w.name}>
              <div className="work-art">
                <img src={w.image} alt={w.label} width={250} height={250} loading="lazy" />
                <span>{w.type}</span>
                <h3>{w.label}</h3>
              </div>
              <div className="work-caption">
                <BizLogo mark={w.mark} />
                <div>
                  <b>{w.name}</b>
                  <small>Made with ambition</small>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`View ${w.name} work`}
                  onClick={explore}
                >
                  <ArrowUpRight />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ConnectionLoop({ explore }: { explore: () => void }) {
  return (
    <section className="section container-wide connection-loop" id="network-effect">
      <Heading
        label="The good kind of ripple effect"
        title={
          <>
            One hello.
            <br />
            <span className="serif">More than one possibility.</span>
          </>
        }
        copy="A connection becomes a conversation. A conversation becomes a collaboration. The work you make together opens the next door."
      />
      <div className="loop-layout">
        <div className="loop-visual">
          <div className="loop-ring ring-one" />
          <div className="loop-ring ring-two" />
          <img
            src={links}
            alt="A network of shared opportunity"
            width={320}
            height={320}
            loading="lazy"
          />
          <div className="loop-label label-one">
            <Users />A new connection
          </div>
          <div className="loop-label label-two">
            <MessageCircle />A shared idea
          </div>
          <div className="loop-label label-three">
            <Rocket />A launch together
          </div>
        </div>
        <div className="loop-copy">
          {[
            {
              icon: Users,
              title: "Build relationships, not a contact list.",
              copy: "Stay connected to businesses whose work and ambition you believe in.",
            },
            {
              icon: Zap,
              title: "Let different strengths do their thing.",
              copy: "Bring your best expertise. Find someone who brings what you don’t.",
            },
            {
              icon: TrendingUp,
              title: "Make the next opportunity easier to find.",
              copy: "Every project you share helps another business discover what you can do.",
            },
          ].map((item) => (
            <div key={item.title}>
              <item.icon />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
          <Button variant="link" onClick={explore}>
            See who’s in your next chapter <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
