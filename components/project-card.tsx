const ProjectCard = (props) => {

    return (
        <div className="card my-6 px-6 w-full overflow-hidden lg:w-5/12 xl:w-5/12 rounded shadow-lg bg-deepBlue-2">

            <div className="px-6 py-4 mx-auto text-center align-middle">
                <svg className="card-icon mx-auto text-center" xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 24 24">
                    <path d={props.path} />
                </svg>
            </div>

            <div className="px-6 py-4 ">
                <div className="font-bold text-2xl mb-2 text-center uppercase tracking-widest text-pBlue-2">
                    {props.name}
                </div>
                <p className="text-gray-200 text-center font-medium">
                    {props.description}
                </p>

            </div>





        </div>

    );
}

export default ProjectCard;