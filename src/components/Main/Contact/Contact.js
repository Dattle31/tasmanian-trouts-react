import React, { useState } from "react";

const FORM_ENDPOINT = "";


export default function Contact() {
    
        const [submitted, setSubmitted] = useState(false);
        const handleSubmit = () => {
            setTimeout(() => {
            setSubmitted(true);
            }, 100);
        };

        if (submitted) {
            return (
            <>
                <h2>Thank you, we'll be in touch soon!</h2>
            </>
            );
        }

        return (
            <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            >
            <div><h3>Contact Us</h3></div>
            <div>
                <input type="text" placeholder="Your name" name="name" required />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
                <textarea placeholder="Your message" name="message" required />
            </div>
            <div>
                <button type="submit"> Send a message </button>
            </div>
            </form>
  );
};

