import HeroV2 from '../components/hero/hero-project'
import Footer from '../components/footer'
import Header from '../components/header'


export default function EmotionStar() {
    return (

        <div className="">
             <Header/>

            <HeroV2 header="Emotion Star" subtitle="Singstar, but with facial expressions" context="Interaction Design Project at Chalmers University of Technology"
             imgsrc="assets/emotionstar/emotion-star-hero.png"
            />

            <div className="svg-shapes">

                <div className="container p-6 mx-auto">

               
                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >About</h1>
                        
                        <p className="text-xl font-red-sub text-auth-subtext">
                            Emotion Star is a two player game implemented as a web application using ReactJS, NextJS, TailwindCSS and face-api.js.
                            The theme of the course Interaction Design Project was "Quantified Self", where the game allows players to see 
                            their face expressions from a different perspective. The target group in the course was teenagers.
                        </p>
                        
                    </div>

                   
                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >The Design Process</h1>
                        
                        <p className="text-xl font-red-sub text-auth-subtext">
                            The project lasted over 8 weeks and started with research and ideation about the context.
                            Teenagers love emojis and quickly emojis + singstar resulted in Emotion Star. Due to the Covid-19 pandemic,
                            it was not feasible to conduct user testing with the target group. Instead, user testing was conducted with 
                            classmates.
                        </p>
                        
                    </div>

                    <div className="pt-16 mx-auto w-3/4">

                        <h1 className="text-4xl font-red-main text-auth-text font-bold" >Results</h1>

                        <div className="w-full flex flex-col mt-12">


                            <div className="flex flex-col lg:flex-row">
                                <img className="" src="http://idxpo.se/current/group6/img/warmup.gif"></img>

                                <div className="p-6">
                                    <h1 className="text-3xl font-red-main font-bold tracking-wider uppercase text-auth-text">STAGE 1 - Warumup</h1>
                                    <p className="text-xl font-red-sub text-auth-subtext">
                                        The warm-up stage allows users to experiment with different types of emotions and make sure that the game can recognize them.
                                        To proceed to the game, users must complete and hold each expression for three seconds.
                                </p>
                                </div>
                            </div>




                            <div className="flex flex-col lg:flex-row justify-end mt-48">

                                <div className=" p-6">
                                    <h1 className="text-3xl font-red-main font-bold tracking-wider uppercase text-auth-text">Stage 2 - Play game</h1>
                                    <p className="text-xl font-red-sub text-auth-subtext">
                                        The point of the game is to hit "notes" which are synchronized with a song. To get points, players have to time their facial expressions
                                        to the bars on the screen. Points scale with how good you manage to hit the notes, as well as how many of them you hit.
                                </p>
                                </div>

                                <img className="" src="http://idxpo.se/current/group6/img/gameplay.gif"></img>


                            </div>


                            <div className="flex flex-col lg:flex-row mt-48 mb-48">
                                <img className="" src="http://idxpo.se/current/group6/img/stats.jpg"></img>

                                <div className="p-6">
                                    <h1 className="text-3xl font-red-main font-bold tracking-wider uppercase text-auth-text">Stage 3 - Post-game stats</h1>
                                    <p className="text-xl font-red-sub text-auth-subtext">
                                        The post-game stats screen allow users to explore how good they were at making different expressions. They will see percentage of notes hit along with
                                        time spent making each expression. To retrieve the data for a specific expression, the user must make that expression. Along side this,
                                        there is a highscore list accompanied with a global average.
                                </p>
                                </div>
                            </div>

                            </div>

                    </div>

                    
                        <div className="pt-16 mx-auto w-3/4">

            <h1 className="text-4xl font-red-main text-auth-text font-bold" >External Links</h1>

            <p className="text-xl font-red-sub text-auth-text links">
                        <a href="https://emotion-star.vercel.app/" target="_blank">• Play the game</a>
                    </p>

                    <p className="text-xl font-red-sub text-auth-text links">
                        <a href="http://idxpo.se/current/group6/" target="_blank">• Read more about the game</a>
                    </p>

                    <p className="text-xl font-red-sub text-auth-text links">
                        <a href="http://idxpo.se/current/" target="_blank">• Read more about the project course</a>
                    </p>

                    <p className="text-xl font-red-sub  text-auth-text links">
                        <a href="https://github.com/josefssonemil/emotion-star" target="_blank">• GitHub repository</a>
                    </p>

            </div>


            

                </div>

                <Footer />
            </div>
        </div>
    );
}