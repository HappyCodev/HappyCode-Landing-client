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

    return (
        <div className='Navigation' >
            <Link to={'/'}>
                <img src={logo} alt="HappyCode Logo" />
            </Link>
            <div className='contact-us-navi-button'>
                <button className='' onClick={openModal}>Contact Us</button>
            </div>
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <Contact />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navigation