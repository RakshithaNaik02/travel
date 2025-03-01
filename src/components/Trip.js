import './TripStyle.css';
import './TripData.js'
import lad1 from '../assets/lad1.jpg'
import kash1 from '../assets/kash1.jpg'
import goa from '../assets/goa.jpg'
import raj from '../assets/raj1.jpg'
import TripData from './TripData.js';



function Trip() {
    return(

        <div className='trip'>
            <h1> RECENT TRIPS</h1>
            <p>You can discover unique Destinations using Google Maps</p>
            <div className='tipcard'>
                <TripData
                image={goa}
                heading="GOA"
                text='Goa is a captivating destination, famed for its picturesque beaches, lively nightlife, and unique fusion of Indian and Portuguese cultures. Popular beaches like Baga, Anjuna, and Palolem offer a mix of party scenes and serene escapes. History lovers can explore Old Goa’s colonial-era churches, including the Basilica of Bom Jesus and Se Cathedral. Goa’s seafood, including Goan fish curry and prawn dishes, is a culinary delight. Adventure seekers can enjoy water sports like parasailing, jet skiing, and scuba diving, while nature enthusiasts can trek to Dudhsagar Waterfalls or visit wildlife sanctuaries. Goa’s flea markets, such as Anjuna and Mapusa, are perfect for picking up souvenirs and handicrafts. The ideal time to visit is from November to February, with festive highlights like Carnival and Christmas adding to the vibrant atmosphere.'
                />

<TripData
                image={kash1}
                heading="KASHMIR"
                text="Kashmir, often called 'Paradise on Earth,' is renowned for its stunning natural beauty, snow-capped mountains, and serene landscapes. *Srinagar* is the heart of Kashmir, famous for its Dal Lake, houseboats, and Mughal Gardens like Shalimar Bagh. A boat ride on Dal Lake's shikaras is a must.

Gulmarg is a top destination for skiing and snowboarding in winter, offering breathtaking views of the Himalayas. Pahalgam, with its lush meadows and rivers, is perfect for nature lovers and trekkers. Sonamarg, the 'Meadow of Gold,' is ideal for picturesque views and trekking routes.

For a spiritual experience, the *Amarnath Yatra* attracts thousands of pilgrims every year. Kashmir is also famous for its handicrafts, traditional Kashmiri cuisine, and warm hospitality, making it a perfect destination for peace and adventure alike."
                />

<TripData
                image={lad1}
                heading="LADAKH"
                text='Ladakh, known as the "Land of High Passes," is a stunning destination in northern India, famed for its rugged landscapes, serene lakes, and Buddhist culture. *Leh*, the capital, is a gateway to numerous attractions, including the Leh Palace, Shanti Stupa, and bustling local markets. 

The mesmerizing *Pangong Lake, with its changing colors, and the tranquil **Tso Moriri* Lake are must-visits for nature lovers. *Nubra Valley, with its sand dunes and Bactrian camels, offers a unique desert experience amidst snow-capped mountains. The **Magnetic Hill* and *Khardung La Pass, one of the highest motorable roads in the world, are thrilling for adventure seekers. Ladakh is also home to ancient monasteries like **Hemis, **Thiksey, and **Diskit*, adding spiritual depth to this remote and breathtaking region.'
                />
            </div>
        </div>
    )
}

export default Trip;