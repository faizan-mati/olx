import React from 'react'
import Categories from '../../Dashboard/Categroise/Categroise'
import ImageSlider from '../../../component/Adds/Adds';
import SecondAdd from '../../../component/Adds/AddSecond';
import AllCategories from '../../Dashboard/Categroise/AllCategories';
import CardApi from '../../Dashboard/Api/CardApi';
import './AfterDashboard.css'

const AfterDashboard = () => {

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

export default AfterDashboard