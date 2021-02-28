interface Props {
    header: string;
    subtitle: string;
    context: string;
    imgsrc: string;
}

const HeroProject = (props: Props) => {

    return (


        <div className="gradient-bg-hero">

        <div className="container flex flex-col md:flex-row justify-center mx-auto lg:pt-48 lg:pb-24">


            <div className="p-6 lg:text-left text-center">
                <h2 className="text-3xl text-center lg:text-6xl lg:text-left font-black tracking-widest text-gray-900 font-red-main">
                    {props.header}
            </h2>

                <h2 className="text-md lg:text-xl text-center lg:text-left font-medium text-gray-800 tracking-wider font-red-sub">

                    {props.subtitle}
                </h2>


                <hr className="w-full mx-auto mt-6 lg:mx-0 hr-hero"></hr>

                <h2 className="pt-6 text-md lg:text-lg text-center lg:text-left font-medium text-gray-800 tracking-wider font-red-sub" >
                    {props.context}
                </h2>


            </div>



            <div className="lg:w-1/4 w-5/6 mx-auto pb-24">

                <img src={props.imgsrc}>
                
                </img>

            </div>


            </div>


        </div>

    );

}


export default HeroProject;