/* 
The Home Section of the website.
This will be the Section that the user first sees when loading the page.
This section will include the Navbar at the top, the name header.
*/

import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'

const Home = () => {

    return (
        <header id="home">
            
            <Navbar />

            <Banner />

        </header>
    )
}


export default Home