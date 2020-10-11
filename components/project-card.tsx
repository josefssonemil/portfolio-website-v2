import Link from 'next/link'




interface Props {
    name: string,
    description: string,
    url: string,
    href: string
}

const ProjectCard = (props: Props) => {



    return (


        <div className="h-screen">



            <div className="flex flex-col lg:flex-row justify-center">

                <div className="flex flex-col lg:flex-row items-center ">
                    <div className="px-12 invisible lg:visible ">
                        <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47 27L0.499997 53.8468L0.5 0.15321L47 27Z" fill="#ED2D37" />
                        </svg>
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-auth-text">{props.name}</h1>
                        <h1 className="text-2xl text-auth-subtext">{props.description}</h1>

                        <Link href={props.href}>
                            <a>
                                <button className="rounded-lg shadow-lg bg-auth-red mt-6">
                                    <h1 className="p-4 font-bold uppercase tracking-wider">
                                        Case Study
                            </h1>
                                </button>
                            </a>
                        </Link>

                    </div>




                </div>


                <div className="pt-12 w-8/12 lg:mx-0 mx-auto">
                    <img className="clipper h-64 w-full" src={props.url}>
                    </img>
                </div>

            </div>




        </div >




    );
}

export default ProjectCard;


/*

        <div className="flex flex-row justify-center items-center ">



                <div className="text-auth-text">
                    <h1 className="text-2xl lg:text-6xl">{props.name}</h1>
                    <h1 className="text-xl lg:text-2xl">{props.description}</h1>
                    <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47 27L0.499997 53.8468L0.5 0.15321L47 27Z" fill="#ED2D37" />
                    </svg>

                </div>



                <div className="red-shadow">
                    <img className="clipper" src="https://images.unsplash.com/photo-1504203700686-f21e703e5f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2261&q=80">
                    </img>
                </div>










            </div >


*/