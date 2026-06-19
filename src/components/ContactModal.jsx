import React, { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const WEB3FORMS_ACCESS_KEY = "ee43ca13-516e-4b99-997c-d34ce720501c";

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Please enter a valid name.");
      setStatus("error"); return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error"); return;
    }
    if (!message.trim()) {
      setErrorMessage("Please write a message.");
      setStatus("error"); return;
    }

    setStatus("loading");

    try {
      const submitData = new FormData();
      submitData.append("access_key", WEB3FORMS_ACCESS_KEY);
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      submitData.append("subject", "New Message from Portfolio");
      submitData.append("from_name", "Portfolio Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setStatus("idle");
          onClose();
        }, 3000);
      } else {
        setErrorMessage(data.message || "Failed to send message.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Something went wrong! Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={() => status !== "loading" && onClose()}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-[var(--border-color)]">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-main)] tracking-tight">Contact</h3>
            <p className="text-xs text-[var(--text-dim)] mt-0.5">Get in touch directly</p>
          </div>
          <button
            onClick={onClose}
            disabled={status === "loading"}
            className="w-8 h-8 flex items-center justify-center bg-transparent border border-[var(--border-color)] rounded-lg text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-main)] transition-all cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              placeholder="Your name"
              className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--border-hover)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--border-hover)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--border-hover)] transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2.5 rounded-lg text-xs">
              {errorMessage}
            </div>
          )}
          {status === "success" && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2.5 rounded-lg text-xs">
              Message sent successfully! 🎉
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={status === "loading"}
              className="btn-secondary text-xs py-2 px-4 flex-1 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary text-xs py-2 px-4 flex-1 cursor-pointer"
            >
              {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send size={12} /> Send</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
