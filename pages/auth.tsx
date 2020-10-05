import HeroProject from "../components/hero-project";

export default function Auth() {
    return (

        <div className="h-screen" style={{
            background: 'radial-gradient(circle, rgba(27,56,81,1) 4%, rgba(4,18,29,1) 100%)'
        }}>

            <HeroProject header="PROJECT NAME" subtitle="Designing an innovative, secure and usable way to authenticate" tags="" />


            <div className="container mx-auto bg-gray-700">
                <h1 className="text-4xl tracking-wide">Synthesis</h1>

            </div>

        </div>
    );
}