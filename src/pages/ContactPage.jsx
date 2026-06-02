import React, { useState } from "react";
import { Link } from "react-router-dom";

const ACCESS_KEY = "170c5a5d-d2fb-4a42-b5cf-182a208cbe49";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFeedback("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setFeedback("Unable to send your message. Please check your network and try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Me</h1>
        <p className="mt-4 text-gray-300">
          I&apos;m always open to new opportunities and collaborations. Send me a message and I&apos;ll get back to you soon.
        </p>

        <form className="mt-10 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-gray-200">Name</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-200">Email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-gray-200">Subject</span>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="Project, question, or message"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-200">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="Tell me about your project..."
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {feedback && (
          <div className={`mt-6 rounded-3xl border px-4 py-4 text-sm ${status === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200" : "border-rose-500/30 bg-rose-500/10 text-rose-200"}`}>
            {feedback}
          </div>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">
        Replace the access key in <code className="rounded-md bg-slate-900/70 px-1 py-0.5">ACCESS_KEY</code> with your Web3Forms key.
      </p>
    </div>
  );
};

export default ContactPage;
