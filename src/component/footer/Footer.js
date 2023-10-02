import React from 'react'
import './Footer.css'
import DowButton from './DowButton'
import { FaApple, FaGooglePlay, } from 'react-icons/fa';
import { TbBrandAppgallery } from 'react-icons/tb'
import { CiFacebook } from 'react-icons/ci'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import FooterLink from './FooterLink';

const Footer = (props) => {
  return (
    <footer className='footerAll'>
      <div className='footerMain'>


        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12'>

              <div>
                <img className='footerImg' src='https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp' alt='img' />
              </div>

            </div>

            <div className='col-lg-4 col-md-12 col-sm-12'>

              <div className='footerPara'>
                <h3 >TRY THE OLX APP</h3>
                <p className='footerPrah'>Elevate your buying and selling experience with the OLX app  your mobile marketplace companion!</p>
              </div>

            </div>

            <div className='col-lg-4 col-md-12 col-sm-12'>

              <div className='footerBtn'>
                <h4 className='footerApp'>GET YOUR APP TODAY</h4>
                <div style={{ display: "flex" }}>
                  <div>
                    <DowButton
                      name={"Download on the"}
                      names={"App Store"}
                      icone={<FaApple size={20} style={{
                        position: "relative", top: "13px",
                        right: "5px", marginLeft: "5px"
                      }} />}
                    />
                  </div>
                  <div className='hide'>
                    <DowButton
                      name={"EXPLORE IT ON"}
                      names={"AppGallery"}
                      icone={<TbBrandAppgallery size={20} style={{
                        position: "relative", top: "13px",
                        right: "5px", marginLeft: "5px"
                      }} />}
                    />
                  </div>
                  <div>
                    <DowButton
                      name={"GET IT ON"}
                      names={"Google Play"}
                      icone={<FaGooglePlay size={20} style={{
                        position: "relative", top: "13px",
                        right: "5px", marginLeft: "5px"
                      }} />}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <hr className='lineMiddle' />

      <div className='footerMain2'>

        <div className='container'>
          <div className='row'>

            <div className='col-lg-2 col-md-4 col-sm-6'>


              <div>
                <h5 className='footerHead'>POPULAR CATEGORIES</h5>
                <FooterLink name={"Cars"} />
                <FooterLink name={"Flats for rent"} />
                <FooterLink name={"Mobile Phones"} />
                <FooterLink name={"Jobs"} />
              </div>

            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>

              <div>
                <h5 className='footerHead'>TRENDING SEARCHES</h5>
                <FooterLink name={"Bikes"} />
                <FooterLink name={"Watches"} />
                <FooterLink name={"Books"} />
                <FooterLink name={"Dogs"} />
              </div>

            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>


              <div>
                <h5 className='footerHead'>ABOUT US</h5>
                <FooterLink name={"About Dubizzle Group"} />
                <FooterLink name={"Olx Blog"} />
                <FooterLink name={"Contact Us"} />
                <FooterLink name={"OLX for Businesses"} />
              </div>

            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>


              <div className='footerOlx'>
                <h5 className='footerHead'>OLX</h5>
                <FooterLink name={"Help"} />
                <FooterLink name={"Sitemap"} />
                <FooterLink name={"Terms of use"} />
                <FooterLink name={"Privacy Policy"} />
              </div>

            </div>

            <div className='col-lg-2 col-md-4 col-sm-6'>


              <div className='footerbtn2'>
                <h3 className='footerHead2'>FOLLOW US <br />
                  <a href='https://www.facebook.com/profile.php?id=100079673637881'>
                    <CiFacebook size={23} style={{ marginLeft: "10px" }} />
                  </a>
                  <a href='https://twitter.com/BurraqGamming'>
                    <AiFillTwitterCircle size={23} style={{ marginLeft: "10px" }} />
                  </a>
                  <a href='https://www.instagram.com/faizan_mati/'>
                    <AiFillInstagram size={23} style={{ marginLeft: "10px" }} />
                  </a>
                </h3>

                <div className='footerbtn3' style={{ display: "flex", }}>
                  <div>
                    <DowButton
                      name={"Download on the"}
                      names={"App Store"}
                      icone={<FaApple size={20} style={{
                        position: "relative", top: "13px",
                        right: "5px", marginLeft: "5px"
                      }} />}
                    />
                  </div>
                  <div className='hide'>
                    <DowButton
                      name={"EXPLORE IT ON"}
                      names={"AppGallery"}
                      icone={<TbBrandAppgallery size={20} style={{
                        position: "relative", top: "13px",
                        right: "5px", marginLeft: "5px"
                      }} />}
                    />
                  </div>
                  <div>
                    <DowButton
                      name={"GET IT ON"}
                      names={"Google Play"}
                      icone={<FaGooglePlay size={20} style={{
                        position: "relative", top: "13px",
                        right: "5px", marginLeft: "5px"
                      }} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className='myFooter'>
        <h3 style={{ textAlign: "end", marginRight: "20px", paddingTop: "7px" }}>
          CREATED BY FAIZAN
        </h3>
      </div>



    </footer>
  )
}

export default Footer
