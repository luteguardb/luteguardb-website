"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      form.reset();

      setStatusType("success");
      setStatus(
        "Thank you. Your inquiry has been sent successfully."
      );
    } catch (error) {
      setStatusType("error");
      setStatus(
        "문의 전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">

      {/* PAGE INTRO */}
      <div className="contact-hero">

        <div className="eyebrow">
          CONTACT
        </div>

        <h1>
          Start a
          <br />
          conversation.
        </h1>

        <p>
          LUTEGUARD-B™, Blue Light Archive,
          연구 협업, 유통 및 비즈니스 제안에 관한
          문의를 기다립니다.
        </p>

      </div>


      {/* CONTACT CONTENT */}
      <section className="contact-section">

        {/* LEFT */}
        <div className="contact-intro">

          <div className="eyebrow">
            BUSINESS & PARTNERSHIP
          </div>

          <h2>
            We would love
            <br />
            to hear from you.
          </h2>

          <p>
            제품, 연구, 유통, 협업 및
            기타 비즈니스 문의를 남겨주세요.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span className="contact-detail-label">EMAIL</span>
              <a href="mailto:luteguard.b@gmail.com">
                luteguard.b@gmail.com
              </a>
            </div>

            <div className="contact-detail">

              <span className="contact-detail-label">
                INQUIRY
              </span>

              <span>
                Business · Partnership · Research
              </span>

            </div>

            <div className="contact-detail">

              <span className="contact-detail-label">
                BRAND
              </span>

              <span>
                LUTEGUARD-B™
              </span>

            </div>

            <div className="contact-detail">

              <span className="contact-detail-label">
                LOCATION
              </span>

              <span>
                Ganghwa · Gyodong Island · Korea
              </span>

            </div>

          </div>

        </div>


        {/* FORM */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* Netlify form name */}
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />

          {/* Spam honeypot - 절대 화면에 보이지 않음 */}
          <div
            className="netlify-honeypot"
            aria-hidden="true"
          >
            <label>
              Leave this field empty
              <input
                name="bot-field"
                tabIndex="-1"
                autoComplete="off"
              />
            </label>
          </div>


          {/* NAME */}
          <div className="form-field">

            <label htmlFor="name">
              NAME
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
            />

          </div>


          {/* EMAIL */}
          <div className="form-field">

            <label htmlFor="email">
              EMAIL
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
            />

          </div>


          {/* SUBJECT */}
          <div className="form-field">

            <label htmlFor="subject">
              SUBJECT
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Business, partnership, research..."
            />

          </div>


          {/* MESSAGE */}
          <div className="form-field">

            <label htmlFor="message">
              MESSAGE
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="7"
              placeholder="Tell us how we can help."
            />

          </div>


          {/* SUBMIT */}
          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >

            {isSubmitting
              ? "SENDING..."
              : "SEND INQUIRY →"}

          </button>


          {/* STATUS */}
          {status && (
            <div
              className={`form-status ${
                statusType === "success"
                  ? "form-success"
                  : "form-error"
              }`}
            >
              {status}
            </div>
          )}

        </form>

      </section>

    </section>
  );
}
