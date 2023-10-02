import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Categories from '../Categroise/Categroise'
// import Add from '../../../component/Adds/AddImage'
import ImageSlider from '../../../component/Adds/Adds'
import SecondAdd from '../../../component/Adds/AddSecond'
import AllCategories from '../Categroise/AllCategories'
import CardApi from '../Api/CardApi'
import './Dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate()

    const images = [
        'https://images.olx.com.pk/thumbnails/384062340-800x600.webp',
        'https://images.olx.com.pk/thumbnails/295176473-800x600.webp',
    ];
        
    return (
        <div className='afterDashboardAll'>

            <Categories />
            <ImageSlider images={images} />
            <SecondAdd />
            <AllCategories />
            <CardApi />
            <SecondAdd />

        </div>
    )
}

export default Dashboard;