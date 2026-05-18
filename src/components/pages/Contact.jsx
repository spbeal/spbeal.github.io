import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen page-shell py-32 flex justify-center items-center">
      <Helmet>
        <title>Contact - Samuel</title>
      </Helmet>
      <div className="page-container">
        <div className="surface-card mx-auto grid w-full max-w-5xl gap-8 rounded-[32px] p-6 sm:p-8 lg:grid-cols-[0.85fr,1.15fr] lg:p-10">
          <div className="text-left">
            <span className="section-eyebrow">Contact</span>
            <h1 className="section-title">Get in touch</h1>
            <p className="section-copy max-w-md">
              If you want to talk about software, projects, or an opportunity to work together,
              send a message below or email me directly.
            </p>
            <a href="mailto:sampbeal@gmail.com" className="mt-6 inline-flex rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-semibold text-pink-600 hover:-translate-y-0.5 hover:text-pink-700">
              sampbeal@gmail.com
            </a>
          </div>

          <form
            method="POST"
            action="https://getform.io/f/1575d85d-5d25-4d12-925b-8d0d2a4b407d"
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 bg-white/90 p-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-slate-200 bg-white/90 p-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="6"
                placeholder="What would you like to talk about?"
                className="w-full rounded-2xl border border-slate-200 bg-white/90 p-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
              ></textarea>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
