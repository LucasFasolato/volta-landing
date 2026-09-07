// Preview URLs must never become the public canonical origin.
const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configured
  ? new URL(configured.startsWith("http") ? configured : `https://${configured}`).origin
  : "https://volta-landing-delta.vercel.app";
export const siteTitle = "VOLTA | Tu próximo paso, online.";
export const siteDescription = "VOLTA es una compañía de productos y tecnología. Conocé Store, Booking y Portfolio, y descubrí lo que estamos construyendo con Shield, Bridge y Automate.";
