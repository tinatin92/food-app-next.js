
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "./mainHeader-background";
import NavLink from './nav-link';

export default function MainHeader () {

    return <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image src={logoImage} alt='header image' priority />
            Nextlevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href='/meals'>Meals</NavLink>
                </li>
                <li>
                    
                    <NavLink href='/community'>Community</NavLink>
                </li>
            </ul>
        </nav>

    </header>
    
    </>
    
 
}