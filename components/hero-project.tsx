interface Props {
    header: string,
    subtitle: string,
    tags: [string]
}

const HeroProject = (props) => {

    return (

        <div className="h-1/2 flex flex-col justify-center mx-auto text-center">
            <h1 className="text-6xl text-white font-bold tracking-wider font-main">{props.header}</h1>

            <h2 className="text-3xl text-white font-sub">{props.subtitle}</h2>

            <hr className="w-1/3 mx-auto mt-6 text-pBlue-3"></hr>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">authentication</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>

    );

}


export default HeroProject;