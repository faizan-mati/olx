import React from 'react'
import { useState, useEffect } from 'react'
import './MyAdd.css'
// import { Params } from 'react-router-dom'
import { getCurrentUserUID, getData } from '../../config/Firebase'
import { useNavigate } from 'react-router-dom'


const MyAdd = () => {

  const [userData, setUserData] = useState()

  const uid = getCurrentUserUID()
  const navigate = useNavigate()

  // const param = param()
  // const data = getData(uid)
  // console.log("getdata" , data)

  const getUserData = async () => {
    const res = await getData(uid)
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

  useEffect(() => {
    getUserData()
  }, [])

  // console.log("user data post : ", userData)




  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }


  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>MY ADDS</h1>

      <div className="container" id="container">
        <div className="row">
          {userData &&
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


    </div>









    // </div>
  )
}

export default MyAdd
