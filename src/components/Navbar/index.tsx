import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Navbar.scss'

export default function Navbar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Sing in"
        },
        {
            url: "/",
            label: "Sing in"
        },
        {
            url: "/",
            label: "Cadernos"
        },
        {
            url: "/",
            label: "Sing in"
        }
    ]

    return(
        <header className='navbar'>
            <Image
                src="logo.svg"
                width={190}
                height={63}
                alt="Logo Dissecador de Questões"
            />

            <article className='navbar-links'>
                <button className='btn-default'>
                    Login
                </button>

                <ul className='nav-items'>
                    {items.map((items, index)=> (
                        <NavItem 
                        key={index}
                        url={items.url}
                        label={items.label}
                        />
                    ))}
                </ul>
            </article>

        </header>
    );
}

export interface NavItemInterface {
    url: string;
    label: string;
}

export function NavItem(props: NavItemInterface) {
    return (
        <li>
            <Link href={props.url} className="nav-link">
                {props.label}
            </Link>
        </li>
    );
}