import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';


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
            <h1 className='title'>My Items</h1>
            <div className='card'>
                {
                    item.map(item => {
                        return (
                            <Item key={item.id} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemCards;