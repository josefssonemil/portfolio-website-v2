import Link from 'next/link';

interface Props {
    name: string,
    href: string
}
const NavSection = (props: Props) => {

    return (

        <Link href={props.href}>
                <div className="w-1/4 text-left project-section-styles p-6 my-24">
                    <h1 className="mb-8 text-xl font-bold  text-center text-white lg:text-2xl font-red-main">
                        {props.name}
                    </h1>
                 
                   
                </div>

            
        </Link>
    );
}

export default NavSection;