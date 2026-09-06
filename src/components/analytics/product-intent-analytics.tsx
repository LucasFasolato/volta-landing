"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { corporateProducts } from "@/data/corporate-products";

// One product map for presentation and measurement; no duplicate domain registry.
const productByHref = new Map(corporateProducts.map(product => [product.href.replace(/\/$/, ""), product.key]));
const placements = new Set(["products", "footer"]);

export function ProductIntentAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.type === "auxclick" && event.button !== 1) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const product = productByHref.get(anchor.href.replace(/\/$/, ""));
      if (!product) return;
      const placement = anchor.dataset.productPlacement;
      track("Product selected", { product, placement: placement && placements.has(placement) ? placement : "other" });
    }
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("auxclick", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("auxclick", onClick, { capture: true });
    };
  }, []);
  return null;
}
