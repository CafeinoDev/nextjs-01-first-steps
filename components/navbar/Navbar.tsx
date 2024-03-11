import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
];
 
export const Navbar = () => {

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded items-center">
            <Link href={ `/` } className="flex items-center gap-2.5 bg-white text-black p-2 rounded">
                <HomeIcon />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map( navItem => (
                    <Link className="mx-2" key={ navItem.path } href={ navItem.path }>{ navItem.text }</Link>
                ) )
            }
        </nav>
    )
}