import HeroV2 from '../components/hero/hero-v2'
import Footer from '../components/footer'

export default function EmotionStar() {
    return (

        <div className="">

            <HeroV2 class="emotion-star-bg" header="A game that only utilizes one input modality: your facial expressions" imgsrc="/assets/emotionstar/emotion-star.svg/" />
            <div className="svg-shapes">

                <div className="container p-6 mx-auto">

                    <div className="flex flex-col lg:flex-row justify-between pt-10 pb-16">
                        <h1 className="text-2xl lg:text-3xl font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold text-auth-text">YEAR </span> 2020
                    </h1>
                        <h1 className="text-2xl lg:text-3xl  font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold  text-auth-text">CONTEXT </span> Interaction Design Project @ Chalmers University of Technology
                    </h1>

                    </div>

                    <hr className="w-1/3 mx-auto"></hr>


                    <div className="pt-16">
                        <h1 className="text-xl lg:text-2xl font-red-main text-auth-subtext">
                            Emotion Star is a game where the only way to interact is with your face and accompanying facial expressions.
                            It is designed for young teenagers in the age range 12-16 years old in cooperation with Universeum to fit their new
                            digital platform for exhibitions. It's main target is to express Quantified Self - a way for users to learn
                            new things about themselves through data. Emotion Star expresses this through data visualizations and direct feedback of
                            users' facial expressions. The hope is that users learn about how others might perceive their expressions, as well as how
                            themselves look during certain expressions.

                    </h1>
                    </div>



                    <div className="flex flex-col lg:flex-row justify-between pt-24">
                        <h1 className="text-2xl lg:text-3xl  font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold text-auth-text">DESIGN </span><br></br> Figma
                    </h1>
                        <h1 className="text-2xl lg:text-3xl  font-red-sub text-auth text-auth-subtext">
                            <span className="font-red-main font-bold text-auth-text">IMPLEMENTATION </span> <br></br> NextJS <br></br> ReactJS <br></br> TailwindCSS <br></br> face-api.js
                    </h1>
                        <h1 className="text-2xl lg:text-3xl font-red-sub text-auth-subtext">
                            <span className="font-red-main font-bold text-auth-text">THEME </span> <br></br> User Experience <br></br> Game Design <br></br> Quantified Self
                    </h1>

                    </div>



                    <div className="w-full flex flex-col mt-48">


                        <div className="flex flex-col lg:flex-row ">
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

                    <hr className="w-1/3 mx-auto"></hr>

                    <h1 className="text-3xl font-red-main mt-48 text-center text-bold text-auth-text">External links</h1>

                    <p className="text-xl font-red-sub text-center text-auth-text">
                        <a href="https://emotion-star.vercel.app/" target="_blank">Play the game</a>
                    </p>

                    <p className="text-xl font-red-sub text-center text-auth-text">
                        <a href="http://idxpo.se/current/group6/" target="_blank">Read more about the game</a>
                    </p>

                    <p className="text-xl font-red-sub text-center text-auth-text">
                        <a href="http://idxpo.se/current/" target="_blank">Read more about the project course</a>
                    </p>

                    <p className="text-xl font-red-sub text-center pb-48 text-auth-text">
                        <a href="https://github.com/josefssonemil/emotion-star" target="_blank">GitHub repository</a>
                    </p>


                </div>

                <Footer />
            </div>
        </div >
    );
}