import Head from 'next/head'
import Hero from '../components/hero'
import MiscCard from '../components/misc-card'
import ProjectCard from '../components/project-card'


import Link from 'next/link'
import Footer from '../components/footer'
import SkillCard from '../components/skill-card'


export default function Home() {
  return (

    <div className="bg-auth-background">

      <Head>
        <title>Emil Josefsson</title>

      </Head>

      <Hero name="Emil Josefsson" subtitle="I design and develop front-end experiences." />


      <div className=" ">

        <div className="container mx-auto px-4">
          <h1 className="heading text-3xl tracking-widest font-bold text-auth-text text-center font-main mt-24">Projects</h1>
          <hr className="mx-auto w-48 my-6"></hr>


          <div className="flex flex-col overflow-hidden items-center">


            <ProjectCard
              name="Proxpay"
              description="Securing card-based payments"
              url="https://i.imgur.com/0n6dsGs.png"
              href="/auth"
            />




            <ProjectCard
              name="Emotion Star"
              description="Singstar, but with face expressions (page in progress)"
              url="https://i.imgur.com/8gK4uNl.png"
              href="/facial"
            />

            <ProjectCard
              name="Project Halo"
              description="Lamp for work-life balance (page in progress)"
              url="https://i.imgur.com/6FG04hB.png"
              href="/halo"
            />

            <ProjectCard
              name="Kuggen"
              description="Game for children with autism (page in progress)"
              url="https://images.unsplash.com/photo-1560574188-6a6774965120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              href="/kuggen"

            />


          </div>

          <h1 className="heading text-3xl tracking-widest font-bold text-auth-text text-center font-main mt-24">Skills</h1>
          <hr className="mx-auto w-48 my-6"></hr>

          <div className="flex flex-row justify-evenly">
            in progress

          </div>



          <h1 className="heading text-3xl tracking-widest font-bold text-auth-text text-center font-main mt-24">About me</h1>
          <hr className="mx-auto w-48 my-6"></hr>

          <p className="text-lg font-sub text-white">
            Creativity and content creation are my passions, ranging from websites, to wallpapers and to applications. My future vision is to
            use technology to create products that help people, instead of creating products that uses people. I want technology to strive backwards
            to the time where it was human-centred and not product- and revenue centred.
            <br></br>
            <br></br>

            Today, I'm studying my last year as a university student. I've spent my 4 last years at Chalmers University of Technology, where I've
            learned to fail, to be creative and to create cool products and design. My first 3 years consisted of mainly Software Engineering which
            was followed by 2 years of Interaction Design. I think that this combination of studies give me the ability to speak two languagues: software
            language and design language, as well as allowing me to handle both design and implementation.
          </p>



          <h1 className="heading text-3xl tracking-widest font-bold text-auth-text text-center font-main mt-24">See More</h1>
          <hr className="mx-auto w-48 my-6"></hr>


          <h1 className="text-2xl font-sub text-white text-center">
            You can find more of my work at <a className="text-auth-red font-bold" href="https://www.behance.net/emiljosefsson" target="_blank">Behance</a> and <a className="text-auth-red font-bold" href="https://www.github.com/josefssonemil" target="_blank">Github</a>.
            </h1>


          <h1 className="text-2xl font-sub text-white text-center">
            Contact me @ <a className="text-auth-red font-bold" href="mailto:emil.josefsson97@gmail.com" target="_blank">e-mail</a> or <a className="text-auth-red font-bold" href="https://www.linkedin.com/in/emil-josefsson-23856b15a/" target="_blank">LinkedIn</a>.
            </h1>

          <h3 className="text-xl text-center font-sub text-white">This website is a work in progress.</h3>


        </div>



      </div >

      <Footer />

    </div>
  )
}
