import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  FeatureBento,
  FullPageJourney,
  Opportunities,
  CommunityBento,
  AnimatedTestimonials,
  WorkInPublic,
  ConnectionLoop,
} from "@/components/landing/enhanced-sections";
import { InvestorSection } from "@/components/landing/investor-preview";
import { useLandingMotion } from "@/components/landing/use-landing-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Globe2,
  Heart,
  Layers,
  Menu,
  MessageCircle,
  Minus,
  Palette,
  Plus,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Brand,
  businesses,
  BizLogo,
  ProductShowcase,
  type DemoView,
} from "@/components/landing/product-showcase";
import heroBlue from "@/assets/hero-blue.jpg";
import links from "@/assets/connect-links.png";
import appIcon from "@/assets/app-icon.png";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Connecto — Where businesses grow together" },
      {
        name: "description",
        content:
          "Connecto connects businesses and investors. Share work, pitch startup ideas, discover collaborators, and connect with investors who believe in your vision.",
      },
      { property: "og:title", content: "Connecto — Where businesses grow together" },
      {
        property: "og:description",
        content:
          "Share your work and pitch your ideas. Meet complementary businesses and investors who can help you grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faqs = [
  [
    "What is Connecto?",
    "Connecto is a social network for businesses. It brings your company profile, work, updates, connections, and service opportunities together in one place.",
  ],
  [
    "Is this for businesses or individuals?",
    "Company profiles are for businesses, from independent studios to growing startups. Investors are also part of the network: they discover company pitches and connect with teams to discuss backing their projects.",
  ],
  [
    "How does exchanging services work?",
    "Share what your business offers and what you need. Discover complementary businesses, start a conversation, and agree on a collaboration or a service exchange that works for both sides.",
  ],
  [
    "What can my business share?",
    "Your launches, achievements, case studies, behind-the-scenes work, lessons, and open collaboration opportunities. Anything that helps other businesses understand what you’re building.",
  ],
  ["How do investors use Connecto?", "Companies publish ideas and pitches with their vision, progress, and needs. Investors discover those pitches and connect with the company to discuss a potential investment. Both parties agree on their own terms; Connecto does not guarantee funding or process investment payments."],
  [
    "Can I join from anywhere?",
    "The vision is a global business community. Discover teams nearby or connect across borders, industries, and time zones.",
  ],
  [
    "When can I join the platform?",
    "Connecto is currently a concept preview. Account registration and the live business network are not open yet. You can explore the sample product experience on this page.",
  ],
];
function SectionHeading({
  label,
  title,
  copy,
  id,
}: {
  label: string;
  title: React.ReactNode;
  copy?: string;
  id?: string;
}) {
  return (
    <div className="section-heading" id={id}>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState<DemoView>("feed");
  const [dialog, setDialog] = useState<"join" | "directory" | null>(null);
  const [connections, setConnections] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  useLandingMotion();
  const explore = () => setDialog("directory");
  const join = () => setDialog("join");
  return (
    <>
      <header className="container-wide">
        <nav className="nav" aria-label="Main navigation">
          <Brand />
          <div className="nav-links">
            <a href="#why">Why Connecto</a>
            <a href="#features">Features</a>
            <a href="#investors">Investors</a>
            <a href="#how-it-works">How it works</a>
            <a href="#stories">Community</a>
          </div>
          <Button className="nav-cta rounded-full h-10 px-5 text-xs" onClick={join}>
            Join the community <ArrowUpRight />
          </Button>
          <Button
            className="mobile-menu"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="mobile-links">
            {[
              ["Why Connecto", "#why"],
              ["Features", "#features"],
              ["Investors", "#investors"],
              ["How it works", "#how-it-works"],
              ["Community", "#stories"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Button onClick={join}>
              Join the community <ArrowUpRight />
            </Button>
          </div>
        )}
      </header>
      <main>
        <section className="hero">
          <img className="hero-background" src={heroBlue} alt="" width={954} height={768} />
          <div className="container-wide">
            <span className="eyebrow">
              <span className="text-primary">✦</span> Big things start with a connection
            </span>
            <h1>
              Your business.
              <br />A world of <span className="serif">possibilities.</span>
            </h1>
            <p className="hero-copy">
              The network built for businesses, not résumés.
              <br />
              Share your work. Pitch your ideas. Meet partners and investors.
            </p>
            <div className="hero-actions">
              <Button className="rounded-full h-11 px-6 text-xs" onClick={join}>
                Find your next connection <ArrowUpRight />
              </Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-6 text-xs">
                <a href="#product">
                  See Connecto in action <ArrowDown />
                </a>
              </Button>
            </div>
            <p className="hero-note">For the ambitious teams building what’s next.</p>
          </div>
          <div className="hero-visual">
            <img
              className="hero-float"
              src={links}
              alt="Interlinked blue glass links"
              width={180}
              height={180}
            />
            <img
              className="hero-float right"
              src={appIcon}
              alt="Connecto sculptural app icon"
              width={168}
              height={168}
            />
            <ProductShowcase compact />
            <div className="floating-note">
              <Sparkles />
              <div>
                <b>Your next big thing is out there.</b>Let's help you find it.
              </div>
            </div>
          </div>
        </section>
        <section className="trust container-wide" aria-label="Business community">
          <p>A place for bold brands, bright ideas, and businesses like yours.</p>
          <div className="logo-row">
            <span>
              <Layers />
              Layers
            </span>
            <span>✳ Sisyphus</span>
            <span>◈ Circooles</span>
            <span>⌘ Quotient</span>
            <span>✴ Catalog</span>
          </div>
        </section>
        <section className="intro container-wide" id="why">
          <div className="intro-label">Less cold outreach. More real connection.</div>
          <h2>
            You’re building something great.
            <br />
            <span>It’s time the right businesses noticed.</span>
            <br />
            Meet a network that <span className="serif text-primary">works both ways.</span>
          </h2>
        </section>
        <section className="section container-wide" id="product">
          <SectionHeading
            label="Your new business home"
            title={
              <>
                Built to be seen.
                <br />
                <span className="serif">Designed to connect.</span>
              </>
            }
            copy="Not another directory. A living, breathing community where your work opens doors and every connection can become something more."
          />
          <div className="showcase-stage">
            <div className="showcase-tabs" role="tablist" aria-label="Product preview">
              {(
                [
                  { id: "feed", label: "Business feed", icon: Layers },
                  { id: "discover", label: "Discover businesses", icon: Compass },
                  { id: "messages", label: "Conversations", icon: MessageCircle },
                ] as const
              ).map((tab) => (
                <Button
                  role="tab"
                  aria-selected={view === tab.id}
                  key={tab.id}
                  variant="outline"
                  className={view === tab.id ? "selected" : ""}
                  onClick={() => setView(tab.id)}
                >
                  <tab.icon />
                  {tab.label}
                </Button>
              ))}
            </div>
            <ProductShowcase key={view} view={view} />
          </div>
          <div className="showcase-caption">
            <h3>
              {view === "feed"
                ? "Your work deserves more than a folder."
                : view === "discover"
                  ? "The right partner is closer than you think."
                  : "From a hello to a whole new possibility."}
            </h3>
            <p>
              {view === "feed"
                ? "Share the wins, the work, and the journey. Give other businesses a reason to remember you."
                : view === "discover"
                  ? "Explore complementary teams, discover their work, and make a meaningful connection."
                  : "Keep the conversation going. Build relationships that go beyond a connection request."}
            </p>
          </div>
        </section>
        <FeatureBento />
        <FullPageJourney />
        <InvestorSection explore={explore} />
        <Opportunities explore={explore} />
        <CommunityBento explore={explore} />
        <AnimatedTestimonials />
        <WorkInPublic explore={explore} />
        <ConnectionLoop explore={explore} />
        <section className="manifesto container-wide">
          <img
            src={links}
            alt="Two businesses, connected"
            width={130}
            height={130}
            loading="lazy"
          />
          <h2>
            Business is better
            <br />
            <span className="serif">when it’s not a solo journey.</span>
          </h2>
          <p>
            Behind every great business is a network that believes in it. We’re building a place
            where ambitious teams find theirs.
          </p>
        </section>
        <section className="section container-wide" id="faq">
          <div className="faq-layout">
            <div className="faq-heading">
              <span className="eyebrow">A few things you might be wondering</span>
              <h2>
                Good questions.
                <br />
                <span className="serif">Straight answers.</span>
              </h2>
              <p>
                Curious about where you fit in?
                <br />
                You’re in good company.
              </p>
              <Button variant="link" className="p-0 mt-3 text-xs" onClick={explore}>
                Take a look around <ArrowUpRight />
              </Button>
            </div>
            <div>
              {faqs.map(([question, answer], i) => (
                <div className="faq-item" key={question}>
                  <Button
                    variant="ghost"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {question}
                    {openFaq === i ? <Minus /> : <Plus />}
                  </Button>
                  {openFaq === i && <p id={`faq-answer-${i}`}>{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta glass-banner">
          <img className="banner-background" src={heroBlue} alt="" width={954} height={768} />
          <img src={links} alt="" width={230} height={230} loading="lazy" />
          <div className="container-wide">
            <span className="eyebrow mb-6">Your next chapter is a connection away</span>
            <div className="banner-glass-label">
              <Users />
              <span>
                Independent businesses.
                <br />
                <b>Connected by ambition.</b>
              </span>
            </div>
            <h2>
              Don’t just build a business.
              <br />
              <span className="serif text-primary">Build your circle.</span>
            </h2>
            <p>Your next collaborator, investor, or big idea is out there. Let’s meet.</p>
            <Button className="rounded-full h-11 px-6 text-xs" onClick={join}>
              Find your people <ArrowUpRight />
            </Button>
          </div>
          <img src={appIcon} alt="" width={230} height={230} loading="lazy" />
        </section>
      </main>
      <footer className="footer container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand light />
            <p>
              Big ambitions.
              <br />
              <span>Better connections.</span>
            </p>
            <small>Good things happen together.</small>
          </div>
          <div className="footer-links-panel">
            <img src={appIcon} alt="Connecto app icon" width={175} height={175} loading="lazy" />
            <div className="footer-link-columns">
              <div>
                <h4>Explore</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How it works</a>
                <a href="#opportunities">Opportunities</a>
                <a href="#investors">For investors</a>
                <a href="#stories">Community stories</a>
                <a href="#faq">FAQ</a>
              </div>
              <div>
                <h4>Connecto</h4>
                <a href="#why">Our purpose</a>
                <a href="#product">The platform</a>
                <a href="#community">Our community</a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    explore();
                  }}
                >
                  Explore businesses
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <small>© 2026 Connecto. Built for together.</small>
              <div className="newsletter">
                <h4>
                  <span>Good things are coming.</span>
                  <br />
                  Stay in the loop.
                </h4>
                <form
                  className="newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterMessage(
                      "The newsletter is coming soon. Your email hasn’t been saved.",
                    );
                  }}
                >
                  <input
                    type="email"
                    aria-label="Email address"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="rounded-lg">
                    Subscribe <ArrowUpRight className="size-3" />
                  </Button>
                </form>
                {newsletterMessage && (
                  <p role="status" className="newsletter-status">
                    {newsletterMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-watermark" aria-hidden="true">
          connecto.
        </div>
      </footer>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
      >
        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl font-medium">
              {dialog === "directory" ? "Meet your next collaborator." : "Good things are coming."}
            </DialogTitle>
            <DialogDescription>
              {dialog === "directory"
                ? "Explore a few sample businesses in the Connecto network."
                : "A new home for ambitious businesses. Connecto is currently a concept preview; registration opens at launch."}
            </DialogDescription>
          </DialogHeader>
          {dialog === "directory" ? (
            <div className="directory-grid">
              {businesses.map((b) => (
                <div className="directory-profile" key={b.name}>
                  <BizLogo mark={b.mark} style={b.style} />
                  <div className="min-w-0">
                    <h4>{b.name}</h4>
                    <p>
                      {b.type}
                      <br />
                      {b.location}
                    </p>
                  </div>
                  <Button
                    variant={connections.includes(b.name) ? "secondary" : "outline"}
                    onClick={() =>
                      setConnections((prev) =>
                        prev.includes(b.name)
                          ? prev.filter((n) => n !== b.name)
                          : [...prev, b.name],
                      )
                    }
                  >
                    {connections.includes(b.name) ? <Check /> : <Plus />}
                    {connections.includes(b.name) ? "Connected" : "Connect"}
                  </Button>
                </div>
              ))}
              <p className="modal-copy">
                These are sample connections for this preview. No requests are sent to real
                businesses.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <img
                src={appIcon}
                alt="Connecto app icon"
                width={140}
                height={140}
                className="mx-auto size-36 object-contain"
              />
              <p className="modal-copy mb-6">
                Show your work. Share your ambition.
                <br />
                Find the businesses that help you go further.
              </p>
              <Button onClick={explore} className="rounded-full px-6">
                Explore the sample network <ArrowUpRight />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
