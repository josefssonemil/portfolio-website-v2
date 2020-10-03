const MiscCard = (props) => {

    return (
        <div className="max-w-sm  rounded overflow-hidden shadow-lg">
            <img className="w-full h-3/12" src={props.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{props.name}</div>

            </div>

        </div>

    );
}

export default MiscCard;