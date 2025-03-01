import Navbar  from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImage from "../assets/n1.jpg";
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home(){
    return(
        <><Navbar/>
        <Hero
        cName="hero"
        heroImg={HomeImage}
        title="Journey Into the Extraordinary"
        text="Let Us Guide Your Next ADVENTURE."
        buttonText="Travel Plan"
        url="/"
        buttonClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>

       
        </>
    );
}
export default Home;