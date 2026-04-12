/// <reference types="vite/client" />

export const env = {
    EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
    EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
    EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
    RECAPTCHA_SITE_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY as string
  };
  