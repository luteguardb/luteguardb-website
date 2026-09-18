"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

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
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("Thank you. Your inquiry has been sent.");
    } catch (error) {
      setStatus(
        "문의 전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">

      <div className="page-heading narrow">

        <div className="eyebrow">
          CONTACT
        </div>

        <h1>
          Start a conversation.
        </h1>

        <p>
          LUTEGUARD-B™, Blue Light Archive,
          연구 협업 및 비즈니스 제안에 관한
          문의를 받고 있습니다.
        </p>

      </div>


      <section className="contact-section">

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

        </div>


        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-form"
        >

          <input
            type="hidden"
            name="form-name"
            value="contact"
          />

          <p className="hidden-field">
            <label>
              Don't fill this out:
              <input name="bot-field" />
            </label>
          </p>


          <div className="form-field">

            <label htmlFor="name">
              NAME
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
            />

          </div>


          <div className="form-field">

            <label htmlFor="email">
              EMAIL
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
            />

          </div>


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


          <button
            className="contact-submit"
            type="submit"
            disabled={isSubmitting}
          >

            {isSubmitting
              ? "SENDING..."
              : "SEND INQUIRY →"}

          </button>


          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </section>

    </section>
  );
}
