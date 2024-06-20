import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUsers } from './hooks/useGetUsers';

const SingleUser = () => {
  const { userId } = useParams();
  const { getSingleUser, singleUser } = useGetUsers();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        await getSingleUser(userId);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching the user.');
        setLoading(false);
      }
    };
    fetchSingleUser();
  }, [userId, getSingleUser]);

  if (loading) {
    return <h2>Loading user...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <img src={singleUser.image} alt={`${singleUser.firstName} ${singleUser.lastName} profile`} />
      <h2>{`${singleUser.firstName} ${singleUser.lastName}`}</h2>
      <p>Age: {singleUser.age}</p>
      <p>Gender: {singleUser.gender}</p>
      <p>Address: {singleUser.address}</p>
    </div>
  );
};

export default SingleUser;
