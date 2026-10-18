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
- Keep dashboard scroll and pointer transforms on separate nested wrappers so the two motions compose without overwriting each other.
- Apply rolling-label treatment in the shared Button, retaining native labels and Slot semantics; decorative duplicates stay CSS-only.

- Load GSAP and ScrollTrigger inside client effects through the landing motion hook, with scoped cleanup and reduced-motion alternatives, to keep SSR safe and animation lifecycle predictable.
- Keep rich landing sections in dedicated presentation components; testimonials rotate stories in a three-card composition with one expanding portrait to preserve the reference layout, and the journey uses viewport-wide slides within a sticky scroll band.
