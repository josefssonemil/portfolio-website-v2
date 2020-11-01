interface Props {
    class: string,
    imgsrc: string,
    header: string
}

const HeroV2 = (props: Props) => {

    return (

        <div className={`${props.class}`}>
            <div className="h-hero w-full flex flex-col justify-center" >

                <div className="w-full mx-auto">
                    <img className="mx-auto p-24" src={props.imgsrc}></img>
                </div>

                <div className="w-full mx-auto">
                    <h1 className="text-center text-2xl lg:text-4xl font-red-main text-auth-subtext">
                        {props.header}
                    </h1>
                </div>


            </div>

        </div>
    );

}

export default HeroV2;