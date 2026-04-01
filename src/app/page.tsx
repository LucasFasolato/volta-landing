import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
// Asumiendo que crearás problem.tsx, features.tsx y cta.tsx siguiendo los patrones anteriores

export default function Home() {
  return (
    <main className="flex-1">
      {/* Navegación (Minimalista, Glassmorphism) */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b-0">
        <nav className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-primary font-headline">VOLTA</div>
          <div className="hidden md:flex space-x-8">
            <span className="text-xs uppercase tracking-widest font-bold text-white hover:text-primary cursor-pointer transition-colors">Plataforma</span>
            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-white cursor-pointer transition-colors">Soluciones</span>
          </div>
        </nav>
      </header>

      <Hero />
      <Metrics />
      
      {/* CTA Final Embebido por brevedad */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-5xl mx-auto bg-surface-container-low rounded-[3rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden ghost-border shadow-2xl">
          <div className="glow-ambient bg-primary w-[400px] h-[400px] -top-20 -left-20 opacity-10"></div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white leading-tight relative z-10">
            Dejá de responder mensajes. <br/>
            <span className="text-primary text-glow">Empezá a vender</span> en automático.
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10 pt-8">
            <button className="bg-gradient-cta text-[#003919] font-black text-lg px-12 py-6 rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              Empezar mi prueba gratis →
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Sin tarjeta de crédito
            </span>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-outline-variant/10 text-center text-on-surface-variant text-sm font-body">
        © {new Date().getFullYear()} VOLTA Kinetic Systems. All rights reserved.
      </footer>
    </main>
  );
}