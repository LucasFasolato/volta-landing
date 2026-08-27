"use client";

import Link from "next/link";
import { useEffect } from "react";

const FLOW_SECTION_SELECTOR = "[data-volta-flow-section]";

const branches = [
  { key: "store", intent: "Vender", product: "Store", href: "#store" },
  { key: "portfolio", intent: "Mostrarte", product: "Portfolio", href: "#portfolio" },
  { key: "booking", intent: "Reservas", product: "Booking", href: "#booking" },
  { key: "automate", intent: "Automatizar", product: "Automate", href: "#automate" },
] as const;

export function VoltaFlowObserver() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(FLOW_SECTION_SELECTOR),
    );

    if (!sections.length) return undefined;

    function setActive(activeSection: HTMLElement) {
      const activeIndex = sections.indexOf(activeSection);

      sections.forEach((section, index) => {
        section.dataset.flowState =
          index < activeIndex ? "passed" : index === activeIndex ? "active" : "idle";
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const next = visible[0]?.target;
        if (next instanceof HTMLElement) setActive(next);
      },
      {
        rootMargin: "-24% 0px -54% 0px",
        threshold: [0, 0.1, 0.3, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    setActive(sections[0]);

    return () => observer.disconnect();
  }, []);

  return null;
}

export function VoltaFlowIntro() {
  return (
    <div className="volta-flow-intro" aria-label="VOLTA Flow: de apagado a online">
      <div className="volta-flow-intro-copy">
        <span>VOLTA FLOW</span>
        <strong>Activar. Mover. Llegar a una acción.</strong>
      </div>

      <div className="volta-flow-signal" aria-hidden="true">
        <span className="volta-flow-state volta-flow-state-off">OFF</span>
        <span className="volta-flow-wire"><i /></span>
        <span className="volta-flow-core">VOLTA</span>
        <span className="volta-flow-wire volta-flow-wire-out"><i /></span>
        <span className="volta-flow-state volta-flow-state-online">ONLINE</span>
      </div>
    </div>
  );
}

export function VoltaFlowBranches() {
  return (
    <div className="volta-flow-branches">
      <div className="volta-flow-branch-head">
        <span>UNA MISMA ENERGÍA</span>
        <strong>Cuatro direcciones.</strong>
      </div>

      <div className="volta-flow-branch-trunk" aria-hidden="true">
        <span className="volta-flow-branch-source">VOLTA</span>
        <i />
      </div>

      <div className="volta-flow-branch-grid" aria-label="Ramas del ecosistema VOLTA">
        {branches.map((branch) => (
          <Link key={branch.key} href={branch.href} className="volta-flow-branch-link">
            <span className="volta-flow-branch-dot" aria-hidden="true" />
            <small>{branch.intent}</small>
            <strong>{branch.product}</strong>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function VoltaFlowMarker({
  step,
  label,
  terminal = false,
}: {
  step: string;
  label: string;
  terminal?: boolean;
}) {
  return (
    <div className={`volta-flow-marker ${terminal ? "volta-flow-marker-terminal" : ""}`} aria-hidden="true">
      <span className="volta-flow-marker-line"><i /></span>
      <span className="volta-flow-marker-node">
        <b>{step}</b>
        <em>{label}</em>
      </span>
    </div>
  );
}
