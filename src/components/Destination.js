import manali1 from '../assets/man1.jpg'
import manali2 from '../assets/man2.jpg'
import chik1 from '../assets/chik1.jpg'
import chik4 from '../assets/chik4.jpg'
import DestinationData from './DestinationData';
import './DestinationStyle.css'

const Destination=() =>{
    return(

        <div className="destination">
        <h1>popular destination</h1>
        <p>Your next adventure is just a tap away </p>
        
        <DestinationData
        
        className="first-des"
        heading="MANALI"
        text="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass."
        img1={manali1}
        img2={manali2}
        />
       
       <DestinationData
        
         className="first-des-reverse"
        heading="CHIKKAMAGALURU"
        text="Chikmagalur is a hill station in Karnataka, a state in southwest India. To the north is Baba Budangiri, a mountain range in the Western Ghats, with 3 large caves said to be holy. Trails through forests and grasslands lead up to Mullayanagiri Peak. The cascading Hebbe Falls lie in an area of coffee plantations. The forested Bhadra Wildlife Sanctuary, northwest of Chikmagalur, is home to elephants, tigers and leopards."
        img1={chik1}
        img2={chik4}
        />
        
        </div>
    );
};
export default Destination;