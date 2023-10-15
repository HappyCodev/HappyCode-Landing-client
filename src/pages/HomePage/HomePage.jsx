import ElementAbout from "./ElementHomePage/ElementBottom";
import ElementTop from "./ElementHomePage/ElementTop";



const HomePage = () => {


    return (

        <div className="h-screen w-screen flex flex-col flex-nowrap justify-around bg-gradient-to-tr from-gray-950 to-gray-700">

            <ElementTop />
            <div className="h-96">
                <ElementAbout />
            </div>
        </div >
    )
}
export default HomePage