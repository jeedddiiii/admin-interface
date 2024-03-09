import React from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function UserDetail() {
  const { id } = useParams();

  // Fetch user data based on the ID from your API or state
  // For simplicity, I'm using hard-coded data
  const user = { id: Number(id), username: `User ${id}`, details: 'Additional details about the user.' };

  // Sample data for the bar chart
  const chartData = [
    { name: 'Happy', times: 100,},
    { name: 'Natural', times: 300 },
    { name: 'Sad', times: 1000 },
    { name: 'Angry', times: 400 },
    
  ];

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <strong>User ID:</strong> {user.id}
      </div>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Details:</strong> {user.details}
      </div>
      <div>
        <h3>Bar Chart</h3>
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="times" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default UserDetail;
