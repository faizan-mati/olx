import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import { Outlet } from 'react-router-dom'
import AfterHeader from '../../component/header/AfterHeasder'
import { useState, useEffect } from 'react'
import { auth } from '../../config/Firebase'
import { onAuthStateChanged } from 'firebase/auth'


const Layout = (props) => {

    const [userData, setUserData] = useState(null)
    // const [screen, setScreen] = useState()


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                var uid = user.uid;
                setUserData(uid)
                console.log("user login")
                // setScreen("dashboard")
            } else {
                setUserData(null)
                console.log("user log out")
                // setScreen("signup")

            }
        });

    }, [])

// console.log("layout uid : ", userData)

    return (
        <div>

            {
                userData ?
                    <div>
                        
                        <div>
                        <AfterHeader />
                        </div>
                        <div>
                            <Outlet />
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>

                    :

                    <div>
                        <div>
                            <Header />
                        </div>
                        <div>
                            <Outlet />
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
            }

        </div>
    )
}

export default Layout