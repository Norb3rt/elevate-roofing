"use client";

import { useMemo, useState } from "react";
import { z } from "zod";

type Service = "repair" | "replacement" | "installation" | "inspection";
type Material = "shingle" | "tile" | "metal" | "flat";
type Timeline = "asap" | "soon" | "planning";

const serviceOptions: { id: Service; label: string; desc: string; icon: string }[] = [
  { id: "repair", label: "Roof Repair", desc: "Leaks, storm damage, missing tiles", icon: "🛠" },
  { id: "replacement", label: "Full Replacement", desc: "Tear-off & brand new system", icon: "🏚" },
  { id: "installation", label: "New Installation", desc: "New build or addition", icon: "🏗" },
  { id: "inspection", label: "Inspection Only", desc: "Free professional assessment", icon: "🔍" },
];

const materialOptions: { id: Material; label: string; pricePerSqft: number }[] = [
  { id: "shingle", label: "Asphalt Shingle", pricePerSqft: 6 },
  { id: "tile", label: "Clay / Concrete Tile", pricePerSqft: 12 },
  { id: "metal", label: "Standing Seam Metal", pricePerSqft: 15 },
  { id: "flat", label: "Flat / TPO", pricePerSqft: 9 },
];

const timelineOptions: { id: Timeline; label: string; desc: string; mult: number }[] = [
  { id: "asap", label: "ASAP", desc: "Within 2 weeks", mult: 1.1 },
  { id: "soon", label: "1–3 Months", desc: "Planning soon", mult: 1.0 },
  { id: "planning", label: "Just Exploring", desc: "Researching options", mult: 0.95 },
];

const serviceMult: Record<Service, number> = {
  repair: 0.25,
  replacement: 1.0,
  installation: 1.15,
  inspection: 0.0,
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20).regex(/^[0-9+\-()\s]+$/, "Digits only"),
  email: z.string().trim().email("Enter a valid email").max(120),
});

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

interface Props {
  locationName?: string;
}

