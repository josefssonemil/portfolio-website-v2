

const Hero = (props) => {

    return (
        <div className="gradient-bg-hero">

            <div className="flex flex-col md:flex-row justify-center mx-auto pt-48 pb-24">


                <div className="p-6 ">
                    <h2 className="text-3xl text-center lg:text-6xl lg:text-left font-black tracking-widest text-gray-900 font-red-main">
                        {props.name}
                 </h2>

                    <h2 className="text-md lg:text-xl text-center lg:text-left font-medium text-gray-800 tracking-wider font-red-sub">

                        {props.subtitle}
                    </h2>
            

                    <hr className="w-full mx-auto mt-6 lg:mx-0 hr-hero"></hr>

                    <h2 className="pt-6 text-md lg:text-lg text-center lg:text-left font-medium text-gray-800 tracking-wider font-red-sub" >
                        2019-2021 | Master in Interaction Design @ Chalmers University of Technology <br>
                        2016-2021 | Software Engineering @ Chalmers University of Technology
                        
                    </h2>


                </div>



                <div className="lg:w-1/3 w-full">




                    <svg className="mx-auto" viewBox="0 0 160 160" width="75%" height="75%">
                        <circle cx="80" cy="80" r="50" fill="#151A23" />
                        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                            <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#743ad5">
                                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3s" repeatCount="indefinite" />
                            </path>
                        </g>
                        <path fill="#151A23" d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
                    </svg> 

                </div>


            </div>



            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151A23" fill-opacity="1" d="M0,160L24,149.3C48,139,96,117,144,101.3C192,85,240,75,288,106.7C336,139,384,213,432,208C480,203,528,117,576,106.7C624,96,672,160,720,165.3C768,171,816,117,864,122.7C912,128,960,192,1008,224C1056,256,1104,256,1152,240C1200,224,1248,192,1296,176C1344,160,1392,160,1416,160L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>


           



        </div>
    )
}

export default Hero;
