/* 
The Footer component, goes at the very bottom of the page
*/
import Socials from "../components/Socials.jsx"

const Footer = () => {
    return (
        <footer>

            <p>
                Personal website by Joseph Lee
                <br/>
                Hosted on GitHub Pages
                <br/>
                Click <a href="https://github.com/jo2eph/jo2eph.github.io" title="GitHub Repo">here</a> for the GitHub repository for this website
            </p>

            <Socials/>

        </footer>
    )
}

export default Footer