import './style.css';
import heroImage from './asset/heropage-img2.png'
import Navigasi from './navigasi';
import Contact from './contact';
import Footer from './footer';
import AboutUs from './aboutus';
import Heropage from './heropage';

export default function LandingPage(){
    return(
        <>
            <Navigasi/>
            <Heropage/>
            <AboutUs/>
            <Contact/>
            <Footer/>
        </>
    )
}