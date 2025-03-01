import Navbar  from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImage from "../assets/n3.jpg"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={HomeImage}
        title="About"
        buttonClass="hide"
        />
        <AboutUs/>
        <Footer/>

        </>
    )
}
export default About;