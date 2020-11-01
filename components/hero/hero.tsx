

const Hero = (props) => {

    return (
        <div className="bg-auth-background">

            <div className="flex flex-col md:flex-row justify-center mx-auto pt-48 pb-24">


                <div className="p-6 ">
                    <h2 className="text-3xl text-center lg:text-6xl lg:text-left font-black tracking-widest text-auth-text font-main">
                        Hi there.<br></br> I'm Emil Josefsson.
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
                        <circle cx="80" cy="80" r="50" fill="#FF6B00" />
                        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                            <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#FFF">
                                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3s" repeatCount="indefinite" />
                            </path>
                        </g>
                        <path fill="#FF6B00" d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
                    </svg>

                </div>


            </div>





            <svg viewBox="0 0 1440 388" xmlns="http://www.w3.org/2000/svg">
                <svg width="1440" height="388" viewBox="0 0 1440 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 103.3L0 130V194L8.52006e-06 290H48C96 290 192 290 288 316.7C316.686 324.559 345.372 334.891 374.058 345.223C441.372 369.468 508.686 393.713 576 386C622.062 380.722 668.125 360.94 714.187 341.158C764.125 319.711 814.062 298.265 864 295.3C915.975 292.431 967.95 309.875 1019.92 327.318C1063.95 342.094 1107.97 356.87 1152 359.3C1245.85 364.872 1339.69 313.392 1388.7 286.51C1389.82 285.894 1390.92 285.29 1392 284.7L1440 258V194H1392L1152 194H1392H1440V98H1392C1344 98 1248 98 1152 71.3C1123.31 63.4412 1094.63 53.1091 1065.94 42.777C998.628 18.5319 931.314 -5.71306 864 1.99998C817.938 7.27797 771.875 27.0601 725.813 46.8422C675.875 68.2886 625.938 89.7349 576 92.7C524.025 95.5695 472.05 78.1256 420.075 60.6818C376.05 45.9062 332.025 31.1305 288 28.7C194.153 23.1278 100.305 74.6083 51.3008 101.49C50.1767 102.107 49.0763 102.71 48 103.3Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="435" y1="-254" x2="839" y2="507.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#bd4f6c" />
                            <stop offset="1" stop-color="#d7816a" />
                        </linearGradient>
                    </defs>
                </svg>

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