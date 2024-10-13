import React, { useEffect, useState } from 'react';
import './members.css';
import '../../index.css'
import 'animate.css';
import BrandLogo from '../../components/Hero/Header/BrandLogo';
import Footer from '../../components/Footer/Footer';
const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/allusers/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className='Page'>
      <BrandLogo />
        <div className="blur member-page-blur"></div>
        <div className="members_page">
        <div className="members-container">
      <h1 className="title animate__animated animate__backInDown">Our Members</h1>
      <div className="members-grid">
        {members.map(member => (
          <div className="member-card " key={member.id}>
            <div className="member-info">
              <h2 className="member-name">{member.first_name} {member.last_name}</h2>
              <p className="member-email">{member.email}</p>
              {
                member.dateofbirth
              }
              {member.date_of_birth && (
                <p className="member-age">Age: {calculateAge(member.date_of_birth)}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
        <Footer />
    </div>

  );
};

export default Members;




// import React , {useState, useEffect} from 'react';
// import './members.css';
// import axios from 'axios';
// const Members = () => {
//     const[data, setData]=useState([])
//     useEffect(()=>{
//         axios.get("http://127.0.0.1:8000/allusers/").then((res)=>
//             setData(res.data))
//     }, [])
//   return (
//     <div>Members</div>
//   )
// }

// export default Members