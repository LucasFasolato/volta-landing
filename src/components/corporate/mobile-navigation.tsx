"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Productos", "#productos"],
  ["Por qué VOLTA", "#criterio"],
  ["Lo que viene", "#en-desarrollo"],
  ["Cómo empezar", "#como-funciona"],
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function onOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    }
    function onResize() {
      if (window.matchMedia("(min-width: 900px)").matches) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="mobile-navigation" ref={root}>
      <button
        className="menu-trigger"
        type="button"
        ref={trigger}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
      </button>
      <nav id="mobile-menu" aria-label="Navegación móvil" hidden={!open} className="mobile-menu">
        <p className="mobile-menu-label">Explorá VOLTA</p>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}<ArrowUpRight size={19} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  );
}
