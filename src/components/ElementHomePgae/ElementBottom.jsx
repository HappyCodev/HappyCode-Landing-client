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
                        className={`w-8 h-8 border-2 border-white rounded-2xl 
                        transform transition-transform duration-600
                        ${isDropdownVisibleComming ?
                                'rotate-90' : ''}`}>
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className="w-2/6 h-0.5 bg-white"></div>
                            <div className="w-2 h-2 bg-white transform rotate-45"></div>
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
                        className={`w-8 h-8 border-2 border-white rounded-2xl transform transition-transform duration-300
                         ${isDropdownVisibleAbout ?
                                'rotate-90' : ''}`}>
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className="w-2/6 h-0.5 bg-white"></div>
                            <div className="w-2 h-2 bg-white transform rotate-45"></div>
                        </div>
                    </button>
                </div>
            </div>

            <div className={`w-2/5 bg-gradient-to-r from-green-400 via-green-400 to-transparent
             text-black flex flex-row flex-nowrap justify-between items-center rounded-tr-full
             rounded-br-full transition-all duration-300 ${isDropdownVisibleServices ? 'h-44' : 'h-20'}`}>

                <div className={`${isDropdownVisibleServices ?
                    'flex flex-col flex-nowrap justify-star' : `flex flex-col flex-nowrap justify-center`}
                     w-4/5 h-4/5`}>
                    <h3 className=" ml-7 text-3xl "> Services</h3>
                    {isDropdownVisibleServices && (
                        <div className="w-4/5 h-12 ml-7 ">
                            <p>Specialized in user experience design and full-stack web development, we offer seamless,
                                visually striking digital experiences that can take the shape
                                of a cool website or a mobile app. Let us bring your ideas to life!</p>
                        </div>
                    )}
                </div>







                <button
                    onClick={toggleDropdownServices}
                    className={`w-8 h-8 border-2 border-white rounded-2xl transform transition-transform duration-300 
                    ${isDropdownVisibleServices ?
                            'rotate-90' : ''}`}>
                    <div className="flex flex-row flex-nowrap justify-center items-center ">
                        <div className=" w-2/6 h-0.5 bg-white"></div>
                        <div className="w-2 h-2 bg-white transform rotate-45 "></div>
                    </div>
                </button>
            </div >
        </div >
    )
}
export default ElementBotton