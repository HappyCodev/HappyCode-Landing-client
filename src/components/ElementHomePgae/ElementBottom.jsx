import { Link } from "react-router-dom";

const ElementBotton = () => {
    return (
        <div className="element-bottom">
            <div className={`dropdown projects`}  >
                <Link to='/projects'>
                    <h3>Projects <span>Coming Soon</span></h3>
                    <p>Come back again soon to check our projects!</p>
                </Link>

            </div>

            <div className={`dropdown about-us`}>
                <Link to='/aboutUs'>
                    <h3>About us</h3>
                    <p>Our people and our objectives</p>
                </Link>
            </div>

            <div className={`dropdown services`}>
                <Link to='/services' className="link-services">
                    <h3>Services</h3>
                    <p>Specialized in user experience design and full-stack web development, we offer seamless,
                        visually striking digital experiences that can take the shape
                        of a cool website or a mobile app. Let us bring your ideas to life!</p>
                </Link>
            </div>

        </div >
    )
}
export default ElementBotton