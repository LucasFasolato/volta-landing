export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="container-shell py-8 md:py-10">
        <div className="flex flex-col gap-5 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-headline text-base font-extrabold tracking-[-0.04em] text-primary">
              VOLTA
            </div>
            <div className="mt-1 text-xs text-on-surface-variant/80">
              © {new Date().getFullYear()} VOLTA. Todos los derechos reservados.
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-xs">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
            <span>Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
};