import HeroV2 from '../components/hero/hero-project'
import Footer from '../components/footer'
import Header from '../components/header'


export default function Halo() {
    return (

        <div className="">
             <Header/>

            <HeroV2 header="Project Halo" subtitle="A lamp for achieving work-life balance" context="Tangible Interaction at Chalmers University of Technology"
             imgsrc="assets/halo/sketch.PNG"
            />

            <div className="svg-shapes">

                <div className="container p-6 mx-auto">

               
                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >About</h1>
                        
                        <p className="text-xl font-red-sub text-auth-subtext">
                            Project Halo is a lamp prototype with the goal achieving work-life balance. A gesture starts the lamp, and a timer,
                            and for each minute, a LED-lamp on a LED-strip is lit. Once the timer is finished, the lamp starts pulsating different colors
                            which indicates that it is a break and thus provides a relaxing ambient light. The lamp consists of a few sensors,
                            an Arduino (programmable) and a breadboard.
                        </p>
                        
                    </div>

                   
                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >The Design Process</h1>
                        
                        <p className="text-xl font-red-sub text-auth-subtext">
                            The project lasted over 8 weeks and started with formative research on the subject. Literature research 
                            and interviews were conducted as a way to gather inspiration and requirements. The concept formed during the 
                            ideation phase and a prototype was built using materials we could scavenge for free. Finally, summative research 
                            was conducted to evaluate how well the lamp works, and can work, in practice.
                        </p>
                        
                    </div>

                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >Results</h1>

                        <img className="w-1/2 py-6" src="assets/halo/sketch.PNG">
                            
                            </img>
                        
                        <img className="w-1/2 py-6" src="assets/halo/IMG_2545.jpg">
                            
                        </img>

                        <img className="w-1/2 py-6" src="assets/halo/IMG_2549.jpg">
                            
                            </img>

                            <img className="w-1/2 py-6" src="assets/halo/IMG_4940.jpeg">
                            
                            </img>

                            <img className="w-1/2 py-6" src="assets/halo/IMG_4950.JPG">
                            
                            </img>

                            </div>


                    
                        <div className="pt-16 mx-auto w-3/4">

            <h1 className="text-4xl font-red-main text-auth-text font-bold" >External Links</h1>

            <p className="text-xl font-red-sub text-auth-text links">
                        <a href="https://drive.google.com/file/d/13msb5nG-1zyTANE-xqC0QHw0ZUDOR_9a/view?usp=sharing" target="_blank">• Research paper</a>
                    </p>

                  

            </div>


            

                </div>

                <Footer />
            </div>
        </div>
    );
}