import { motion, type MotionProps } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import confetti from "canvas-confetti";
import { Card } from "../ui/Card";
import { env } from "../config/env";
import type { profile as profileValue } from "../data/profile";

export function ContactSection({
  profile,
  reveal,
}: {
  profile: typeof profileValue;
  reveal: MotionProps;
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCaptchaToken(null);
  }, [isDark]);

  function validate(field: string, value: string) {
    if (field === "name") {
      if (value.trim().length === 0) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }
    if (field === "email") {
      if (value.trim().length === 0) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email.";
    }
    if (field === "message") {
      if (value.trim().length === 0) return "Message is required.";
      if (value.trim().length < 6)
        return "Message must be at least 6 characters.";
    }
    return "";
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      setErrors((p) => ({ ...p, [name]: validate(name, value) }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  }

  const isFormValid =
    !validate("name", form.name) &&
    !validate("email", form.email) &&
    !validate("message", form.message);

  const canSend = useMemo(() => {
    const ok =
      isFormValid &&
      !!env.EMAILJS_PUBLIC_KEY &&
      !!env.EMAILJS_SERVICE_ID &&
      !!env.EMAILJS_TEMPLATE_ID;
    const captchaOk = env.RECAPTCHA_SITE_KEY ? !!captchaToken : true;
    return ok && captchaOk && !sending;
  }, [form, captchaToken, sending, isFormValid]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    setErrors({
      name: validate("name", form.name),
      email: validate("email", form.email),
      message: validate("message", form.message),
    });

    if (!canSend) return;

    try {
      setSending(true);
      emailjs.init({ publicKey: env.EMAILJS_PUBLIC_KEY! });
      await emailjs.send(env.EMAILJS_SERVICE_ID!, env.EMAILJS_TEMPLATE_ID!, {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
        "g-recaptcha-response": captchaToken,
      });
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
      setForm({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: "", email: "", message: "" });
      setCaptchaToken(null);
      captchaRef.current?.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid">
      <motion.div {...reveal}>
        <Card>
          <form className="mt-5 space-y-3" onSubmit={onSubmit}>
            {/* Name */}
            <div>
              <label className="text-xs text-zinc-600 dark:text-zinc-300">
                Name
              </label>
              <input
                className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition
                  bg-white/5 focus:border-emerald-300/60
                  ${
                    errors.name && touched.name
                      ? "border-red-400/70"
                      : "border-black/5 dark:border-white/10"
                  }`}
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-zinc-600 dark:text-zinc-300">
                Email
              </label>
              <input
                className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition
                  bg-white/5 focus:border-emerald-300/60
                  ${
                    errors.email && touched.email
                      ? "border-red-400/70"
                      : "border-black/5 dark:border-white/10"
                  }`}
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                type="email"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-zinc-600 dark:text-zinc-300">
                Message
              </label>
              <textarea
                className={`mt-1 min-h-28 w-full resize-y rounded-xl border px-3 py-2 text-sm outline-none transition
                  bg-white/5 focus:border-emerald-300/60
                  ${
                    errors.message && touched.message
                      ? "border-red-400/70"
                      : "border-black/5 dark:border-white/10"
                  }`}
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="What would you like to build?"
              />
              {errors.message && touched.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            {/* reCAPTCHA */}
            {env.RECAPTCHA_SITE_KEY ? (
                <div className="pt-2">
                <div className="overflow-hidden rounded-md w-fit">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={env.RECAPTCHA_SITE_KEY ?? ""}
                    theme="light"
                    onChange={(t) => setCaptchaToken(t)}
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-zinc-500">
                reCAPTCHA disabled.
              </p>
            )}

            {/* Submit */}
            <button
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-2
                text-sm font-medium text-zinc-950 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!canSend}
              type="submit"
            >
              {sending ? "Sending..." : "Send message"}
            </button>

            {/* EmailJS warning */}
            {!env.EMAILJS_PUBLIC_KEY ||
            !env.EMAILJS_SERVICE_ID ||
            !env.EMAILJS_TEMPLATE_ID ? (
              <p className="text-xs text-amber-200/80">
                Add EmailJS env vars to enable sending.
              </p>
            ) : null}
          </form>
        </Card>
      </motion.div>
    </div>
  );
}