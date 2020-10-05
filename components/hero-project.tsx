interface Props {
    header: string,
    subtitle: string,
    tags: [string],
    links: [string]
}

const HeroProject = (props) => {

    return (

        <div className="h-1/2 flex flex-col justify-center mx-auto text-center">
            <h1 className="text-4xl text-pBlue-2 font-bold tracking-wider font-main mt-8">{props.header}</h1>

            <h2 className="text-2xl text-white font-sub">{props.subtitle}</h2>


            <hr className="w-1/3 mx-auto mt-6 text-pBlue-3"></hr>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tags[0]}</span>
                <span className="inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tags[1]}</span>
                <span className="inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>


            <div className="w-48 mx-auto p-6 flex flex-row justify-around">

                <a href="https://www.github.com/josefssonemil" target="_blank">
                    <svg className="s-media" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>

                </a>

                <a href="mailto:emil.josefsson97@gmail.com" target="_blank">
                    <svg className="s-media" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z" /></svg>
                </a>
            </div>
        </div>

    );

}


export default HeroProject;