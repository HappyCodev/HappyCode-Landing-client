import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {

    const [state, handleSubmit] = useForm("mzblyvwd");

    return (

        <div className='contact'>
            {!state.succeeded ?
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
                        <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56.5059 31.1154C56.5059 44.928 45.2047 56.2293 31.3914 56.2293C17.5788 56.2293 6.27756 44.928 6.27756 31.1154C6.27756 14.4092 22.4454 2.41555 38.2977 6.94295L43.3206 1.92078C22.1372 -5.14477 0 7.88502 0 31.1154C0 48.3808 14.1259 62.5067 31.3913 62.5067C48.6567 62.5067 62.7834 48.3809 62.7834 31.1154L56.5059 31.1154ZM62.045 12.1518C64.9653 9.2315 60.5253 4.79221 57.6057 7.71174L30.0079 35.3081L18.6748 23.9758C15.7545 21.0563 11.3152 25.4963 14.2348 28.4159L27.7882 41.9678C29.0139 43.1935 31.0025 43.1935 32.2282 41.9678L62.045 12.1518Z" fill="url(#paint0_linear_166_580)" /><defs><linearGradient id="paint0_linear_166_580" x1="47.25" y1="4.18716" x2="16.1199" y2="58.5315" gradientUnits="userSpaceOnUse"><stop stop-color="#08FFB8" /><stop offset="1" stop-color="#5799F7" /></linearGradient></defs></svg>
                    </div>
                </div>
            }
        </div>
    )
}
export default Contact

