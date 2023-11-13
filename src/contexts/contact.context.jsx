import { createContext, useState } from "react";

const ContactContext = createContext()

function ContactProviderWrapper(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ContactContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export { ContactContext, ContactProviderWrapper }