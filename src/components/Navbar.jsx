/* 
Navbar component: the navbar at the top of the page
Sections: Home, About, Blog, Projects, Portfolio
*/

import Socials from "../components/Socials"

const Navbar = () => {

    return (
        <nav id='nav-wrap'>


            <ul id='nav'>
                
                <li id='nav-btn-home'>
                    <a href="#home">Home</a>
                </li>

                <li id='nav-btn-about'>
                    <a href="#about">About</a>
                </li>

                <li id='nav-btn-blog'>
                    <a href="#blog">Blog</a>
                </li>

                <li id='nav-btn-projects'>
                    <a href="#projects">Projects</a>
                </li>

                <li id='nav-btn-portfolio'>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li>
                    <Socials/>
                </li>

            </ul>

        </nav>
    )
}


export default Navbar