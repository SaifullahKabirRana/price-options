import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data));

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                });
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData);
            })

    }, [])


    return (
        <div className='-mt-20  md:mt-20'>
            <h2 className='text-3xl text-center '>Phones: {phones.length}</h2>
            
                <div className='flex justify-center -mt-20 md:mt-8  w-[90%] md:w-full'>
                <BarChart width={700} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
                </div>
           
        </div>
    );
};

Phones.propTypes = {

};

export default Phones;