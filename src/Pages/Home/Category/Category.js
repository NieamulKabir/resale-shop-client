import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Category = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>Select Your Favourite One</h1>
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto rounded-2xl pt-8 pb-16'>
                {
                    categories?.map(category =>

                        <div key={category._id}
                            className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={category.image} alt="camera" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{category.category}</h2>
                                <div className="card-actions flex justify-end">
                                    <NavLink to={`/product/${category._id}`}>
                                        <button className=""><FaArrowAltCircleRight className='text-5xl'></FaArrowAltCircleRight></button>
                                    </NavLink>
                                  
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;