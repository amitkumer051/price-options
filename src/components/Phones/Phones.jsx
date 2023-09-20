import { useEffect, useState } from "react";
import axios from "axios"
import { BarChart, Bar,  XAxis, YAxis,  Tooltip} from 'recharts';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                setPhones(phoneWithFakeData);
            })
    }, [])
    return (
        <div>
            <h2 className="text-3xl">Phone: {phones.length}</h2>
            <div>
                <BarChart width={1000} height={400} data={phones}>
                    <Bar dataKey="price" fill="red" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip> 
                </BarChart>
            </div>
        </div>
    );
};

export default Phones;