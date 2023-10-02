import React from 'react'
import './Categroise.css'

const Categories = () => {
    return (
        <div>
            {/* <div className='categoriesAll'> */}
                <div className='categoriesMain'>
                    <h4 id='categories2' style={{ marginTop: "8px", fontSize: "15px" }}> All Categories</h4>
                    <a className='categories1' href='#'>Mobile Phones</a>
                    <a className='categories1' href='#'>cars</a>
                    <a className='categories1' href='#'>Motorcycles</a>
                    <a className='categories1' href='#'>Houses</a>
                    <a className='categories1' href='#'>TV - Video - Audio</a>
                    <a className='categories1' href='#'>Tablets</a>
                    <a className='categories1' href='#'>Land & Plots</a>

                </div>
            {/* </div> */}
            <hr style={{ borderColor: "#f4f4f4", marginTop: "-5px", border: "2px", backgroundColor: "black" }} />
        </div>
    )
}

export default Categories;
