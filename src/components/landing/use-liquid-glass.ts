import { useEffect } from "react";

export function useLiquidGlass() {
  useEffect(() => {
    let disposed = false;
    let lenses: { destroy(): void }[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = window.setTimeout(async () => {
      try {
        await document.fonts.ready;
        const { default: liquidGL } = await import("liquid-gl");
        if (disposed) return;
        const result = liquidGL({
          target: ".liquid-site-header",
          content: ".nav",
          snapshot: "body",
          engine: "auto",
          resolution: 0.65,
          refraction: 0.012,
          bevelDepth: 0.1,
          bevelWidth: 0.12,
          frost: 3,
          shadow: false,
          specular: true,
          tilt: false,
          interaction: "fluid",
          interactionStrength: 0.12,
          zIndex: 30,
        });
        lenses = result ? (Array.isArray(result) ? result : [result]) : [];
      } catch {
        // The readable CSS glass surface remains when GPU rendering is unavailable.
      }
    }, 1600);
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      lenses.forEach(lens => lens.destroy());
    };
  }, []);
}