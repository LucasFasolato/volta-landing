import { BrandLogo } from "@/components/ui/brand-logo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-surface-container-lowest">
      <div className="container-shell py-8 md:py-10">
        <div className="flex flex-col gap-6 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <div>
            <BrandLogo imageClassName="h-9 w-9 rounded-lg" labelClassName="text-base md:text-lg" />
            <div className="mt-3 max-w-md text-xs leading-6 text-on-surface-variant/80">
              Soluciones conectadas a WhatsApp para atender, vender, gestionar y operar mejor.
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
            <span>Atencion</span>
            <span>Pedidos</span>
            <span>Turnos</span>
            <span>Operacion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
