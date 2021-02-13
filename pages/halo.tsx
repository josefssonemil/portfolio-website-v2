import HeroV2 from '../components/hero/hero-v2'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Halo() {
    return (

        <div className="">
    <Header/>

            <HeroV2 class="bg-v2-dark" header="The lamp that helps achieve work-life balance" imgsrc="" />
            <div className="svg-shapes">

                <div className="container p-6 mx-auto">

                    <div className="flex flex-col lg:flex-row justify-between pt-10 pb-16">
                        <h1 className="text-2xl lg:text-3xl font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold text-auth-text">YEAR </span> 2020
                    </h1>
                        <h1 className="text-2xl lg:text-3xl  font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold  text-auth-text">CONTEXT </span> Tangible Interaction @ Chalmers University of Technology
                    </h1>

                    </div>

                    <hr className="w-1/3 mx-auto"></hr>


                    <div className="pt-16">
                        <h1 className="text-xl lg:text-2xl font-red-main text-auth-subtext">

                        Project Halo was built with the vision of helping (virtual) users achieving work-life balance.
                        Each light on a LED-strip represents 2 minutes, and when all the lights are filled with color, Halo
                        pulsates and indicating that it is a time for a break. The pulsating rhythm were designed to help users
                        focus on relaxing, where the pulse frequency matches a slow breathing frequency. The lamp was built using 
                        an Arduino, a breadboard, a few sensors and various materials that we were able to scavenge.
                   

                    </h1>
                    </div>


                    <div className="flex flex-wrap text-left justify-between my-24">

                    <div className="p-6 lg:w-1/4 md:w-full gradient-card-with-bg my-4">


                    <h2 className="mb-3 text-lg font-semibold text-v2-white lg:text-2xl font-red-main"> 
                    Design Process
                    </h2>
                    <p className="mb-4 text-base leading-relaxed font-red-sub text-v2-white">
                       Literature Research, Formative Research, Sketching, Prototyping, Summative Research
                    </p>
                  
                </div>

                <div className="p-6 lg:w-1/4 md:w-full gradient-card-with-bg my-4">


                    <h2 className="mb-3 text-lg font-semibold text-v2-white lg:text-2xl font-red-main"> 
                    Implementation
                    </h2>
                    <p className="mb-4 text-base leading-relaxed font-red-sub text-v2-white">
                       Arduino connected to a breadboard and a couple of sensors.
                    </p>
                  
                </div>

                <div className="p-6 lg:w-1/4 md:w-full gradient-card-with-bg my-4">


                    <h2 className="mb-3 text-lg font-semibold text-v2-white lg:text-2xl font-red-main"> 
                    Theme
                    </h2>
                    <p className="mb-4 text-base leading-relaxed font-red-sub text-v2-white">
                       Balancing work and life.
                    </p>
                  
                </div>
                    </div>




                    <h1 className="text-3xl font-red-main mt-48 text-center text-bold text-auth-text">External links</h1>

                    
                    

                </div>

                <Footer />
            </div>
        </div >
    );
}