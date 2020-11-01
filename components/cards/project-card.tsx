import Link from 'next/link'
interface Props {
    name: string,
    description: string,
    tags: string,
    href: string

}

const ProjectCard = (props: Props) => {



    return (

        <Link href={props.href}>

            <div className="h-64 lg:h-card w-full lg:w-1/3 project-card my-24">



                <div className="w-full h-full flex flex-row justify-between items-center">

                    <div className="p-12">
                        <div className="font-red-main text-2xl lg:text-6xl text-auth-text uppercase tracking-widest font-bold">{props.name}</div>
                        <div className="font-red-sub text-lg lg:text-3xl text-auth-text">{props.description}</div>
                        <div className="font-red-sub text-gray-100 font-hairline text-lg lg:text-xl pt-6">{props.tags}</div>


                    </div>


                    <div className="p-12">
                        <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.042 15.625L41.9639 0L104.167 62.5L41.9639 125L26.042 109.375L72.917 62.5L26.042 15.625Z" fill="white" />
                        </svg>

                    </div>
                </div>
            </div>


        </Link>
    );
}

export default ProjectCard;

