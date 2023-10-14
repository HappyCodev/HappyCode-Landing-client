


const HomePage = () => {
    return (

        <div className="h-screen w-screen flex flex-col flex-nowrap justify-around bg-gradient-to-tr from-gray-950 to-gray-700">

            <div className="flex flex-row flex-nowrap justify-around">
                <div className="w-2/5 ml-10">

                    <div className="text-8xl bg-gradient-to-tr from-green-500  to-blue-400 text-transparent bg-clip-text no-underline">
                        <h1>Welcome to HappyCod</h1>
                    </div>
                    <p className="text-white mt-16 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                </div>
                <div className=" w-2/6 h-3/4 flex flex-col flex-nowrap items-center justify-around ">
                    <article className="w-5/6  h-2/4 items-center text-white text-lg ">

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore eius explicabo ipsum molestiae suscipit voluptas
                        optiolibero! Veritatis fugiat sapiente vitae odit magni
                        eveniet, optio, eaque dolore placeat ut quod?


                    </article>
                    <button class=" w-1/4 bg-gradient-to-tr from-green-400 to-blue-400 rounded-3xl py-1 px-2
                     text-black  ">
                        Lorem ipsum
                    </button>
                </div>
            </div>

            <div className=" ">
                <div className="w-2/5 h-20 bg-gradient-to-r from-blue-800 via-blue-800  to-transparent
                 text-white flex flex-row flex-nowrap justify-between items-center rounded-tr-full rounded-br-full" >
                    <h3 className="ml-7 text-3xl ">Proyects</h3>
                    <button className="w-8 h-8 border-2 border-white rounded-2xl">
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className="w-2/6 h-0.5 bg-white  "></div>

                            <div className="w-2 h-2 bg-white transform rotate-45 "></div>
                        </div>
                    </button>
                </div>
                <div className=" w-2/5 h-20 bg-gradient-to-r from-blue-400 via-blue-400 to-transparent
                 text-white flex flex-row flex-nowrap items-center  justify-between rounded-tr-full rounded-br-full">
                    <h3 className=" ml-7 text-3xl ">About us</h3>
                    <button className=" w-8 h-8 border-2 border-white rounded-2xl">
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className=" w-2/6 h-0.5 bg-white"></div>
                            <div className="w-2 h-2 bg-white transform rotate-45 "></div>
                        </div>
                    </button>
                </div>
                <div className="w-2/5 h-20 bg-gradient-to-r from-green-400 via-green-400 to-transparent
                 text-black flex flex-row flex-nowrap items-center  justify-between rounded-tr-full rounded-br-full">
                    <h3 className=" ml-7 text-3xl "> Services</h3>
                    <button className=" w-8 h-8 border-2 border-white rounded-2xl">
                        <div className="flex flex-row flex-nowrap justify-center items-center">
                            <div className=" w-2/6 h-0.5 bg-white"></div>
                            <div className="w-2 h-2 bg-white transform rotate-45 "></div>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    )
}
export default HomePage