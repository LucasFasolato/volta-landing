// Preview URLs must never become the public canonical origin.
const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configured
  ? new URL(configured.startsWith("http") ? configured : `https://${configured}`).origin
  : "https://volta-landing-delta.vercel.app";
export const siteTitle = "VOLTA | Tu próximo paso, online.";
export const siteDescription = "Productos y tecnología para vender, organizar reservas y mostrar tu trabajo. Conocé VOLTA Store, Booking y Portfolio, y las iniciativas que estamos construyendo.";
