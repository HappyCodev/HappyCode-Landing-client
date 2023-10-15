import { useState } from "react";



const ElementBottom = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isDropdownVisibleAbout, setIsDropdownVisibleAbout] = useState(false);
    const [isDropdownVisibleServices, setIsDropdownVisibleServices] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    const toggleDropdownAbout = () => {
        setIsDropdownVisibleAbout(!isDropdownVisibleAbout);
    };

    const toggleDropdownServices = () => {
        setIsDropdownVisibleServices(!isDropdownVisibleServices);
    };


    return (
        <div className=" h-5/5 flex flex-col flex-nowrap justify-end">



            <div className="relative">
                <div className={`w-2/5 ${isDropdownVisibleAbout ? 'h-32  ' : 'h-20'}  bg-gradient-to-r from-blue-800 via-blue-800 to-transparent text-white flex flex-row flex-nowrap justify-between items-center rounded-tr-full rounded-br-full`}>
                    <div className="flex flex-col justify-between h-3/5">
                        <h3 className="ml-7 text-3xl">Proyects</h3>
                        {isDropdownVisibleAbout && (
                            <div className=" w-5/5 h-12 inset-3 ml-7">
                                <p>Coming soon</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={toggleDropdownAbout}
                        className="w-8 h-8 border-2 border-white rounded-2xl">
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className="w-2/6 h-0.5 bg-white"></div>
                            <div className="w-2 h-2 bg-white transform rotate-45"></div>
                        </div>
                    </button>
                </div>
            </div>



            <div className="relative">
                <div className={`w-2/5 ${isDropdownVisible ? 'h-32' : 'h-20'}   h-20 bg-gradient-to-r from-blue-400 via-blue-400 to-transparent text-white flex flex-row flex-nowrap items-center justify-between rounded-tr-full rounded-br-full`}>
                    <div className="flex flex-col justify-between h-3/5">
                        <h3 className="ml-7 text-3xl">About us</h3>
                        {isDropdownVisible && (
                            <div className="w-5/5 h-12 inset-3 ml-7">
                                <p>our people and our objectives</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={toggleDropdown}
                        className="w-8 h-8 border-2 border-white rounded-2xl">
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className="w-2/6 h-0.5 bg-white"></div>
                            <div className="w-2 h-2 bg-white transform rotate-45"></div>
                        </div>
                    </button>
                </div>
            </div>





            <div className={`w-2/5 ${isDropdownVisibleServices ? 'h-48 ' : 'h-20'} w-2/5 h-20 bg-gradient-to-r from-green-400 via-green-400 to-transparent
                 text-black flex flex-row flex-nowrap items-center  justify-between rounded-tr-full rounded-br-full`}>

                <div className={`${isDropdownVisibleServices ? 'flex flex-col justify-star' : `flex flex-col justify-center`}  h-4/5`}>
                    <h3 className=" ml-7 text-3xl "> Services</h3>
                    {isDropdownVisibleServices && (
                        <div className="w-5/5 h-12 inset-3 ml-7 ">
                            <p className="w-4/5 ">Specialized in user experience design and full-stack web development, we offer seamless,
                                visually striking digital experiences that can take the shape
                                of a cool website or a mobile app. Let us bring your ideas to life!</p>
                        </div>
                    )}
                </div>
                <button
                    onClick={toggleDropdownServices}
                    className=" w-8 h-8 border-2 border-white rounded-2xl ">



                    <div className="flex flex-row flex-nowrap justify-center items-center z-10">
                        <div className=" w-2/6 h-0.5 bg-white"></div>
                        <div className="w-2 h-2 bg-white transform rotate-45 "></div>
                    </div>
                </button>
            </div>
        </div >
    )
}
export default ElementBottom