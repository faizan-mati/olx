import { Routes, Route } from "react-router-dom"
import Header from "../component/header/Header"
import Login from "../pages/form/Login"
import Register from "../pages/form/Register"
import Layout from "../pages/Layout/Layout"
import AfterDashboard from "../pages/AfterDashboard/Home/AfterDashboard"
import Dashboard from "../pages/Dashboard/Home/Dashboard"
import Post from "../pages/form/Post"
import MyAdd from "../pages/Myadd/MyAdd"
import ProductDetail from "../pages/productDetail/ProductDetail"

function Router() {



    return (
        <div>


            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/register/login" element={<Login />} />
                    <Route path="/myadd" element={<MyAdd />} />
                    <Route path="/productdetail/:docid" element={<ProductDetail />} />
                    <Route path="/afterdashboard/productdetail/:docid" element={<ProductDetail />} />
                    <Route path="/myadd/productdetail/:docid" element={<ProductDetail />} />


                    <Route path="/afterdashboard" element={<AfterDashboard />} />
                    <Route path="/post" element={<Post />} />

                </Route>
            </Routes>



        </div>
    )
}

export default Router