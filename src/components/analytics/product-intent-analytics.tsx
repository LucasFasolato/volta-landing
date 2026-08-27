"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const productByHref = new Map([
  ["https://www.voltastore.app", "store"],
  ["https://volta-portfolio-psi.vercel.app", "portfolio"],
  ["https://volta-booking.vercel.app", "booking"],
]);

function placementFor(anchor: HTMLAnchorElement) {
  return anchor.dataset.productPlacement || "other";
}

export function ProductIntentAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const product = productByHref.get(anchor.href.replace(/\/$/, ""));
      if (!product) return;

      track("Product selected", {
        product,
        placement: placementFor(anchor),
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
