import { useState } from 'react';
import logo from './../../assets/images/LOGO 2.png'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
const Navigation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    function handleMouseEnter() {
        const element = document.querySelector('.contact-us-navi-button');
        if (element) {
            element.classList.add('contact-us-navi-button-hover');
        }
    }
    function handleMouseLeave() {
        const element = document.querySelector('.contact-us-navi-button');
        if (element) {
            element.classList.remove('contact-us-navi-button-hover');
        }
    }
    return (
        <div className='Navigation' >
            <Link to={'/'}>
                <img src={logo} alt="HappyCode Logo" />
            </Link>
            <div className='contact-us-navi-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='contact-us-navi-button-border'>
                    <button className='' onClick={openModal}>Contact Us</button>
                </div>
            </div>
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.9966 0C9.62338 0.000671542 7.30363 0.70503 5.33069 2.02401C3.35775 3.343 1.82021 5.21738 0.912477 7.41015C0.00474578 9.60292 -0.23241 12.0156 0.230996 14.3432C0.694402 16.6707 1.83756 18.8086 3.51592 20.4865C5.19429 22.1644 7.33249 23.3069 9.66017 23.7697C11.9878 24.2324 14.4005 23.9946 16.593 23.0862C18.7855 22.1779 20.6594 20.6398 21.9779 18.6665C23.2963 16.6932 24 14.3732 24 12C23.9964 8.81792 22.7305 5.76724 20.4801 3.51749C18.2297 1.26774 15.1787 0.00269617 11.9966 0ZM11.9966 21.966C10.0265 21.9654 8.10076 21.3806 6.46294 20.2856C4.82511 19.1906 3.5487 17.6347 2.79507 15.8144C2.04144 13.9941 1.84443 11.9912 2.22895 10.0589C2.61347 8.1267 3.56225 6.35184 4.95535 4.95874C6.34845 3.56564 8.12331 2.61686 10.0556 2.23234C11.9878 1.84782 13.9907 2.04483 15.811 2.79846C17.6313 3.55209 19.1873 4.8285 20.2822 6.46633C21.3772 8.10415 21.962 10.0299 21.9627 12C21.96 14.6423 20.9091 17.1757 19.0407 19.0441C17.1723 20.9125 14.6389 21.9633 11.9966 21.966Z" fill="#F8F7F3" />
                            <path d="M17.4978 6.50243C17.3874 6.39206 17.2564 6.30451 17.1122 6.24477C16.968 6.18504 16.8134 6.1543 16.6574 6.1543C16.5013 6.1543 16.3467 6.18504 16.2025 6.24477C16.0583 6.30451 15.9273 6.39206 15.817 6.50243L11.9969 10.3225L8.18029 6.50243C7.9574 6.27954 7.6551 6.15432 7.33988 6.15432C7.02467 6.15432 6.72237 6.27954 6.49948 6.50243C6.27659 6.72532 6.15137 7.02762 6.15137 7.34284C6.15137 7.65805 6.27659 7.96035 6.49948 8.18324L10.3195 11.9999L6.49948 15.8199C6.27659 16.0428 6.15137 16.3451 6.15137 16.6603C6.15137 16.9755 6.27659 17.2778 6.49948 17.5007C6.72237 17.7236 7.02467 17.8488 7.33988 17.8488C7.6551 17.8488 7.9574 17.7236 8.18029 17.5007L11.9969 13.6807L15.817 17.5007C16.0399 17.7236 16.3422 17.8488 16.6574 17.8488C16.9726 17.8488 17.2749 17.7236 17.4978 17.5007C17.7207 17.2778 17.8459 16.9755 17.8459 16.6603C17.8459 16.3451 17.7207 16.0428 17.4978 15.8199L13.6777 11.9999L17.4978 8.18324C17.6081 8.07288 17.6957 7.94186 17.7554 7.79767C17.8152 7.65347 17.8459 7.49892 17.8459 7.34284C17.8459 7.18676 17.8152 7.03221 17.7554 6.88801C17.6957 6.74381 17.6081 6.61279 17.4978 6.50243Z" fill="#F8F7F3" />
                        </svg></span>
                        <Contact />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navigation