import React, { useState, useEffect } from 'react';
import './CardApi.css';
import { getAllData } from '../../../config/Firebase';
import { useNavigate } from 'react-router-dom';

const CardApi = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(json => setData(json.slice(0, 40 )));
  // }, []);

  // const truncateText = (text, numWords) => {
  //   const words = text.split(' ');
  //   if (words.length <= numWords) {
  //     return text;
  //   }
  //   return words.slice(0, numWords).join(' ') + '...';
  // };


  const [userData, setUserData] = useState()


  const navigate = useNavigate()

  const getUserData = async () => {
    const res = await getAllData()
    // console.log("Dashboard data res:", res)
    if (res.status === 200) {
      // console.log("if user data res:", res)
      setUserData(res.data)
    }
    else {
      // console.log("else user data res:", res)
      setUserData(null)
    }
  }

  // console.log("user data all dashboard : ", userData)
  // console.log("user data all dashboard docid : ", userData.docid)


  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }


  useEffect(() => {
    getUserData()
  }, [])


  return (

    <div className="container-card">
    <div className="row">
      {userData &&
        Array.isArray(userData) &&
        userData.map((user, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <div className="card" style={{ width: "15rem" }} onClick={() => {
              navigate(`productdetail/${user.docid}`)
            }}>
              <img className="apiImage" src={user.picture} alt="Profile Picture" />
              <div className="card-body">
                <h4 className="card-title">  {truncateText(user.name, 10)}</h4>
                <p className="card-text"> {truncateText(user.description, 50)}</p>
                <p className="card-text"> {user.price} RS</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  
  );
};

export default CardApi;
