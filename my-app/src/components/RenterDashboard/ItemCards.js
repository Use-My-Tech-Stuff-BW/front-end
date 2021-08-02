import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemCards = (props) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        axios.get('https://usemytechstuff3.herokuapp.com/api/products')
            .then(res => {
                console.log("AXIOS - GET RESPONSE: ", res)
                setItem(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, []);


    return (
        <div>
            <div className='card'>
                {
                    item.map(item => {
                        return (
                                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6 mt-12">
                                    <img alt="moto" src={item.image_url} class="absolute -right-20 -bottom-8 h-40 w-40 mb-4" />
                                    <div class="w-4/6">
                                        <p class="text-gray-800 text-lg font-medium mb-2">
                                            {item.item_name}
                                        </p>
                                        <p class="text-gray-400 text-xs">
                                            {item.item_description}
                                        </p>
                                        <p class="text-indigo-500 text-xl font-medium">
                                            {item.price}
                                        </p>
                                        <div>
                                            <span class="block w-full rounded-md shadow-sm mt-4" >
                                                <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Rent Item
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemCards;

{/* <div className='card'>
                                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6">
                                    <img alt="moto" src={item.image_url} class="absolute -right-20 -bottom-8 h-40 w-40 mb-4" />
                                    <div class="w-4/6">
                                        <p class="text-gray-800 text-lg font-medium mb-2">
                                            {item.item_name}
                                        </p>
                                        <p class="text-gray-400 text-xs">
                                            {item.item_description}
                                        </p>
                                        <p class="text-indigo-500 text-xl font-medium">
                                            {item.price}
                                        </p>
                                        <div>
                                            <span class="block w-full rounded-md shadow-sm mt-4" >
                                                <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Rent Item
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}