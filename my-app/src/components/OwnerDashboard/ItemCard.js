import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemCard = () => {
    const [item, setItem] = useState('')
    const [ items ] = useState([])

    useEffect(()=>{
        axios.get('https://usemytechstuff3.herokuapp.com/api/products')
            .then(res=>{
                console.log("AXIOS - GET RESPONSE: ", res)
                setItem(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, []);

    return (
        <div>
            <h1 className='title'>My Items</h1>
            
            <div className='card'>
                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6">
                    <img alt="moto" src="https://www.tailwind-kit.com/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/>
                    <div class="w-4/6">
                        <p class="text-gray-800 text-lg font-medium mb-2">
                            Avg
                        </p>
                        <p class="text-gray-400 text-xs">
                            Detail is not an obsession, it is the very essence of perfection.
                        </p>
                        <p class="text-indigo-500 text-xl font-medium">
                            $399
                        </p>
                    </div>
                </div>
                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6">
                    <img alt="moto" src="https://www.tailwind-kit.com/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/>
                    <div class="w-4/6">
                        <p class="text-gray-800 text-lg font-medium mb-2">
                            Avg
                        </p>
                        <p class="text-gray-400 text-xs">
                            Detail is not an obsession, it is the very essence of perfection.
                        </p>
                        <p class="text-indigo-500 text-xl font-medium">
                            $399
                        </p>
                    </div>
                </div>
                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6">
                    <img alt="moto" src="https://www.tailwind-kit.com/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/>
                    <div class="w-4/6">
                        <p class="text-gray-800 text-lg font-medium mb-2">
                            Avg
                        </p>
                        <p class="text-gray-400 text-xs">
                            Detail is not an obsession, it is the very essence of perfection.
                        </p>
                        <p class="text-indigo-500 text-xl font-medium">
                            $399
                        </p>
                    </div>
                </div>
                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6">
                    <img alt="moto" src="https://www.tailwind-kit.com/images/object/1.png" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/>
                    <div class="w-4/6">
                        <p class="text-gray-800 text-lg font-medium mb-2">
                            Avg
                        </p>
                        <p class="text-gray-400 text-xs">
                            Detail is not an obsession, it is the very essence of perfection.
                        </p>
                        <p class="text-indigo-500 text-xl font-medium">
                            $399
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;