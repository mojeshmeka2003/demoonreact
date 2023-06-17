import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Product from './Product';


export default function Home() {
    let [ data, setData] = useState([])

    const fetchData = async () => {

            try{
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
            }catch(error){
                console.log(error);
            }

    };


    useEffect(()=>{
        fetchData();
    })


  return (
    <div>
        {
           data.map((ele,index)=>{
                return <Product  title={ele.title} price={ele.price} desc={ele.category} image={ele.image} />
           })
        }
    </div>
  )

}