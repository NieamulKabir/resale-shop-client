import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaLocationArrow } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const ProductCategory = () => {
    const { user } = useContext(AuthContext);
    const categoryItem = useLoaderData();


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const customer = user?.displayName
        const email = user?.email;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;


        const order = {
            product_name: name,
            customer,
            email,
            price,
            location,
            phone
        }
        console.log(order);
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className=' max-w-screen-xl mx-auto'>

            <h1 className='text-4xl font-bold text-center mt-8'> {categoryItem?.category}</h1>
            {/* <img src={categoryItem?.image} alt="" /> */}
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto rounded-2xl pt-8 pb-16'>
                {
                    categoryItem?.sub_category?.map(subCategory =>
                        <div
                            key={subCategory?._id}
                        >
                            <div className="card card-compact  bg-base-100 shadow-xl">
                                <figure><img src={subCategory?.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{subCategory?.name}</h2>
                                    <div className='flex justify-end'>
                                        <p className='flex items-center'><FaLocationArrow className='mr-2'></FaLocationArrow> {subCategory?.location}</p>
                                        <p>Post Date: {subCategory?.Post_date}</p>

                                    </div>
                                    <div className='font-bold text-lg'>
                                        <p className=''>Resale Price : {subCategory?.resale_price} Taka</p>
                                        <p>Original Price : <span className=''>{subCategory?.original_price} Taka</span></p>

                                    </div>
                                    <p>Used Time : {subCategory?.year_of_use}</p>
                                    <p>Seller Name : {subCategory?.seller_name}</p>
                                    <form onSubmit={handleBooking} >
                                        <div className="card-actions justify-end">
                                            {/* The button to open modal */}


                                            {/* Put this part before </body> tag */}
                                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                            <div className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box relative">

                                                    <input name="name" type="text" defaultValue={subCategory?.name} className="input w-full input-bordered my-1 mt-6" />
                                                    <input name="user" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered my-1" />
                                                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered my-1" />

                                                    <input name="price" type="price" defaultValue={subCategory?.resale_price} className="input w-full input-bordered my-1" />
                                                    <input name="location" type="location" placeholder="location" className="input w-full input-bordered my-1" />
                                                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered my-1" />
                                                    <br />
                                                    <input className='btn w-[40%] absolute right-[30%] mt-4' type="submit" value="Submit" /> <br /> 

                                                    <div className="modal-action mb-4">
                                                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <label htmlFor="my-modal-6" className="btn btn-primary">Buy Now</label>

                                        </div>
                                    </form>
                                </div>
                            </div>



                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default ProductCategory;