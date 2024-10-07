import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import BannerData from '../../Helpers/HomePageBanner'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import image1 from '../../Assets/Images/image-000.jpg'; // Update with actual paths
import image2 from '../../Assets/Images/image-001.jpg';
import image3 from '../../Assets/Images/image-002.jpg';
import image4 from '../../Assets/Images/image-003.jpg'; // Update with actual paths
import image5 from '../../Assets/Images/image-004.jpg';
import image6 from '../../Assets/Images/image-005.png';


const imageData = [
    { name: 'Product1', img: image1 },
    { name: 'Product2', img: image2 },
    { name: 'Product3', img: image3 },
    { name: 'Product4', img: image4 },
    { name: 'Product5', img: image5 },
    { name: 'Product6', img: image6 },
  ];
  



const Carousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
    };

    const items = imageData.map((item) => (
        <Link to={`product/type/${item.name.toLowerCase()}`} key={item.name}>
            <div className="item" style={{ marginTop: 10 }}>
                <img 
                    src={item.img} 
                    loading='lazy' 
                    alt={item.name} 
                    style={{ height: '90%', width: '90%', objectFit: 'cover', border: '1px solid black'}} 
                />
            </div>
        </Link>
    ));

    return (
        <AliceCarousel
            animationType="fadeout"
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            touchTracking
            mouseTracking
            disableDotsControls
            autoPlay
            autoPlayInterval={2500}
            responsive={responsive}
        />
    )
}

export default Carousel