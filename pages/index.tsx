import Head from 'next/head'
import Hero from '../components/hero/hero'
import ProjectSection from '../components/cards/project-section'
import Header from '../components/header'

import Footer from '../components/footer'
import CardGroup from '../components/card-group'


export default function Home() {
  return (

    <div className="">

    <div className="bg-v2-dark">
      
    <Header/>
      <Head>
        <title>Emil Josefsson</title>

      </Head>

      <Hero name="Emil Josefsson" subtitle="Aspiring designer and front-end developer" />




          

      <div className="container mx-auto">


      <h1 className="heading text-5xl font-bold text-auth-text text-center lg:text-left font-red-main mt-24 ">Selected work</h1>


      <ProjectSection
              name="Master Thesis"
              description="Currently in progress. Investigating the use of persuasive technologies, such as gamification and nudging,
              to increase the user experience and motivation in a work management platform."
              tags="UX Design • Persuasive Design"
              href=""
              path="M15.5 18H3.5C1.57 18 0 16.43 0 14.5V3.5C0 1.57 1.57 0 3.5 0H15.5C17.43 0 19 1.57 19 3.5V14.5C19 16.43 17.43 18 15.5 18ZM3.5 1C2.122 1 1 2.121 1 3.5V14.5C1 15.879 2.122 17 3.5 17H15.5C16.878 17 18 15.879 18 14.5V3.5C18 2.121 16.878 1 15.5 1H3.5ZM3 13.303V14.5C3 14.775 3.224 15.063 3.5 15.063C3.776 15.063 4 14.9 4 14.625L3.989 13.622C4.083 13.419 5.03 13 6.44 13H12.88C14.274 13 14.955 13.162 15 13.303V14.5C15 14.775 15.225 15 15.5 15C15.775 15 16 14.775 16 14.5V13.303C16 12.451 14.666 12 12.88 12H6.44C4.704 12 3 12.393 3 13.303ZM14.5 7H11.5C11.225 7 11 6.776 11 6.5V3.5C11 3.224 11.225 3 11.5 3H16C16.275 3 16.5 3.224 16.5 3.5C16.5 3.776 16.275 4 16 4H15V6.5C15 6.776 14.775 7 14.5 7ZM12 6H14V4H12V6ZM10 11V9C10 8.724 9.776 8.5 9.5 8.5C9.224 8.5 9 8.724 9 9V11C9 11.275 9.224 11.5 9.5 11.5C9.776 11.5 10 11.275 10 11ZM4.363 6.383L6.003 5.005L7.682 6.386C7.896 6.563 8.21 6.531 8.386 6.318C8.561 6.105 8.531 5.79 8.318 5.615L6.318 3.969C6.132 3.816 5.864 3.817 5.678 3.972L3.72 5.617C3.509 5.795 3.481 6.11 3.659 6.321C3.758 6.439 3.899 6.5 4.042 6.5C4.155 6.5 4.27 6.462 4.363 6.383Z"
            />


      <ProjectSection
              name="Emotion Star"
              description="Singstar, but with facial expressions. Designed and developed as a part of the course Interaction
              Design Project at Chalmers University of Technology."
              tags="UX Design • Game Design"
              href="/emotion-star"
              path="M15.5 18H3.5C1.57 18 0 16.43 0 14.5V3.5C0 1.57 1.57 0 3.5 0H15.5C17.43 0 19 1.57 19 3.5V14.5C19 16.43 17.43 18 15.5 18ZM3.5 1C2.122 1 1 2.121 1 3.5V14.5C1 15.879 2.122 17 3.5 17H15.5C16.878 17 18 15.879 18 14.5V3.5C18 2.121 16.878 1 15.5 1H3.5ZM3 13.303V14.5C3 14.775 3.224 15.063 3.5 15.063C3.776 15.063 4 14.9 4 14.625L3.989 13.622C4.083 13.419 5.03 13 6.44 13H12.88C14.274 13 14.955 13.162 15 13.303V14.5C15 14.775 15.225 15 15.5 15C15.775 15 16 14.775 16 14.5V13.303C16 12.451 14.666 12 12.88 12H6.44C4.704 12 3 12.393 3 13.303ZM14.5 7H11.5C11.225 7 11 6.776 11 6.5V3.5C11 3.224 11.225 3 11.5 3H16C16.275 3 16.5 3.224 16.5 3.5C16.5 3.776 16.275 4 16 4H15V6.5C15 6.776 14.775 7 14.5 7ZM12 6H14V4H12V6ZM10 11V9C10 8.724 9.776 8.5 9.5 8.5C9.224 8.5 9 8.724 9 9V11C9 11.275 9.224 11.5 9.5 11.5C9.776 11.5 10 11.275 10 11ZM4.363 6.383L6.003 5.005L7.682 6.386C7.896 6.563 8.21 6.531 8.386 6.318C8.561 6.105 8.531 5.79 8.318 5.615L6.318 3.969C6.132 3.816 5.864 3.817 5.678 3.972L3.72 5.617C3.509 5.795 3.481 6.11 3.659 6.321C3.758 6.439 3.899 6.5 4.042 6.5C4.155 6.5 4.27 6.462 4.363 6.383Z"
            />

          <ProjectSection
              name="Kuggen"
              description="A cooperative game designed for children with autism. Designed and developed during the Bachelor Thesis at Chalmers
              University of Technology"
              tags="UX Design • Game Design • Designing for Children"
              href="/kuggen"
              path="M15.5 18H3.5C1.57 18 0 16.43 0 14.5V3.5C0 1.57 1.57 0 3.5 0H15.5C17.43 0 19 1.57 19 3.5V14.5C19 16.43 17.43 18 15.5 18ZM3.5 1C2.122 1 1 2.121 1 3.5V14.5C1 15.879 2.122 17 3.5 17H15.5C16.878 17 18 15.879 18 14.5V3.5C18 2.121 16.878 1 15.5 1H3.5ZM3 13.303V14.5C3 14.775 3.224 15.063 3.5 15.063C3.776 15.063 4 14.9 4 14.625L3.989 13.622C4.083 13.419 5.03 13 6.44 13H12.88C14.274 13 14.955 13.162 15 13.303V14.5C15 14.775 15.225 15 15.5 15C15.775 15 16 14.775 16 14.5V13.303C16 12.451 14.666 12 12.88 12H6.44C4.704 12 3 12.393 3 13.303ZM14.5 7H11.5C11.225 7 11 6.776 11 6.5V3.5C11 3.224 11.225 3 11.5 3H16C16.275 3 16.5 3.224 16.5 3.5C16.5 3.776 16.275 4 16 4H15V6.5C15 6.776 14.775 7 14.5 7ZM12 6H14V4H12V6ZM10 11V9C10 8.724 9.776 8.5 9.5 8.5C9.224 8.5 9 8.724 9 9V11C9 11.275 9.224 11.5 9.5 11.5C9.776 11.5 10 11.275 10 11ZM4.363 6.383L6.003 5.005L7.682 6.386C7.896 6.563 8.21 6.531 8.386 6.318C8.561 6.105 8.531 5.79 8.318 5.615L6.318 3.969C6.132 3.816 5.864 3.817 5.678 3.972L3.72 5.617C3.509 5.795 3.481 6.11 3.659 6.321C3.758 6.439 3.899 6.5 4.042 6.5C4.155 6.5 4.27 6.462 4.363 6.383Z"

            />


          <ProjectSection
              name="Project Halo"
              description="A lamp designed to be used during work sessions and uses ambient light feedback to provide breaks. Designed and developed as a project
              during the course Tangible Interaction at Chalmers University of Technology."
              tags="UX Design • Work-Life balance"
              href="/halo"
              path="M15.5 18H3.5C1.57 18 0 16.43 0 14.5V3.5C0 1.57 1.57 0 3.5 0H15.5C17.43 0 19 1.57 19 3.5V14.5C19 16.43 17.43 18 15.5 18ZM3.5 1C2.122 1 1 2.121 1 3.5V14.5C1 15.879 2.122 17 3.5 17H15.5C16.878 17 18 15.879 18 14.5V3.5C18 2.121 16.878 1 15.5 1H3.5ZM3 13.303V14.5C3 14.775 3.224 15.063 3.5 15.063C3.776 15.063 4 14.9 4 14.625L3.989 13.622C4.083 13.419 5.03 13 6.44 13H12.88C14.274 13 14.955 13.162 15 13.303V14.5C15 14.775 15.225 15 15.5 15C15.775 15 16 14.775 16 14.5V13.303C16 12.451 14.666 12 12.88 12H6.44C4.704 12 3 12.393 3 13.303ZM14.5 7H11.5C11.225 7 11 6.776 11 6.5V3.5C11 3.224 11.225 3 11.5 3H16C16.275 3 16.5 3.224 16.5 3.5C16.5 3.776 16.275 4 16 4H15V6.5C15 6.776 14.775 7 14.5 7ZM12 6H14V4H12V6ZM10 11V9C10 8.724 9.776 8.5 9.5 8.5C9.224 8.5 9 8.724 9 9V11C9 11.275 9.224 11.5 9.5 11.5C9.776 11.5 10 11.275 10 11ZM4.363 6.383L6.003 5.005L7.682 6.386C7.896 6.563 8.21 6.531 8.386 6.318C8.561 6.105 8.531 5.79 8.318 5.615L6.318 3.969C6.132 3.816 5.864 3.817 5.678 3.972L3.72 5.617C3.509 5.795 3.481 6.11 3.659 6.321C3.758 6.439 3.899 6.5 4.042 6.5C4.155 6.5 4.27 6.462 4.363 6.383Z"
            />
    
      </div>




      <div className="container mx-auto">

      <h1 className="heading text-5xl font-bold text-auth-text text-center lg:text-left font-red-main mt-24">Skills</h1>
      <CardGroup/>

      
      </div> 















      <Footer />

    </div>
    </div>

  )
}
