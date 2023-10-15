import ElementAbout from "./ElementHomePage/ElementBottom";
import ElementTop from "./ElementHomePage/ElementTop";

const HomePage = () => {

    return (

        <div className="h-screen w-screen flex flex-col flex-nowrap justify-around">

            <ElementTop />
            <div className="h-96">
                < ElementAbout />
            </div >
        </div >
    )
}
export default HomePage