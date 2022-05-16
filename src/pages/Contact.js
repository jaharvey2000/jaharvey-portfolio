import React, {useState} from 'react';

function Contact() {
    // Status Hook
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        // Don't refresh
        e.preventDefault();

        // Prompt user
        setStatus("Sending...");

        // Get the information to send to the email server
        const {name, email, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        // Use the 'fetch()' API to send form data to mail server
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        });

        // Set the status back for next contact form submission
        setStatus("Submit");

        // Wait for the response to the fetch call
        let result = await response.json();
        alert(result.status);
    };
    
    // HTML for this section
    // This form calls the handleSubmit() event handler which sends
    //  the HTTP request to the emailserver.js file
    return (
        <section id="contactSection">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">{status}</button>
            </form>
        </section>
    );
};

export default Contact;