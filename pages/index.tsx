import Head from 'next/head'
import Hero from '../components/hero'
import ProjectCard from '../components/project-card'

export default function Home() {
  return (

    <div>
      <Hero />

      <div className="container mx-auto px-4 m-10">
        <h1 className="text-6xl font-bold">Projects</h1>

        <ProjectCard />


        <h1 className="text-6xl font-bold">Miscellaneous</h1>

      </div>



    </div>
  )
}
