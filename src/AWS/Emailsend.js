import React, { useState } from 'react';

function Emailsend() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/sendEmail', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Email sent successfully, you can show a success message or redirect to a thank-you page.
                console.log('Email sent successfully');
            } else {
                // Handle the error or show an error message to the user.
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error sending email', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <textarea name="message" placeholder="Message" onChange={handleInputChange} />
            <button type="submit">Send</button>
        </form>
    );
}

export default Emailsend;
