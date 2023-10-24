import { useForm, ValidationError } from '@formspree/react';
import confirmIcon from './confirmIcon.svg'

const Contact = () => {

    const [state, handleSubmit] = useForm("mzblyvwd");

    return (

        <div className='contact'>
            {state.succeeded ?
                <>
                    <div class="contact-us-title">
                        <div class="center-content">
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
                            ></textarea>

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className='contact-us-form-button'>
                                <button type="submit" disabled={state.submitting}>
                                    Contact
                                </button>
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

