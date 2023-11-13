import { useForm, ValidationError } from '@formspree/react';
import confirmIcon from './confirmIcon.svg'
import errorIcon from './errorIcon.svg'

import { useEffect, useState } from 'react';
const Contact = () => {

    const [state, handleSubmit] = useForm("xoqorpwp");
    const [isDataFilled, setIsDataFilled] = useState(false)
    const [contactPressed, setContactPressed] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    useEffect(() => {
        handleButtonActive();
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setFormData({ ...formData, [name]: value })
        setContactPressed(false)
        handleButtonActive()

    }
    const handleButtonActive = () => {
        formData.name.length && formData.email.length && formData.message.length ? setIsDataFilled(true) : setIsDataFilled(false)
    }

    return (

        <div className='contact'>
            {!state.succeeded ?
                <>
                    <div className="contact-us-title">
                        <h2>Contact us</h2>
                        <p>Thank you for reaching out to HappyCode!</p>
                        <p>Please complete the form below with details about your project.</p>
                    </div>
                    <div className='contact-us-form-title'>
                        <form onSubmit={handleSubmit} noValidate>
                            <label htmlFor="name">
                                Full name*
                            </label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                className={`form-style ${contactPressed && !formData.name.length ? 'error-border' : ''}`}
                                placeholder='Enter your full name...'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <div className='error'>
                                {contactPressed && !formData.name.length ? <> <img src={errorIcon} alt="" /> This text input is required</> : ''}
                            </div>

                            <label htmlFor="email">
                                Email*
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className={`form-style ${contactPressed && !formData.email.length || state.errors ? 'error-border' : ''}`}
                                placeholder='Enter your email...'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <div className='error'>
                                {formData.email.length ?
                                    <>
                                        {state.errors && <> <img src={errorIcon} alt="" /> Invalid email adress</>}

                                    </>
                                    :
                                    ''}
                                {contactPressed && !formData.email.length ? <> <img src={errorIcon} alt="" /> This text input is required</> : ''}
                            </div>

                            <label htmlFor="message">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={`form-style form-text-area ${contactPressed && !formData.message.length ? 'error-border' : ''}`}
                                placeholder="Enter your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                            <div className='error'>
                                {contactPressed && !formData.message.length ? <> <img src={errorIcon} alt="" /> This text input is required</> : ''}
                            </div>

                            <div className={`contact-us-form-button ${state.submitting ? 'pressed' : ''}`} >
                                <div className='contact-us-form-button-border' >
                                    <button
                                        type="submit"
                                        disabled={!isDataFilled}
                                    >
                                        Contact
                                    </button>
                                    <div className={`${!isDataFilled && 'contact-disabled-button'}`}
                                        onClick={() => setContactPressed(true)}
                                    />
                                </div>
                            </div>
                        </form >
                    </div>
                </>
                :
                <div className='contact-us-succeeded'>
                    <h2>Thank you for contact  to HappyCode!</h2>
                    <h2>Our team will get back to you soon!</h2>
                    <img src={confirmIcon} alt="" />
                </div>
            }
        </div >
    )
}
export default Contact

