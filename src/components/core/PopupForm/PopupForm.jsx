'use client';

import { useState } from 'react';
import style from './PopupForm.module.css';

export default function FormPopup({ isOpen, onClose, setShowTable }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/info@vijayoverseas.com",
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                }
            );

            const jsonResponse = await response.json();

            if (jsonResponse.success === 'true') {
                localStorage.setItem('showTable', 'true');
                setShowTable(true);
                onClose();
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={style.overlay}>
            <div className={style.backdrop} onClick={onClose} />

            <div className={style.modal}>
                <form className={style.form} onSubmit={handleSubmit}>

                    <div className={style.row}>
                        <input name="contactPerson" required placeholder="Contact Person" />
                        <input name="phoneNumber" required placeholder="Phone Number" />
                    </div>

                    <input type="email" name="email" required placeholder="Email Address" />

                    <div className={style.row}>
                        <input name="companyName" placeholder="Company Name" />
                        <input name="country" placeholder="Country" />
                    </div>

                    {/* FormSubmit options */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Enquiry" />

                    {/* Error Message */}
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <div className={style.row}>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            style={{ backgroundColor: '#bd1c1c', margin: '0' }}
                        >
                            Close
                        </button>

                        <button type="submit" disabled={loading} style={{ margin: '0' }}>
                            {loading ? 'Submitting...' : 'View'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
