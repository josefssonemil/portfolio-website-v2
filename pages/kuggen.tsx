import HeroV2 from '../components/hero/hero-project'
import Footer from '../components/footer'
import Header from '../components/header'


export default function Kuggen() {
    return (

        <div className="">
             <Header/>

            <HeroV2 header="Kuggen" subtitle="A game designed to aid children with autism" context="Bachelor's Thesis at Chalmers University of Technology"
             imgsrc="assets/kuggen/kuggen-hero.png"
            />

            <div className="svg-shapes">

                <div className="container p-6 mx-auto">

               
                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >About</h1>
                        
                        <p className="text-xl font-red-sub text-auth-subtext">
                            Kuggen is a cooperative game we designed as a Bachelor's Thesis at Chalmers University of Technology.
                            The goal was to investigate game design elements to provide a social experience for children with Autism-Spectrum Disorder
                            to practice their collaborative and social skills. Prototyping was done with Invision and Adobe XD, while implementation
                            was done in Swift 4.
                        </p>
                        
                    </div>

                   
                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >The Design Process</h1>
                        
                        <p className="text-xl font-red-sub text-auth-subtext">
                            A comprehensive literature study was conducted to find similar research which could be built upon.
                            A Human-centered approach was conducted, where the goal was to design for the children
                            in a school environment. Thus, we learned about designing for children, about ASD, about game design
                            and put it all together into a high-fidelity prototype in an iterative design process. We gathered data,
                            established requirements, created prototypes and tested the prototypes.
                        </p>
                        
                    </div>

                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >Results</h1>

                        <p className="text-xl font-red-sub text-auth-subtext">
                            The project resulted in a multiplayer game which is played on four separate iPads which together 
                            form the playing ground. Each player controls a robot and together the players need to cooperate to 
                            rotate cogwheels an align them in certain ways to get to the next level. During user evaluation, 
                            the children were positive to the concept and had a fun experience playing the game together.
                        </p>

                        </div>

                    
                        <div className="pt-16 mx-auto w-3/4">

            <h1 className="text-4xl font-red-main text-auth-text font-bold" >External Links</h1>

            <p className="text-xl font-red-sub  text-auth-text links">
                        <a href="https://drive.google.com/file/d/18uzTxGqIOR-TyrKeAFe3FZii_S4YeOvO/view?usp=sharing" target="_blank">• The Thesis</a>
                    </p>

                    <p className="text-xl font-red-sub text-auth-text links">
                        <a href="https://www.chalmers.se/en/projects/Pages/Touch-AtQ-Q-Designing-interactive-assistive-touch-technologies.aspx" target="_blank">• Touch AT!</a>
                    </p>

                    <p className="text-xl font-red-sub text-auth-text links">
                        <a href="https://www.chalmers.se/sv/institutioner/cse/utbildning/Grundutbildning/kandidatprojekt/Sidor/DATX02_19_25.aspx" target="_blank">• Four in One</a>
                    </p>

                    <p className="text-xl font-red-sub text-auth-text links">
                        <a href="https://github.com/josefssonemil/Four-in-one" target="_blank">• GitHub repository</a>
                    </p>

            </div>


            

                </div>

                <Footer />
            </div>
        </div>
    );
}