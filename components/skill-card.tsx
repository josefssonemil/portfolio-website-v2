const SkillCard = (props) => {


    return (
        <div className="rounded-lg shadow-lg ">

            <div className="">

                <h1 className="text-xl text-center tracking-widest text-auth-text uppercase">
                    Front-end
            </h1>


                <div className="bg-auth-red">
                    <svg className="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.63 15.214h.625l.004-3.197h-.626l-.003 3.197zm-1.161-1.894h.626l.01-1.738h-.627l-.009 1.738zm2.36-.013h.627l-.01-1.725h-.626l.009 1.725zm-1.916-9.135c0 .57.461 1.031 1.031 1.031.57 0 1.031-.461 1.032-1.031-.001-.569-.462-1.03-1.032-1.031-.57 0-1.031.462-1.031 1.031zm1.546 2.577c0-.285-.23-.515-.515-.515-.285 0-.515.23-.515.515 0 .285.23.515.515.516.285-.001.515-.231.515-.516zm-4.86 5.268c-.332-2.929 1.206-4.092 1.837-4.711l-.002-.009c-.129-.85-.692-4.502 2.503-7.297 3.249 2.807 2.723 6.416 2.594 7.306.631.619 2.174 1.782 1.842 4.711-.5-1.113-1.458-1.832-2.561-2.074-.088.216-.297.707-.393.907l-2.805.009c-.1-.203-.343-.707-.436-.93-1.025.191-1.912.682-2.579 2.088zm4.881 5.939v6.044l6.266-3.343v-2.464l-4.042 2.116-2.224-2.353zm-7.26.19v2.511l6.26 3.34v-5.998l-2.171 2.385-4.089-2.238zm1.617-5.01c-.607-1.281-.386-2.963-.031-4.001l-3.84 1.984 2.254 2.121-2.254 2.482 6.133 3.407 2.381-2.615v-.041l-5.45-2.892.807-.445zm11.909.104l2.254 2.591-6.089 3.24-2.431-2.57v-.004l5.457-2.916-.826-.455c.661-1.263.411-2.937.021-3.983l3.868 2.018-2.277 2.066.023.013z" /></svg>

                </div>

            </div>


            <div className="flex flex-row">
                <h1 className=" text-lg text-auth-text font-bold">JavaScript</h1>
                <h1>LOGO</h1>

            </div>

            <div className="flex flex-row">
                <h1 className=" text-lg text-auth-text font-bold">JavaScript</h1>
                <h1>LOGO</h1>

            </div>


        </div>
    );
};

export default SkillCard;