import React from 'react';

import Banner from "./Banner";
import './Home.css';
import Card from "./Card";
import { Description } from '@material-ui/icons';


function Home() {
    return (
        <div className='home'>
    
        <Banner />
        <br></br>
        <div className='home__section'>
        
            <Card 
                src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=480"
                title="Pets welcome"
                description="Perfect for pets."
            />
            
        </div>
        <br></br>
           <div className='destinations' >
            <h1>Popular destinations</h1>
            <br></br>
            
            <div className='home__section'>
            
            <Card 
                src="https://static.toiimg.com/photo/75012798/mumbai-live.jpg?width=748&resize=4"
                title="Mumbai"
            />
            <Card 
                src="https://www.holidify.com/images/bgImages/DELHI.jpg"
                title="Delhi"/>
                <Card 
                src="https://www.treebo.com/blog/wp-content/uploads/2017/04/Places-to-Visit-in-Jaipur.jpg"
                title="Jaipur"
                />
            </div> 
            <div className='home__section'>
            <Card 
                src="https://static.toiimg.com/photo/msid-29660416,width-96,height-65.cms"
                title="Kolkata"
            />
            <Card 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/1200px-Munnar_hillstation_kerala.jpg"
                title="Munnar"
            />
            <Card 
                src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/07/Goa.jpg"
                title="Goa"
            />
            </div>
            <div className='home__section'>
            <Card 
                src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_154851008_20200123162547_20200123162603.png"
                title="Bengaluru"
            />
            <Card 
                src="https://media-cdn.tripadvisor.com/media/photo-s/0d/de/f0/eb/backwater-tourism.jpg"
                title="Kochi"
            />
            <Card 
                src="https://images.thrillophilia.com/image/upload/s--E6bEWglt--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/220/760/original/1586457241_Tiger_Hill.jpg.jpg?1586457241"
                title="Darjeeling"
            />
            </div>
           </div>

           
        </div>
    )
}

export default Home;