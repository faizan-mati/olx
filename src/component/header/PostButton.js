import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './AfterHeader.css'
import { useState } from 'react';
import { FaTimes, } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const PostButton = (props) => {

  const [showPostForm, setShowPostForm] = useState(false);
  // const [showGmailOption, setShowGmailOption] = useState(false);
  const [title, setTitle] = useState("ABC")
  const [description, setDescription] = useState("this is very good item")
  const [price, setPrice] = useState("2,000")
  const [profilePix, setProfilePix] = useState()

const navigate = useNavigate()

  // const togglePostForm = () => {
  //   setShowPostForm(!showPostForm);
  // };
  // const handleCancel = () => {
  //   setShowPostForm(false);
  // };

  return (
    <div>
      <button className='circle-button' onClick={()=>{
        // togglePostForm
        navigate("/post")
        }}>
        POST
      </button>

      {/* {showPostForm && (
        <div className="center-container">
          <div className="gmail-option scrollable">
            <div className="gmail-option">
              <div className="cancel-icon" onClick={handleCancel}>
                <FaTimes style={{ position: 'fixed' }} />
              </div>
              <div>
                <h2>CREATE A NEW ADD</h2>
                <form class="beautiful-form"
                // onSubmit={handleSubmit}
                >
                  <div>
                    <label className='registerLabel' id='postLabel' >Title:</label><br />
                    <input
                      className='registerInpur'
                      // className='textarea'
                      id='postinput'
                      type="text"
                      name="title"
                      required
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                    />
                  </div>
                  <div>
                    <label className='registerLabel'>Description:</label><br />
                    <textarea
                      name="description"
                      id='postinput'
                      className='registerInpur'
                      required
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    ></textarea>
                  </div>
                  <div>
                    <label className='registerLabel' id='postLabel' >Price:</label> <br />
                    <input
                      id='postinput'
                      className='registerInpur'
                      type="text"
                      name="price"
                      value={price}
                      required
                      onChange={(e) => {
                        setPrice(e.target.value)
                      }}
                    />
                  </div>
                  <div>
                    <label className='registerLabel' id='postLabel' >Image:</label><br />
                    <input
                      type="file"
                                         
                    />
                  </div>
                  <div>
                    <button className='registerBtn4' type="submit" >POST</button>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>

      )} */}
    </div>
  );
}


export default PostButton