import Head from 'next/head'
import Hero from '../components/hero/hero'
import ProjectCard from '../components/cards/project-card'


import Footer from '../components/footer'
import SkillCard from '../components/cards/skill-card'


export default function Home() {
  return (

    <div className="bg-auth-background">

      <Head>
        <title>Emil Josefsson</title>

      </Head>

      <Hero name="Emil Josefsson" subtitle="I design and develop front-end experiences." />


      <div className=" ">

        <div className=" mx-auto px-4">
          <h1 className="heading text-3xl tracking-widest font-bold text-auth-text text-center font-main mt-24">Projects</h1>
          <hr className="mx-auto w-48 my-6"></hr>


          <div className="flex flex-col mx-auto justify-center items-center">





            <ProjectCard
              name="Emotion Star"
              description="Singstar, but with face expressions"
              tags="UX Design, Game Design"
              href="/emotion-star"
            />
            <ProjectCard
              name="Kuggen"
              description="A cooperative game designed for children with autism"
              tags="UX Design, Game Design, Designing for Children"
              href="/kuggen"
            />



          </div>











        </div>



      </div >

      <Footer />

    </div>
  )
}
