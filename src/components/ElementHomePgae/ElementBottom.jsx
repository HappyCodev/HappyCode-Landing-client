import { useState } from "react";
import { Link } from "react-router-dom";



const ElementBotton = () => {
    const [isDropdownVisibleProjects, setIsDropdownVisibleProjects] = useState(false);
    const [isDropdownVisibleAbout, setIsDropdownVisibleAbout] = useState(false);
    const [isDropdownVisibleServices, setIsDropdownVisibleServices] = useState(false);

    const toggleDropdownProjects = () => {
        setIsDropdownVisibleProjects(!isDropdownVisibleProjects);
    };
    const toggleDropdownAbout = () => {
        setIsDropdownVisibleAbout(!isDropdownVisibleAbout);
    };

    const toggleDropdownServices = () => {
        setIsDropdownVisibleServices(!isDropdownVisibleServices);
    };

    return (
        <div className="ElementBotton">

            <div className='div-Projects'>
                <Link to='/projects'>
                    <div className={`element-Projects 
             ${isDropdownVisibleProjects ?
                            'active-Projects ' : 'no-active-Projects'}`} onMouseEnter={toggleDropdownProjects} onMouseLeave={toggleDropdownProjects}>
                        <h3>Projects <span>Coming Soon</span></h3>


                        {isDropdownVisibleProjects && (
                            <p>Come back again soon to check our projects!</p>

                        )}
                    </div>
                </Link>
            </div >



            <div className='div-About'>
                <Link to='/aboutUs'>
                    <div className={`element-About  
             ${isDropdownVisibleAbout ?
                            'active-About ' : 'no-active-About'}`} onMouseEnter={toggleDropdownAbout} onMouseLeave={toggleDropdownAbout}>
                        <h3>About us</h3>

                        {isDropdownVisibleAbout && (
                            <p>Our people and our objectives</p>

                        )}

                    </div>
                </Link>
            </div >



            <div className='div-Services'>
                <Link to='/services'>
                    <div className={`element-Services 
             ${isDropdownVisibleServices ?
                            'active-Services ' : 'no-active-Services'}`} onMouseEnter={toggleDropdownServices} onMouseLeave={toggleDropdownServices}>
                        <h3> Services</h3>

                        {isDropdownVisibleServices && (
                            <p>Specialized in user experience design and full-stack web development, we offer seamless,
                                visually striking digital experiences that can take the shape
                                of a cool website or a mobile app. Let us bring your ideas to life!</p>

                        )}

                    </div>
                </Link>
            </div >
        </div >
    )
}
export default ElementBotton