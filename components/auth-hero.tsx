interface Props {
    header: string,
    subtitle: string,
    tags: [string],
    links: [string]
}

const AuthHero = (props) => {

    return (

        <div className="h-screen" style={{
            backgroundImage: 'linear-gradient(0deg, rgba(21,26,35, 0.8), rgba(21,26,35, 0.8)), url(https://images.unsplash.com/photo-1519933045055-2e2d61a64bcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100vw',

        }}>

            <div className="h-screen flex flex-row justify-start mx-auto">

                <div className="flex flex-col justify-center mx-auto w-6/12 ">
                    <h1 className="sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl text-auth-subtext font-bold font-main uppercase text-right">
                        Card-based payments<span className="text-auth-red font-bold">.</span>  Secured<span className="text-auth-red font-bold">.</span>
                    </h1>

                    <h2 className="text-2xl text-auth-text font-sub text-right mt-8">
                        Transforming card payments to be <span className="text-auth-red font-bold">secure.</span>
                    </h2>



                </div>

                <div className="flex flex-col justify-center mx-auto text-center w-1/3 ">

                    <img className="" src="/assets/placeholder.png"></img>
                </div>






            </div>
        </div>

    );

}


export default AuthHero;