"use client";

import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Contact.module.scss";
import content from "./contact.content.json";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.target;
    const formData = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      to_email: "info@webvibetech.com",
    };
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init("kq7iujNoFsxTN5pQo");
      await emailjs.send("service_77gn5c8", "template_f4wev2q", formData);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(content.errorMessage);
    }
  }

  return (
    <section id={content.id} className={styles.contact}>
      <div className="container">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className={styles.formWrap}>
          <form className={styles.phpEmailForm} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.colHalf}>
                <label htmlFor="name-field">{content.labels.name}</label>
                <input type="text" name="name" id="name-field" required />
              </div>
              <div className={styles.colHalf}>
                <label htmlFor="email-field">{content.labels.email}</label>
                <input type="email" name="email" id="email-field" required />
              </div>
              <div className={styles.colFull}>
                <label htmlFor="subject-field">{content.labels.subject}</label>
                <input type="text" name="subject" id="subject-field" required />
              </div>
              <div className={styles.colFull}>
                <label htmlFor="message-field">{content.labels.message}</label>
                <textarea name="message" id="message-field" rows={10} required />
              </div>
              <div className={styles.colFull}>
                {status === "loading" && <div className={styles.loading}>{content.loadingLabel}</div>}
                {status === "error" && <div className={styles.errorMessage}>{errorMsg}</div>}
                {status === "sent" && <div className={styles.sentMessage}>{content.sentMessage}</div>}
                {status !== "loading" && <button type="submit">{content.submitLabel}</button>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
