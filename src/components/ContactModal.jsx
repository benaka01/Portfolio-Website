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
      setErrorMessage("Whoops! We need a valid name.");
      setStatus("error"); return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setErrorMessage("Whoops! That email doesn't look right.");
      setStatus("error"); return;
    }
    if (!message.trim()) {
      setErrorMessage("Don't forget to write a message!");
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
      setErrorMessage("Something went wrong! Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-[var(--text-main)]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[var(--border-color)]/50 backdrop-blur-sm" 
        onClick={() => status !== "loading" && onClose()}
      ></div>

      {/* Modal */}
      <div className="relative playful-card w-full max-w-lg bg-[var(--bg-secondary)] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header Block */}
        <div className="bg-[var(--color-magenta)] text-white p-6 border-b-3 border-[var(--border-color)] flex items-center justify-between">
          <h3 className="text-2xl font-[var(--font-heading)] font-bold">Say Hi! 👋</h3>
          <button
            onClick={onClose}
            disabled={status === "loading"}
            className="w-8 h-8 flex items-center justify-center bg-white border-2 border-[var(--border-color)] rounded-full text-[#2b2d42] shadow-[2px_2px_0px_var(--shadow-color)] hover:scale-110 transition-transform"
          >
            <X size={16} strokeWidth={3} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
          <div>
            <label className="block font-[var(--font-heading)] font-bold text-lg mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-[var(--bg-primary)] border-3 border-[var(--border-color)] rounded-xl shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] focus:outline-none focus:border-[var(--color-cyan)] focus:ring-0 font-bold"
            />
          </div>

          <div>
            <label className="block font-[var(--font-heading)] font-bold text-lg mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-4 py-3 bg-[var(--bg-primary)] border-3 border-[var(--border-color)] rounded-xl shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] focus:outline-none focus:border-[var(--color-cyan)] focus:ring-0 font-bold"
            />
          </div>

          <div>
            <label className="block font-[var(--font-heading)] font-bold text-lg mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
              rows={4}
              className="w-full px-4 py-3 bg-[var(--bg-primary)] border-3 border-[var(--border-color)] rounded-xl shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] focus:outline-none focus:border-[var(--color-cyan)] focus:ring-0 font-bold resize-none"
            />
          </div>

          {status === "error" && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl font-bold text-sm shadow-[2px_2px_0px_rgba(239,68,68,1)]">
              {errorMessage}
            </div>
          )}
          {status === "success" && (
            <div className="bg-[var(--color-green)] border-2 border-[var(--border-color)] text-white px-4 py-3 rounded-xl font-bold text-sm shadow-[2px_2px_0px_var(--shadow-color)]">
              Woohoo! Message sent successfully. 🎉
            </div>
          )}

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={status === "loading"}
              className="playful-btn flex-1 bg-[var(--bg-primary)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="playful-btn flex-1 bg-[var(--color-cyan)]"
            >
              {status === "loading" ? <Loader2 className="animate-spin" /> : "Send It!"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
