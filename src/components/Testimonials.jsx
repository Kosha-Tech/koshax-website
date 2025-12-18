import React from 'react';
import './Testimonials.css';

const testimonials = [
    { id: 1, name: "Shivam", text: "I used to drown in notifications. KoshaX helped me reclaim my attention span. It feels like my phone finally works for me, not the other way around." },
    { id: 2, name: "Ishant", text: "Finally, a digital space that doesn't feel like a marketplace. Privacy isn't just a setting here; it's the foundation. I feel safe organizing my life." },
    { id: 3, name: "Paridhi", text: "The Kosha layers concept changed how I view my digital storage. It's not just files; it's extensions of my mind. The calmest app I've ever used." }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">Trusted By</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial-card">
                            <p>"{t.text}"</p>
                            <h4>- {t.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
