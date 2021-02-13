import HeroV2 from '../components/hero/hero-v2'
import Footer from '../components/footer'
import Header from '../components/header'


export default function Kuggen() {
    return (

        <div className="">
             <Header/>

            <HeroV2 class="kuggen-bg" header="Kuggen: A game designed to aid children with autism" imgsrc="" />
            <div className="svg-shapes">

                <div className="container p-6 mx-auto">

                    <div className="flex flex-col lg:flex-row justify-between pt-10 pb-16">
                        <h1 className="text-2xl lg:text-3xl font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold text-auth-text">YEAR </span> 2019
                    </h1>
                        <h1 className="text-2xl lg:text-3xl  font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold  text-auth-text">CONTEXT </span> Bachelor's thesis in Computer Science and Engineering
                    </h1>

                    </div>

                    <hr className="w-1/3 mx-auto"></hr>


                    <div className="pt-16">
                        <h1 className="text-xl lg:text-2xl font-red-main text-auth-subtext">
                            Kuggen is a game developed specificially to aid children with autism. In particular, the game aims to improve collaborative as well as social skills
                            for the children. The game itself is a four person game where collaboration and communication is crucial for success. The goal for the players is to
                            align the cogwheels' arrows with each other and one player controls a unique cogwheel. Harder levels include blockades and rotation constraints which
                            requires even more teamwork.

                    </h1>
                    </div>

                    <div className="pt-6">
                        <h1 className="text-xl lg:text-2xl font-red-main text-auth-subtext">
                            Kuggen was designed and developed as a part of my bachelor's thesis where we investigated successful game patterns and game design for the
                            specific target group. Another goal was to burst the mobile bubble - preventing isolated smartphone usage and promoting playing games together instead.
                            The project ran at Chalmers University of Technology as a part of a bigger research project investigating this question.

                    </h1>
                    </div>

                    <div className="flex flex-wrap text-left justify-between my-24">

                    <div className="p-6 lg:w-1/4 md:w-full gradient-card-with-bg my-4">


                    <h2 className="mb-3 text-lg font-semibold text-v2-white lg:text-2xl font-red-main"> 
                    Design Process
                    </h2>
                    <p className="mb-4 text-base leading-relaxed font-red-sub text-v2-white">
                       Establishing Requirements, Data Gathering, Prototyping, Evaluation
                    </p>
                  
                </div>

                <div className="p-6 lg:w-1/4 md:w-full gradient-card-with-bg my-4">


                    <h2 className="mb-3 text-lg font-semibold text-v2-white lg:text-2xl font-red-main"> 
                    Implementation
                    </h2>
                    <p className="mb-4 text-base leading-relaxed font-red-sub text-v2-white">
                       Swift 4
                    </p>
                  
                </div>

                <div className="p-6 lg:w-1/4 md:w-full gradient-card-with-bg my-4">


                    <h2 className="mb-3 text-lg font-semibold text-v2-white lg:text-2xl font-red-main"> 
                    Theme
                    </h2>
                    <p className="mb-4 text-base leading-relaxed font-red-sub text-v2-white">
                       Game Design • UX Design • Designing for children with special needs
                    </p>
                  
                </div>
                    </div>




                    <hr className="w-1/3 mx-auto mt-48"></hr>

                    <h1 className="text-3xl font-red-main mt-48 text-center text-bold text-auth-text">External links</h1>

                    <p className="text-xl font-red-sub text-center text-auth-text links">
                        <a href="https://drive.google.com/file/d/18uzTxGqIOR-TyrKeAFe3FZii_S4YeOvO/view?usp=sharing" target="_blank">The Thesis</a>
                    </p>

                    <p className="text-xl font-red-sub text-center text-auth-text links">
                        <a href="https://www.chalmers.se/en/projects/Pages/Touch-AtQ-Q-Designing-interactive-assistive-touch-technologies.aspx" target="_blank">Touch AT!</a>
                    </p>

                    <p className="text-xl font-red-sub text-center text-auth-text links">
                        <a href="https://www.chalmers.se/sv/institutioner/cse/utbildning/Grundutbildning/kandidatprojekt/Sidor/DATX02_19_25.aspx" target="_blank">Four in One</a>
                    </p>

                    <p className="text-xl font-red-sub text-center pb-48 text-auth-text links">
                        <a href="https://github.com/josefssonemil/Four-in-one" target="_blank">GitHub repository</a>
                    </p>


                </div>

                <Footer />
            </div>
        </div>
    );
}