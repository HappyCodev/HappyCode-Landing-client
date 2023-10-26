import { useForm, ValidationError } from '@formspree/react';
import confirmIcon from './confirmIcon.svg'
import { useEffect, useState } from 'react';
const Contact = () => {

    const [state, handleSubmit] = useForm("xoqorpwp");
    const [isDataFilled, setIsDataFilled] = useState(false)

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
        handleButtonActive()
    }

    const handleButtonActive = () => {
        console.log(state.errors, state.submitting)
        formData.name.length && formData.email.length && formData.message.length ? setIsDataFilled(true) : setIsDataFilled(false)
    }
    return (

        <div className='contact'>
            {!state.succeeded ?
                <>
                    <div className="contact-us-title">
                        <div className="center-content">
                            <h2>Contact us</h2>
                            <p>Thank you for reaching out to HappyCode!</p>
                            <p>Please complete the form below with details about your project.</p>
                        </div>
                    </div>
                    <div className='contact-us-form-title'>
                        < form onSubmit={handleSubmit} >
                            <label htmlFor="name">
                                Full name*
                            </label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                className='form-style'
                                placeholder='Enter your full name...'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <ValidationError
                                prefix="name"
                                field="name"
                                errors={state.errors}
                            />
                            <label htmlFor="email">
                                Email*
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className='form-style'
                                placeholder='Enter your email...'

                                value={formData.email}
                                onChange={handleInputChange}

                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="message">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className='form-style form-text-area'
                                placeholder="Enter your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className='contact-us-form-button'>
                                <div className='contact-us-form-button-border'>
                                    <button type="submit" disabled={state.submitting | !isDataFilled}>
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </form >
                    </div>
                </>
                :
                <div className='contact-us-succeeded'>
                    <div className='center-content'>
                        <h2>Thank you for contact  to HappyCode!</h2>
                        <h2>Our team will get back to you soon!</h2>
                        <img src={confirmIcon} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}
export default Contact

