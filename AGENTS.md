<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Landing page architecture
- Keep landing-page product previews in `src/components/landing`, separate from the content route, so reusable interactive demonstrations remain isolated.
- Product and connection interactions are explicitly sample-only until a real service is connected; never imply that preview actions create real accounts or subscriptions.
- Define landing-page visual styles and semantic colors centrally in `src/styles.css` to keep all sections coherent.
- Keep dashboard motion scroll-driven only; retain its nested wrappers for GSAP targeting without pointer event transforms.
- Keep the hero workspace independent of the lower product showcase; use accessible tab primitives and explicit sample-only connection feedback so presentation changes do not alter other previews.
- Keep shared Button labels native and stable, preserve Slot semantics, and define liquid-glass variants centrally without metallic glow or circular icon wells.
- Dynamically initialize official liquid-gl in the landing glass hook for navigation and empty button surfaces; keep native labels and Slot links untouched, destroy every lens on cleanup, and retain textured CSS glass without blur for button fallbacks.
- Use unframed editorial artwork in investor sections and scope large CTA sizing to command buttons, not icon-only controls; mix tinted white surfaces in oklab to preserve blue hue.

- Load GSAP and ScrollTrigger inside client effects through the landing motion hook, with scoped cleanup and reduced-motion alternatives, to keep SSR safe and animation lifecycle predictable.
- Keep rich landing sections in dedicated presentation components; testimonials rotate stories in a three-card composition with one expanding portrait to preserve the reference layout, and the journey uses viewport-wide slides within a sticky scroll band.
- Keep collaboration briefs in a separate sample-only presentation component with accessible tabs; this lets useful partnership guidance remain independent of product previews.
