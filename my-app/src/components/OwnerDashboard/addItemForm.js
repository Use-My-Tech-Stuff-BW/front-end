import React, { useEffect, useState } from 'react';
import axios from 'axios';


const NewItemForm = () => {
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        price: ''
    })

    useEffect(() => {
        axios.get('https://usemytechstuff3.herokuapp.com/api/products')
            .then(res => {
                console.log("AXIOS - GET RESPONSE: ", res)
                setNewItem(res.data)
            })
            .catch(err => console.log('Failed to retrieve data', err));
    }, []);

    const handleChange = (e) => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://usemytechstuff3.herokuapp.com/api/products', newItem)
            .then(res => {
                console.log("AXIOS - POST RESPONSE: ", res)
                setNewItem(res.data);
            })
            .catch(err => console.log('Failed to add item', err));
    }

    const { name, description, price } = newItem;
    return (
        <div className='form'>
            <form onSubmit={handleSubmit} className='mt-4'> 
                <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                    <div class="px-4 py-8 sm:px-10">
                        <div class="relative mt-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300">
                                </div>
                            </div>
                            <div class="relative flex justify-center text-sm leading-5">
                                <span class="px-2 text-gray-500 bg-white">
                                    New Item Form
                                </span>
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class="w-full space-y-6">
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input
                                        name='name' 
                                        type="text" 
                                        value={name}
                                        onChange={handleChange}
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Item Name" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input
                                        name='description' 
                                        type="text" 
                                        value={description}
                                        onChange={handleChange}
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                        placeholder="Item Description" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input 
                                        name='price'
                                        type="text" 
                                        value={price} 
                                        onChange={handleChange}
                                        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                        placeholder="$ Item Price" />
                                    </div>
                                </div>
                                <div>
                                    <span class="block w-full rounded-md shadow-sm">
                                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Submit
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                        <p class="text-xs leading-5 text-gray-500">
                            You can add an image from your 'My Items' page
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewItemForm;