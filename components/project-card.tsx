import Link from 'next/link'


interface Props {
    name: string,
    description: string,
    path: string,
    href: string
}

const ProjectCard = (props) => {

    return (


        <Link href={props.href}>

            <a className="card my-6 px-6 w-full overflow-hidden lg:w-5/12 xl:w-5/12 rounded shadow-lg bg-deepBlue-1">

                <div className="px-6 py-4 mx-auto text-center align-middle">
                    <svg className="card-icon mx-auto text-center" xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 24 24">
                        <path d={props.path} />
                    </svg>
                </div>

                <div className="px-6 py-4 ">
                    <div className="font-bold text-2xl mb-2 text-center uppercase tracking-widest text-pBlue-3 font-main">
                        {props.name}
                    </div>
                    <p className="text-gray-200 text-center font-medium font-sub">
                        {props.description}
                    </p>

                </div>





            </a>
        </Link>


    );
}

export default ProjectCard;