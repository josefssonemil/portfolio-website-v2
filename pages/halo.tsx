import HeroProject from "../components/hero-project";

export default function Halo() {
    return (

        <div className="h-screen" style={{
            background: 'radial-gradient(circle, rgba(27,56,81,1) 4%, rgba(4,18,29,1) 100%)'
        }}>

            <HeroProject header="Project Halo" subtitle="A lamp designed for time-management and work-life balance" tags={["auth", "test"]} />



            <div className="container mx-auto my-10 ">
                <h1 className="text-4xl tracking-wide font-medium font-main text-orange-300 p-6">Synthesis</h1>
                <p className="text-base font-sub text-gray-300 px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>


                <h1 className="text-4xl tracking-wide font-medium font-main text-orange-300 p-6">Something</h1>

                <p className="text-base font-sub text-gray-300 px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
        </div>

    );
}