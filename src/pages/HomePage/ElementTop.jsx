

const ElementTop = () => {
    return (
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
    )
}
export default ElementTop