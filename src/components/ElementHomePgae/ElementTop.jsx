import { useContext } from "react"
import { ContactContext } from "../../contexts/contact.context"



const ElementTop = () => {

    const { isModalOpen, openModal, closeModal } = useContext(ContactContext)

    return (
        <div className="ElementTop">


            <div className='home-Page-Intro'>

                <div className='home-h1'>
                    <h1>Welcome to <span>HappyCode</span></h1>
                </div>

                <p>
                    Web Solutions Tailored to Your Business Needs.
                </p>

            </div>

            <div className="home-Page-Intro-Article" >
                <article>

                    Whether you're an individual looking for a
                    personal page or a small to mid-sized
                    company aiming to improve your online presence,
                    we've got your back.

                </article>


                <div className='article-button'>
                    <div className='article-button-border'>
                        <button onClick={openModal} >Let's get digital!</button>
                    </div>
                </div>



            </div>


        </div >
    )
}
export default ElementTop