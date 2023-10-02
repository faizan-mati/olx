import React from 'react'
import { useState, useEffect } from 'react'
// import { post } from '../firebase/firebase'
// import Card from '../card/Card'
import './post.css'
import { getCurrentUserUID, post, user } from '../../config/Firebase'


const Post = (props) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [profilePix, setProfilePix] = useState()
    const [screen, setScreen] = useState("post")

    const uid = getCurrentUserUID()

      //  const uid =  user.uid
        // console.log("uid post :",  uid)

    // console.log("post ke uid ", props.uid);

    const submit = () => {
        // console.log("submit uid", uid)
        post(uid, name, description, price, profilePix)
        // setScreen("next")
    }

    return (
        <div>
            {screen == "post" &&
             <div className="form-container">
             <label htmlFor="name" className='label'>Name</label>
             <input
             className='input'
               type="text"
               id="name"
               placeholder="Name"
               required
               value={name}
               onChange={(e) => {
                 setName(e.target.value);
               }}
             />
             <label htmlFor="description"  className='label'>Description</label>
             <input
               className='input'
               type="text"
               id="description"
               placeholder="Description"
               required
               value={description}
               onChange={(e) => {
                 setDescription(e.target.value);
               }}
             />
             <label htmlFor="price"  className='label' >Price</label>
             <input
               className='input'
               type="text"
               id="price"
               placeholder="Price"
               required
               value={price}
               onChange={(e) => {
                 setPrice(e.target.value);
               }}
             />
             <input
               className='input'
               onChange={(e) => {
                 setProfilePix(e.target.files);
               }}
               type="file"
             />
             <div className="button-container">
               <button className='registerBtn4' onClick={submit}>POST</button>
             </div>
           </div>
           
            }
            {/* {
                screen === "next" && (
                    <div>
                        {userData.map((user, index) => (
                            <div className="card" key={index}>
                                <img src={user.imagePix} alt="Profile Picture" />
                                <h3>Name: {user.name}</h3>
                                <p>Description: {user.email}</p>
                                <p>Price: {user.password}</p>
                            </div>
                        ))}
                    </div>
                )
            } */}
        </div>
    )
}


export default Post






















// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { getCurrentUserUID, post, user } from '../../config/Firebase'

// const Post = (props) => {

//     const [title, setTitle] = useState("ABC")
//     const [description, setDescription] = useState("this is very good item")
//     const [price, setPrice] = useState("2,000")
//     const [profilePix, setProfilePix] = useState()
//     // const [uid, setUid] = useState()

//     // useEffect(()=>{
//     //     const user = getCurrentUserUID()
//     //     setUid(user)

//     // },[])
    
//     const uid = getCurrentUserUID()

//     // const uid =  user.uid
//     console.log("uid post :",  uid)

//     const submit = () => {
//         console.log("submit ", uid , title , description, price, profilePix)
//         post(uid, title , description, price, profilePix)
//     //     // setScreen("next")
//     }

//   return (
//     <div>
//         <div>
//                 <h2>CREATE A NEW ADD</h2>
//                 <div class="beautiful-form"
//                 // onSubmit={handleSubmit}
//                 >
//                   <div>
//                     <label className='registerLabel' id='postLabel' >Title:</label><br />
//                     <input
//                       className='registerInpur'
//                       // className='textarea'
//                       id='postinput'
//                       type="text"
//                       name="title"
//                       required
//                       value={title}
//                       onChange={(e) => {
//                         setTitle(e.target.value)
//                       }}
//                     />
                
//                     <label className='registerLabel'>Description:</label><br />
//                     <textarea
//                       name="description"
//                       id='postinput'
//                       className='registerInpur'
//                       required
//                       value={description}
//                       onChange={(e) => {
//                         setDescription(e.target.value)
//                       }}
//                     ></textarea>
                 
//                     <label className='registerLabel' id='postLabel' >Price:</label> <br />
//                     <input
//                       id='postinput'
//                       className='registerInpur'
//                       type="text"
//                       name="price"
//                       value={price}
//                       required
//                       onChange={(e) => {
//                         setPrice(e.target.value)
//                       }}
//                     />
                
//                     <label className='registerLabel' id='postLabel' >Image:</label><br />
//                     <input
//                         onChange={(e) => {
//                             setProfilePix(e.target.files)
//                             console.log("file ", e)
//                         }}
//                         type="file"
//                     />
                
//                     <button className='registerBtn4' 
//                      onClick={ submit()} >POST</button>
//                   </div>
//                 </div>
//               </div>
//     </div>
//   )
// }

// export default Post