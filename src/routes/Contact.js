import Navbar  from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImage from "../assets/n5.jpg"
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={HomeImage}
        title="Contact"
        buttonClass="hide"
        />
        <ContactUs/>
         <Footer/>
        </>
    )
}
export default Contact;