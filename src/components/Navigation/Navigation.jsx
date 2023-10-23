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
            <button onClick={openModal}>Contact Us</button>

            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <button className='close' onClick={closeModal}>&times;</button>
                        <Contact />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navigation