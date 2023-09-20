/* eslint-disable no-unused-vars */
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import React, { PureComponent } from 'react';
import { PieChart, Pie, } from 'recharts';
const Chart = () => {

    const students = [
        { id: 1, name: "John", math_marks: 85, physics_marks: 75, english_marks: 90 },
        { id: 2, name: "Alice", math_marks: 2, physics_marks: 88, english_marks: 85 },
        { id: 3, name: "Bob", math_marks: 92, physics_marks: 91, english_marks: 94 },
        { id: 4, name: "Emily", math_marks: 75, physics_marks: 80, english_marks: 78 },
        { id: 5, name: "Michael", math_marks: 88, physics_marks: 2, english_marks: 86 },
        { id: 6, name: "Sophia", math_marks: 95, physics_marks: 93, english_marks: 96 },
        { id: 7, name: "Daniel", math_marks: 70, physics_marks: 72, english_marks: 75 },
        { id: 8, name: "Olivia", math_marks: 89, physics_marks: 92, english_marks: 88 },
        { id: 9, name: "William", math_marks: 93, physics_marks: 95, english_marks: 2 },
        { id: 10, name: "Ella", math_marks: 82, physics_marks: 87, english_marks: 80 }
    ]
    return (
        <><div>
            <LineChart width={600} height={300} data={students}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="math_marks" stroke="#8884d8" />
                <Line dataKey={'physics_marks'} stroke="red"></Line>
                <Line dataKey={'english_marks'} stroke="yellow"></Line>
            </LineChart>
        </div>
            <div>

                <PieChart width={400} height={400}>
                    <Pie data={students} dataKey={'physics_marks'} cx="50%" cy="50%" outerRadius={60} fill="red" />
                    <Pie data={students} dataKey={'english_marks'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="blue" label />

                </PieChart>

            </div></>
    );
};

export default Chart;