import Navbar  from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImage from "../assets/n6.jpg"
import Footer from '../components/Footer';
import Trip from '../components/Trip';


function Service(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={HomeImage}
        title="Service"
        buttonClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}
export default Service;