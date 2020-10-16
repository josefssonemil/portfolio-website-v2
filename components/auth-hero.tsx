interface Props {
    header: string,
    subtitle: string,
    tags: [string],
    links: [string]
}

const AuthHero = (props) => {

    return (

        <div className="block authbg w-full h-screen">


            <div className="flex mx-auto  h-screen">

                <div className="bg-auth-background shadow-2xl inline-block mx-auto my-auto w-7/12  text-center">


                    <h1 className="text-2xl lg:text-5xl text-white p-6 mb-36 tracking-widest uppercase">
                        <span className="font-hairline">Prox</span><span className="font-light">pay</span>
                    </h1>

                    <p className="text-xl text-auth-subtext font-hairline">Securing card-based payments.</p>

                    <svg className="mx-auto mb-12 mt-12" width="70" height="96" viewBox="0 0 70 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 51C42 51 70 51 70 25.5C70 -1.90735e-06 37.5 0 37.5 0H0C0 0 12 5.49231 18 6.66923C21.5484 7.36526 23.348 7.35372 26.8118 7.3315C29.2049 7.31615 32.3925 7.2957 37.5 7.5C50 8 62.5 12.5538 62.5 25.5C62.5 38.4462 47.5 41.9769 41 42.7615C34.5 43.5462 18 42.7615 18 42.7615V51H37.5ZM0 96H11V54.4498C11 44.9952 0 44 0 44V96Z" fill="url(#paint0_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="62" y1="-2" x2="-6.00001" y2="97.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F6A61D" />
                                <stop offset="1" stop-color="#F8C81D" />
                            </linearGradient>
                        </defs>
                    </svg>


                </div>
            </div>




        </div>

    );

}


export default AuthHero;



/**<svg width="1650" height="814" viewBox="0 0 1650 814" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1650.5 -2.5V244.5L566.5 676.655C288.927 781.524 163.504 812.873 0 814V-2.5H1650.5Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="-6.05269e-06" y1="17" x2="825" y2="585" gradientUnits="userSpaceOnUse">
<stop offset="0.29161" stop-color="#F27521"/>
<stop offset="1" stop-color="#F8A81D"/>
</linearGradient>
</defs>
</svg>
 */