export function RoofingEstimator({ locationName }: Props) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<Service | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);
  const [size, setSize] = useState(1800);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    if (!service || !material || !timeline) return null;
    if (service === "inspection") return { low: 0, high: 0, free: true };
    const base = materialOptions.find((m) => m.id === material)!.pricePerSqft;
    const mid = base * size * serviceMult[service] * timelineOptions.find((t) => t.id === timeline)!.mult;
    return { low: Math.round((mid * 0.85) / 100) * 100, high: Math.round((mid * 1.15) / 100) * 100, free: false };
  }, [service, material, size, timeline]);

  const canNext =
    (step === 1 && !!service) ||
    (step === 2 && !!material) ||
    (step === 3 && size > 0) ||
    (step === 4 && !!timeline);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = contactSchema.safeParse(contact);
    if (!res.success) {
      const fieldErrors: Record<string, string> = {};
      res.error.issues.forEach((i) => (fieldErrors[i.path[0] as string] = i.message));
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const totalSteps = 4;

  return (
    <div className="mx-auto w-full max-w-2xl bg-card p-6 md:p-10">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Instant Estimate</p>
          <h3 className="mt-1 text-2xl font-bold text-foreground">Get Your Roofing Quote</h3>
        </div>
        {!submitted && (
          <p className="text-xs font-medium text-muted-foreground">
            Step {Math.min(step, totalSteps)} of {totalSteps}
          </p>
        )}
      </div>

      {/* Progress */}
      {!submitted && (
        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < step ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>
      )}

      <div className="mt-6 min-h-[320px]">
        {/* Step 1 */}
        {step === 1 && (
          <div>
            <p className="text-sm font-semibold text-foreground">What do you need?</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {serviceOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setService(o.id)}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:shadow-md hover:border-primary/60 ${
                    service === o.id
                      ? "border-primary bg-primary-soft/40 ring-2 ring-primary"
                      : "border-border bg-background hover:bg-card"
                  }`}
                >
                  <span className="text-xl">{o.icon}</span>
                  <p className="mt-2 text-sm font-semibold text-foreground">{o.label}</p>
                  <p className="text-xs text-muted-foreground">{o.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <p className="text-sm font-semibold text-foreground">Preferred roof material?</p>
            <div className="mt-3 grid gap-2">
              {materialOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setMaterial(o.id)}
                  className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 hover:shadow-md hover:border-primary/60 ${
                    material === o.id
                      ? "border-primary bg-primary-soft/40 ring-2 ring-primary"
                      : "border-border bg-background hover:bg-card"
                  }`}
                >
                  <span className="text-sm font-semibold text-foreground">{o.label}</span>
                  <span className="text-xs text-muted-foreground">from {usd(o.pricePerSqft)}/sqft</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <p className="text-sm font-semibold text-foreground">Approximate roof size</p>
            <p className="text-xs text-muted-foreground">Drag to estimate — most homes are 1,500–2,500 sqft.</p>
            <div className="mt-6 text-center">
              <span className="text-5xl font-black tracking-tight text-primary">{size.toLocaleString()}</span>
              <span className="ml-1 text-sm font-semibold text-muted-foreground">sqft</span>
            </div>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={size}
              aria-label="Approximate roof size in square feet"
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-6 w-full accent-[color:var(--primary)] cursor-pointer transition-opacity duration-200 hover:opacity-90 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-125"
            />
            <div className="mt-1 flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>500</span><span>2,500</span><span>5,000</span>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <p className="text-sm font-semibold text-foreground">When do you want to start?</p>
            <div className="mt-3 grid gap-2">
              {timelineOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setTimeline(o.id)}
                  className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 hover:shadow-md hover:border-primary/60 ${
                    timeline === o.id
                      ? "border-primary bg-primary-soft/40 ring-2 ring-primary"
                      : "border-border bg-background hover:bg-card"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{o.label}</p>
                    <p className="text-xs text-muted-foreground">{o.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5 — Estimate + contact */}
        {step === 5 && estimate && !submitted && (
          <div>
            <div className="rounded-2xl bg-brand-gradient p-6 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                Your Estimated {locationName ? `${locationName} ` : ""}Budget
              </p>
              {estimate.free ? (
                <p className="mt-2 text-4xl font-black">Free Inspection</p>
              ) : (
                <p className="mt-2 text-4xl font-black tracking-tight">
                  {usd(estimate.low)} <span className="opacity-70">–</span> {usd(estimate.high)}
                </p>
              )}
              <p className="mt-2 text-xs opacity-85">
                Final pricing confirmed after a free on-site inspection.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <p className="text-sm font-semibold text-foreground">
                Where should we send your detailed quote?
              </p>
              <div>
                <input
                  className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition duration-200"
                  placeholder="Full name"
                  aria-label="Full name"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  maxLength={80}
                />
                {errors.name && <p className="mt-1 px-2 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input
                    className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition duration-200"
                    placeholder="Phone"
                    aria-label="Phone number"
                    inputMode="tel"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    maxLength={20}
                  />
                  {errors.phone && <p className="mt-1 px-2 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition duration-200"
                    placeholder="Email"
                    aria-label="Email address"
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    maxLength={120}
                  />
                  {errors.email && <p className="mt-1 px-2 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-md hover:bg-primary/95"
              >
                Send My Quote
              </button>
            </form>
          </div>
        )}

        {/* Success */}
        {submitted && (
          <div className="grid place-items-center py-10 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h4 className="mt-4 text-xl font-bold text-foreground">Thanks, {contact.name.split(" ")[0]}!</h4>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              A licensed Elevate Roofing specialist will call you within one business hour to confirm your free on-site inspection.
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      {!submitted && step < 5 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-md hover:bg-secondary disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-md hover:bg-primary/95 disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {step === 4 ? "See My Estimate" : "Continue"}
          </button>
        </div>
      )}
    </div>
  );
}
