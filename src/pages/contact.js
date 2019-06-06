import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import './contact.module.css';

const Contact = () => {
  const ref = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();
    fetch(
      'https://ks1ulmlnu0.execute-api.us-east-1.amazonaws.com/Production/sendemail',
      {
        method: 'POST',
        body: JSON.stringify(form)
      }
    ).then(() => (window.location = '/success'));
  };

  const handleInputChange = e => {
    let newData = form;
    newData[e.target.name] = e.target.value;
    setForm(newData);
  };

  return (
    <Layout>
      <SEO title="Contact Me" />
      <section styleName="contact-container">
        <h1 styleName="title">Contact Me</h1>
        Shoot me a message and I'll get back to you as soon as I can!
        <form styleName="form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            Name:
            <br />
            <input
              type="text"
              name="name"
              aria-label="Name"
              aria-required="true"
              ref={ref}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <br />
            <input
              type="email"
              name="email"
              aria-label="Email"
              aria-required="true"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="message">
            Message:
            <br />
            <textarea
              type="text"
              name="message"
              aria-label="Message"
              aria-required="true"
              placeholder="Say something 👋"
              rows="10"
              onChange={handleInputChange}
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
