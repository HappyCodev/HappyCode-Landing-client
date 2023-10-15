
const ElementTop = () => {
    return (
        <div className="flex flex-row flex-nowrap justify-between">
            <div className=" w-1/4 ml-24">

                <div className=" bg-gradient-to-tr from-green-400 
                 to-blue-400 text-transparent bg-clip-text no-underline">
                    <h1 className="flex flex-col flex-nowrap items-center text-5xl">Welcome to HappyCod</h1>
                </div>
                <p className="text-white mt-16 text-xl">
                    Web Solutions Tailored to Your Business Needs.
                </p>

            </div>
            <div className=" w-2/6 h-4/4 flex flex-col flex-nowrap items-center
             justify-around shadow-2xl rounded-l-3xl bg-gray-600 ">

                <article className="w-5/6  h-2/4 items-center text-white text-lg ">

                    Whether you're an individual looking for a personal page or a small to mid-sized
                    company aiming to improve your online presence, we've got your back.

                </article>
                <button class=" bg-gradient-to-tr from-green-400 to-blue-400 rounded-3xl py-1 px-2
                     text-black  ">
                    Let's get digital!
                </button>
            </div>
        </div>
    )
}
export default ElementTop