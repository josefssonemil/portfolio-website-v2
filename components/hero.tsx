
const Hero = (props) => {

    return (
        <div className="bg-auth-background">

            <div className="flex flex-col md:flex-row justify-center mx-auto pt-48 pb-24">


                <div className="p-6 ">
                    <h2 className="text-3xl text-center lg:text-6xl lg:text-left font-black tracking-widest text-auth-text font-main">
                        Hi there.<br></br> I'm <span className="text-auth-red">E</span>mil <span className="text-auth-red">J</span>osefsson.
                 </h2>

                    <h2 className="text-md lg:text-lg text-center lg:text-left font-medium text-auth-text tracking-wider font-sub">

                        {props.subtitle}
                    </h2>

                    <hr className="w-1/3 mx-auto mt-6 lg:mx-0"></hr>

                    <div className="w-64 p-6 flex flex-row justify-between mx-auto lg:mx-0">
                        <a href="https://www.linkedin.com/in/emil-josefsson-23856b15a/" target="_blank">
                            <svg className="s-media" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>

                        <a href="https://www.behance.net/emiljosefsson" target="_blank">
                            <svg className="s-media" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M8.228 15.01h-2.228v-2.01h2.261c1.878 0 2.003 2.01-.033 2.01zm6.758-2.677h3.018c-.117-1.715-2.73-1.977-3.018 0zm-6.804-3.333h-2.182v2h2.389c1.673 0 1.937-2-.207-2zm15.818-4v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-10 3h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.528-2.95-3.583-2.95-2.094 0-3.352 1.34-3.352 3.947 0 2.631 1.367 3.783 3.416 3.783s3.106-1.135 3.4-2h-2.111c-.736.855-2.893.521-2.767-1.353h5.06c.01-.634-.012-1.089-.063-1.427z" /></svg>
                        </a>

                        <a href="https://www.github.com/josefssonemil" target="_blank">
                            <svg className="s-media" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>

                        </a>

                        <a href="mailto:emil.josefsson97@gmail.com" target="_blank">
                            <svg className="s-media" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" /></svg>

                        </a>
                    </div>

                </div>



                <div className="lg:w-1/3 w-full">

                    <svg className="mx-auto" viewBox="0 0 160 160" width="75%" height="75%">
                        <circle cx="80" cy="80" r="50" fill="#ED2D37" />
                        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                            <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#FFF">
                                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3s" repeatCount="indefinite" />
                            </path>
                        </g>
                        <path fill="#ED2D37" d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
                    </svg>

                </div>


            </div>


            {/* <svg className="arrows mx-auto m-8">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg> */}



            <svg viewBox="0 0 1440 388" fill="#ED2D37" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 258L1392 284.7C1344 311 1248 365 1152 359.3C1056 354 960 290 864 295.3C768 301 672 375 576 386C480 397 384 343 288 316.7C192 290 96 290 48 290L8.52006e-06 290L1.69126e-05 194L48 194C96 194 192 194 288 194C384 194 480 194 576 194C672 194 768 194 864 194C960 194 1056 194 1152 194C1248 194 1344 194 1392 194L1440 194L1440 258Z" />
                <path d="M0 130L48 103.3C96 77 192 23 288 28.7C384 34 480 98 576 92.7C672 87 768 13 864 1.99998C960 -9.00002 1056 45 1152 71.3C1248 98 1344 98 1392 98H1440V194H1392C1344 194 1248 194 1152 194C1056 194 960 194 864 194C768 194 672 194 576 194C480 194 384 194 288 194C192 194 96 194 48 194H0V130Z" />
            </svg>



        </div>
    )
}

export default Hero;

/*
    #3B27BA - purple
    #E847AE - pink
    #13CA91 - green
    #FF9472 - orange
*/