import { useState } from "react";



const ElementBotton = () => {
    const [isDropdownVisibleComming, setIsDropdownVisibleComming] = useState(false);
    const [isDropdownVisibleAbout, setIsDropdownVisibleAbout] = useState(false);
    const [isDropdownVisibleServices, setIsDropdownVisibleServices] = useState(false);

    const toggleDropdownComming = () => {
        setIsDropdownVisibleComming(!isDropdownVisibleComming);
    };
    const toggleDropdownAbout = () => {
        setIsDropdownVisibleAbout(!isDropdownVisibleAbout);
    };

    const toggleDropdownServices = () => {
        setIsDropdownVisibleServices(!isDropdownVisibleServices);
    };

    return (
        <div className="ElementBotton">

            <div className="div-Proyects ">

                <div className={`element-Proyect  
                  ${isDropdownVisibleComming ?
                        'active' : 'noActive'}`}>
                    <div className="div-h3">
                        <h3>Proyects</h3>
                        {isDropdownVisibleComming && (
                            <div className="div-p ">
                                <p>Coming soon</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={toggleDropdownComming}
                        className={`button-Proyect 
                        ${isDropdownVisibleComming ?
                                ' active-Button' : ''}`}>
                        <div className="div-arrow  items-center">
                            <div className=" div-1 w-2/6 h-0.5 bg-white"></div>
                            <div className="div-2 w-2 h-2 bg-white transform rotate-45"></div>
                        </div>
                    </button>
                </div>

            </div>
            <div className="div-About ">
                <div className={`element-about 
                ${isDropdownVisibleAbout ?
                        'active' : 'noActive'}`}>
                    <div className="div-h3">
                        <h3 >About us</h3>
                        {isDropdownVisibleAbout && (
                            <div className="div-p">
                                <p>our people and our objectives</p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={toggleDropdownAbout}
                        className={`button-Proyect 
                        ${isDropdownVisibleAbout ?
                                ' active-Button' : ''}`}>
                        <div className="div-arrow ">
                            <div className=" div-1"></div>
                            <div className="div-2"></div>
                        </div>
                    </button>
                </div>
            </div>

            <div className='div-Services'>
                <div className={`element-Service 
             ${isDropdownVisibleServices ?
                        'active-Services ' : 'no-Active-Services'}`}>

                    <div className="div-h3 ">
                        <h3> Services</h3>
                        {isDropdownVisibleServices && (
                            <div className="div-P-Service ">
                                <p>Specialized in user experience design and full-stack web development, we offer seamless,
                                    visually striking digital experiences that can take the shape
                                    of a cool website or a mobile app. Let us bring your ideas to life!</p>
                            </div>
                        )}

                    </div>
                </div>
                <button
                    onClick={toggleDropdownServices}
                    className={`button-Proyect
                    ${isDropdownVisibleServices ?
                            'active-Button' : ''}`}>
                    <div className="div-arrow ">
                        <div className=" div-1"></div>
                        <div className="div-2 "></div>
                    </div>
                </button>

            </div >
        </div >
    )
}
export default ElementBotton