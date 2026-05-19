import React from "react";
import { Helmet } from "react-helmet";
import ResumePdf from "../../assets/resume-10-15.pdf";

const resumeLastUpdated = "October 15th 2025"

const Resume = () => {
  return (
    <div className="w-full min-h-screen page-shell">
      <Helmet>
        <title>Resume - Samuel</title>
      </Helmet>

      <div className="page-container items-center justify-center leading-8 pt-32 pb-32">
        <div className="pb-10 text-center p-6">
          <span className="section-eyebrow">Resume</span>
          <h1 className="section-title">A quick view of my current resume</h1>
          <p className="section-copy mx-auto max-w-3xl">
            Preview it here, or open and download the PDF directly.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Last updated: {resumeLastUpdated}
          </p>
        </div>

        <section className="surface-card rounded-[32px] p-4 sm:p-6">
            <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-10 text-center md:hidden">
              <p className="max-w-md text-base leading-7 text-slate-700">
                Open the PDF directly or download a copy.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  className="rounded-full border border-pink-200 bg-pink-100 px-5 py-3 text-sm font-semibold text-pink-700 hover:-translate-y-0.5"
                  href={ResumePdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Resume
                </a>
                <a
                  className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 hover:text-pink-600"
                  href={ResumePdf}
                  download="Samuel_Beal_Resume.pdf"
                >
                  Download
                </a>
              </div>
            </div>

            <iframe
              title="Samuel Beal resume"
              src={ResumePdf}
              className="hidden h-[960px] w-full md:block"
            />
        </section>
      </div>
    </div>
  );
};

export default Resume;