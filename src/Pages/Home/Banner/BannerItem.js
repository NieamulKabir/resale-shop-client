import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, previous, next} = slide;
    return (
        
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full h-full rounded-3xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 md:top-[35%]">
                    <h1 className='text-lg md:text-6xl font-bold text-white'>
                       Capture Your<br />
                       Beautiful moments <br />
                        
                    </h1>
                </div>
                {/* <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div> */}
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-[60%] lg:top-[60%]">
                    <button className="btn btn-primary text-xs md:text-base mr-5">Buy Now</button>
                   
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${previous}`} className="btn btn-circle ">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;