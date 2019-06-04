import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import './contact.module.css';

const Contact = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Layout>
      <SEO title="Contact Me" />
      <section styleName="contact-container">
        Shoot me a message and I'll get back to you as soon as I can!
        <form styleName="form" netlify>
          <label for="email">
            Email
            <br />
            <input
              type="email"
              name="email"
              aria-label="Email"
              aria-required="true"
              styleName="email-input"
              ref={ref}
              required
            />
          </label>
          <label for="message">
            Message
            <br />
            <textarea
              type="text"
              name="message"
              aria-label="Message"
              aria-required="true"
              placeholder="Say something 👋"
              rows="10"
              required
            />
          </label>
          <input type="submit" styleName="submit" value="Send 🚀" />
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
