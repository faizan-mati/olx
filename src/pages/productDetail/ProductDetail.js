import React, { useEffect, useState } from 'react'
import { getSingleAdd } from '../../config/Firebase'
import { useParams } from 'react-router-dom'
import './productDetail.css'

const ProductDetail = () => {
  const [userData, setUserData] = useState()
  const param = useParams()
  // console.log("params", param)

  const getData = async () => {
    const id = param.docid

    const res = await getSingleAdd(id)
    // console.log("single add data :", res)

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
    getData()

  }, [])
  //  console.log("userdata name : ", userData.name)
  //  console.log("userdata pic : ", userData.picture)
  //  console.log("userdata price : ", userData.price)
  //  console.log("userdata des : ", userData.description)


  return (
    <div>
      
      <div>
        {userData ? (
          <div className='detailMain'>
            {/* <div className='container'> */}
              {/* <div className='row'> */}
                {/* <div className='col-lg-6'> */}
                  <img className='detailImg' src={userData.picture} alt="Profile Picture" />
                {/* </div> */}

                {/* <div className='col-lg-6'> */}
                  <div id='detailBody'>
                    <p className='detailName'>Name:<br /><span>{userData.name}</span></p>
                    <p className='detailPrice'>Price:<br /><span>{userData.price} RS</span></p>
                    <p className='detailDescription'>Detail:<br /><span>{userData.description}</span></p>
                  </div>
                </div>
          //     </div>
          //   </div>
          // </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  )
}

export default ProductDetail