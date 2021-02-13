/* const Footer = () => {
    return (
        <div className="w-full h-24 bg-gray-900">
            <h1 className="font-main text-white text-center p-2 pt-6">Copyright Emil Josefsson. Design and implementation by me. Built with ReactJS, NextJS and TailwindCSS.</h1>
            <h1 className="font-sub text-auth-red text-center">
                <a className="" href="https://github.com/josefssonemil/portfolio-website-v2" target="_blank">Github repository</a>
            </h1>
        </div>
    );

}

export default Footer; */

const Footer = () => {
    return (
     
    <footer className="mt-32 bg-v2-dark body-font">
            <div className="">
                <div className=" flex flex-col flex-wrap px-5 py-6 lg:px-20 sm:flex-row">
                    <div className="flex flex-wrap items-center justify-center text-base ">
                        <p className="mr-5 text-sm text-center text-gray-200">© Emil Josefsson. Built with ReactJS, NextJS and TailwindCSS. Icons from Thenounproject.
                        </p>
                        <a href="https://github.com/josefssonemil/portfolio-website-v2" target="_blank" className="justify-center mr-5 text-sm text-center text-gray-500 hover:text-v2-purple"> GitHub Repository</a>
                        <a href="https://dribbble.com/josefssonemil" target="_blank" className="justify-center mr-5 text-sm text-center text-gray-500 hover:text-v2-purple"> Dribble</a>
                        <a href="https://www.linkedin.com/in/emil-josefsson-23856b15a/" target="_blank" className="justify-center mr-5 text-sm text-center text-gray-500 hover:text-v2-purple"> LinkedIn</a>
                        <a href="https://www.github.com/josefssonemil" target="_blank" className="justify-center mr-5 text-sm text-center text-gray-500 hover:text-v2-purple"> GitHub</a>
                        <a href="https://www.behance.net/emiljosefsson" target="_blank" className="justify-center mr-5 text-sm text-center text-gray-500 hover:text-v2-purple"> Behance</a>
                        <a href="mailto:emil.josefsson97@gmail.com" target="_blank" className="justify-center mr-5 text-sm text-center text-gray-500 hover:text-v2-purple"> emil.josefsson97@gmail.com</a>

                       


                    </div>
                  
                </div>
            </div>
        </footer>
                  
    );
}

export default Footer;