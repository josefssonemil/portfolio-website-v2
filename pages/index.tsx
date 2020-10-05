import Head from 'next/head'
import Hero from '../components/hero'
import MiscCard from '../components/misc-card'
import ProjectCard from '../components/project-card'


import Link from 'next/link'
import Footer from '../components/footer'


export default function Home() {
  return (

    <div className="">

      <Head>
        <title>Emil Josefsson</title>

      </Head>



      <div className="">
        <Hero name="Emil Josefsson" subtitle="Interaction Designer and Software Engineer" />

        <div className="container mx-auto px-4 m-10">
          <h1 className="heading text-3xl tracking-widest font-bold text-orange-300 text-center font-main">Projects</h1>
          <hr className="mx-auto w-48 my-6"></hr>


          <div className="flex flex-wrap -mx-2 overflow-hidden justify-evenly ">


            <ProjectCard
              name="Authentication"
              description="placeholder descr."
              path="M10 17c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm2-7v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8v-4zm11 16h-14v-10h14v10z"
              href="/auth"
            />




            <ProjectCard
              name="Emotion Star"
              description="Singstar, but with face expressions"
              path="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm0-3.998l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z"
              href="/facial"
            />

            <ProjectCard
              name="Project Halo"
              description="Lamp for work-life balance"
              path="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"
              href="/halo"
            />

            <ProjectCard
              name="Kuggen"
              description="Game for children with autism"
              path="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"
              href="/kuggen"

            />


          </div>




          <h1 className="heading text-3xl tracking-widest font-bold text-orange-300 text-center font-main mt-24">About me</h1>
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



          <h1 className="heading text-3xl tracking-widest font-bold text-orange-300 text-center font-main mt-24">More</h1>
          <hr className="mx-auto w-48 my-6"></hr>


          <h1 className="text-2xl font-sub text-white text-center">
            You can find more of my work at <a className="text-pBlue-3 font-bold" href="https://www.behance.net/emiljosefsson" target="_blank">Behance</a> and <a className="text-pBlue-3 font-bold" href="https://www.github.com/josefssonemil" target="_blank">Github</a>.
            </h1>


          <h1 className="text-2xl font-sub text-white text-center">
            Contact me @ <a className="text-pBlue-3 font-bold" href="mailto:emil.josefsson97@gmail.com" target="_blank">e-mail</a> or <a className="text-pBlue-3 font-bold" href="https://www.linkedin.com/in/emil-josefsson-23856b15a/" target="_blank">LinkedIn</a>.
            </h1>

          <h3 className="text-xl text-center font-sub text-white">This website is a work in progress.</h3>


        </div>



      </div >

      <Footer />

    </div>
  )
}
