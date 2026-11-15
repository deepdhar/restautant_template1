"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { validateEmail, validatePhone } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

export default function ReservationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", requests: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const modal = document.getElementById("reservation-modal");
    if (!modal) return;
    const observer = new MutationObserver(() => {
      setIsOpen(modal.style.display === "flex");
    });
    observer.observe(modal, { attributes: true, attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, []);

  const closeModal = () => {
    const modal = document.getElementById("reservation-modal");
    if (modal) modal.style.display = "none";
    setIsOpen(false);
    setSubmitted(false);
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email)) newErrors.email = "Valid email required";
    if (!validatePhone(formData.phone)) newErrors.phone = "Valid phone required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests) newErrors.guests = "Select number of guests";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // TODO: Integrate with backend reservation API (NestJS)
    // await fetch('/api/reservations', { method: 'POST', body: JSON.stringify(formData) });
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  if (!isOpen) return <div id="reservation-modal" style={{ display: "none" }} />;

  return (
    <div
      id="reservation-modal"
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:bg-red-50"
          style={{ borderColor: "var(--border-subtle)", color: "var(--muted-text)" }}
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--cta-red)" }}
            >
              <span className="text-2xl text-white">✓</span>
            </div>
            <h2
              id="modal-title"
              className="font-serif text-2xl mb-2"
              style={{ color: "var(--dark-text)" }}
            >
              Reservation Confirmed!
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--muted-text)" }}>
              Thank you, {formData.name}! We&apos;ve received your reservation request.
              We&apos;ll send a confirmation to {formData.email} shortly.
            </p>
            <button onClick={closeModal} className="btn-primary">
              Done
            </button>
          </div>
        ) : (
          <>
            <h2
              id="modal-title"
              className="font-serif text-2xl md:text-3xl mb-1"
              style={{ color: "var(--dark-text)" }}
            >
              Reserve Your Table
            </h2>
            <p className="text-sm mb-7" style={{ color: "var(--muted-text)" }}>
              Fill in your details and we&apos;ll prepare for your arrival.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: "var(--cta-red)" }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: "var(--cta-red)" }}>{errors.email}</p>}
                </div>
              </div>

              {/* Phone + Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="+1 234 567 8900"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="text-xs mt-1" style={{ color: "var(--cta-red)" }}>{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`form-input ${errors.guests ? "error" : ""}`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                    <option value="9+">9+ Guests (call us)</option>
                  </select>
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`form-input ${errors.date ? "error" : ""}`}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && <p className="text-xs mt-1" style={{ color: "var(--cta-red)" }}>{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`form-input ${errors.time ? "error" : ""}`}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-xs mt-1" style={{ color: "var(--cta-red)" }}>{errors.time}</p>}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: "var(--muted-text)" }}>
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  className="form-input resize-none"
                  rows={3}
                  placeholder="Allergies, dietary restrictions, celebrations..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={loading}
              >
                {loading ? "Submitting..." : "CONFIRM RESERVATION"}
                {!loading && <ArrowRight size={14} className="btn-arrow" />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
