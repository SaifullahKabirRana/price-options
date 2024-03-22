import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, CartesianGrid, Tooltip, Legend, Rectangle, Bar, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        { id: 1, name: "Alice Johnson", math: 85, physics: 78, chemistry: 89 },
        { id: 2, name: "Bob Smith", math: 72, physics: 84, chemistry: 75 },
        { id: 3, name: "Charlie Brown", math: 90, physics: 92, chemistry: 88 },
        { id: 4, name: "David Lee", math: 68, physics: 74, chemistry: 72 },
        { id: 5, name: "Emily Davis", math: 78, physics: 88, chemistry: 91 },
        { id: 6, name: "Frank Miller", math: 88, physics: 85, chemistry: 87 },
        { id: 7, name: "Saifullah Kabir", math: 95, physics: 94, chemistry: 98 },
        { id: 8, name: "Henry Taylor", math: 60, physics: 63, chemistry: 67 },
        { id: 9, name: "Ivy Clark", math: 82, physics: 89, chemistry: 85 },
        { id: 10, name: "Jack Harris", math: 75, physics: 78, chemistry: 74 }
    ];


    return (
        <div className='mt-2 md:mt-12 flex justify-center w-[90%] md:w-full'>
            <BarChart className=''
                width={800}
                height={400}
                data={studentMarksData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="math" fill="#8884d8"  />
                <Bar dataKey="physics" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>

        </div>
    );
};

LineChart.propTypes = {

};

export default LineChart;