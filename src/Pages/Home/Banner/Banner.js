import React from 'react';



import img1 from '../../../assets/image/banner1.jpg'
import img2 from '../../../assets/image/banner2.jpg'
import img3 from '../../../assets/image/banner3.jpg'
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        previous: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        previous: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        previous: 2,
        id: 3,
        next: 1
    }
]
const Banner = () => {
    return (
        <div className="carousel w-full pb-10 max-w-screen-xl mx-auto rounded-3xl mt-6">
        {
            bannerData.map(slide => <BannerItem
                key={slide.id}
                slide={slide}
            ></BannerItem>)
        }
        
    </div>
    );
};

export default Banner;