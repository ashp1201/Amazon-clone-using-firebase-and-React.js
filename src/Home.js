import React,{useState} from "react";
import './Home.css';
import h1 from './assets/h1.jpg'
import h2 from './assets/h2.jpg'
import h3 from './assets/h3.jpg'
import h4 from './assets/h4.jpg'
import h5 from './assets/h5.jpg'
import h6 from './assets/h6.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Product from './Product';



function Home() {
    const [currentimgindex,setCurrrentimgindex] = useState(0);
    const arr_img_home=[h1,h2,h3,h4,h5,h6];
    
    
    
    const prevImg= () => {
        setCurrrentimgindex((prevInd)=>(prevInd +1) % arr_img_home.length)
    }
    
    const nextImg = () => {
        setCurrrentimgindex((prevInd)=>(prevInd-1 + arr_img_home.length) % arr_img_home.length);
    }
    return (

    <div className="home">
        <div className="home_container">
            <ArrowBackIosIcon className="Arrow_Backward" onClick={prevImg} />
            <img className='home_image' src={arr_img_home[currentimgindex]} alt=""  />
            <ArrowForwardIosIcon className='Arrow_Forward' onClick={nextImg} />
        </div>
            <div className="home_row">
                <Product id={12313322} title="Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success " price={29.99} image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg'  rating={4}
                />
                <Product id={12313742} title="Amazon Brand - Symactive High Performance Heavy Duty 2 Feet Unfilled Punching Bag with Rust Proof Stainless Steel Hanging Chain, SRF Material, Black" price={10.99} image='https://m.media-amazon.com/images/I/31z8lptYpBL.AC_SX250.jpg'  rating={5}
                />
            </div>

            <div className="home_row">
            <Product id={31453742} title="Sparx-Women's Velvet Basic Flip-Flops and House Slippers" price={9.90} image='https://m.media-amazon.com/images/I/71-JrD05RaL._AC_UL600_FMwebp_QL65_.jpg'  rating={4}
                />
            <Product id={34338993} title="Derien Glass Handmade Multicolor Floral Mosaic Table Lamp (16 x 18 cm)" price={80.9} image='https://m.media-amazon.com/images/I/91JUVRAIFYL._AC_SY200_.jpg'  rating={5}
                />
                <Product id={4934023} title="Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W " price={1229.99} image='https://images-eu.ssl-images-amazon.com/images/I/8104evx11QL._AC_UL160_SR160,160_.jpg'  rating={4}
                />
                </div>

            <div className="home_row">
            <Product id={380239202} title="Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model" price={396.99} image='https://m.media-amazon.com/images/I/61cX0BQZj8L._AC_UY327_FMwebp_QL65_.jpg' rating={5}
                /> 
            </div>
        </div>
)
}

export default Home
