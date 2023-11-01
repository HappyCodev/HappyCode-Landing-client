import { useContext } from "react"
import { ContactContext } from "../../contexts/contact.context"

const Team = () => {

    const { isModalOpen, openModal, closeModal } = useContext(ContactContext)


    return (

        <div className='Team' >

            <h1>Meet our team</h1>

            <div className="membersRowTop">

                <div className="memberCard">
                    <div className="alejandraMamblonaIMG" />
                    <p className="memberName">Alejandra Mamblona</p>
                    <p className="memberOccupation">UX/UI Designer</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/alejandra-mamblona-g%C3%B3mez-1148b5211/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="isabellaPaivaIMG" />
                    <p className="memberName">Isabella Paiva</p>
                    <p className="memberOccupation">Product Manager</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/isabellanpaiva/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="ignacioSansonIMG" />
                    <p className="memberName">Ignacio Sansón</p>
                    <p className="memberOccupation">Lead Full Stack</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/ignacio-sanson/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="carlosDelgadoIMG" />
                    <p className="memberName">Carlos Delgado</p>
                    <p className="memberOccupation">Front-end Manager</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/cadelme/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

            </div>

            <div className="membersRowBot">

                <div className="memberCard">
                    <div className="alejandroRecheIMG" />
                    <p className="memberName">Alejandro Reche</p>
                    <p className="memberOccupation">Back-end developer</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/alejandro-reche-costa/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="carlosAlbendizIMG" />
                    <p className="memberName">Carlos Albéndiz</p>
                    <p className="memberOccupation">Front-end developer</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/carlos-alberto-alb%C3%A9ndiz-p%C3%A1ez-531107143/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="ireneBucetaIMG" />
                    <p className="memberName">Irene Buceta</p>
                    <p className="memberOccupation">Front-end developer</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/irene-buceta-aloc%C3%A9n/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="joanBenaigesIMG" />
                    <p className="memberName">Joan Benaiges</p>
                    <p className="memberOccupation">Front-end developer</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/joan-benaiges-94bb9460/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

                <div className="memberCard">
                    <div className="rodrigoLopezIMG" />
                    <p className="memberName">Rodrigo López</p>
                    <p className="memberOccupation">Back-end developer</p>
                    <p className="memberContact">
                        <a className="linkedInLogo" href="https://www.linkedin.com/in/rodrigo-soria-58a6291a5/"></a>
                        <a className="emailLogo" href="#"></a>
                    </p>
                </div>

            </div>

            <div className="button-div">

                <div className='lets-meet-form-button'>
                    <div className='lets-meet-form-button-border'>
                        <button className='' onClick={openModal} type="submit">
                            Let&rsquo;s meet!
                        </button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Team