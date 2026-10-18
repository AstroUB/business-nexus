import type { PointerEvent } from "react";
import { ProductShowcase } from "./product-showcase";

export function HeroDashboard() {
  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const surface = event.currentTarget;
    const box = surface.getBoundingClientRect();
    surface.style.setProperty("--dashboard-x", `${-((event.clientY - box.top) / box.height - 0.5) * 12}deg`);
    surface.style.setProperty("--dashboard-y", `${((event.clientX - box.left) / box.width - 0.5) * 18}deg`);
  };
  return <div className="hero-dashboard-scroll" onPointerMove={tilt} onPointerLeave={event => {
    event.currentTarget.style.setProperty("--dashboard-x", "0deg");
    event.currentTarget.style.setProperty("--dashboard-y", "0deg");
  }}><div className="hero-dashboard-tilt"><ProductShowcase compact /></div></div>;
}