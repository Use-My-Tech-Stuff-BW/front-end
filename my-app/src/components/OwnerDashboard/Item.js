import React from 'react';


const Item = (props) => {
    const item = props.data

    return (
        <div>
            <div className='card'>
                <div class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden mr-6">
                    <img alt="moto" src={item.image_url} class="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;