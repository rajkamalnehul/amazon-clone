/** @format */

import React, { useState } from "react";
import "./Home.css";
import Product from "./Product.js";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  //const [index, setIndex] = useState(0);

  //const handleSelect = (selectedIndex, e) => {
  //  setIndex(selectedIndex);
  //};

  return (
    <div className="home">
      <div className="home_container">
        <Carousel className="home-carousel">
          <Carousel.Item>
            <img
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Yogurt/24thNov_Gw/D18788625_IN_WLME_OPPO_Family_DesktopTallHero_1500x600_2._CB415835417_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Oct/GW/DesktopHero_1500x600._CB402740210_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/family/17th-Nov/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600_2._CB415252218_.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="home_row">
        <Product
          id={0}
          tittle="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
          image="https://images-eu.ssl-images-amazon.com/images/I/51usZonCf7L._AC_US218_FMwebp_QL70_.jpg"
          price={20.2}
          rating={4}
        />
        <Product
          id={1}
          tittle="Samsung 125cm(50 Inches) Wondertainment Series Ultra HD LED Smart TV(Titan Gray) "
          image="https://m.media-amazon.com/images/I/71CMPTwja5L._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
        <Product
          id={2}
          tittle="Onida 108 cm (43 Inches) Fire TV Edition Full HD Smart IPS LED TV 43FIF (Black) (2019 Model)"
          image="https://images-eu.ssl-images-amazon.com/images/I/51eyH19iNFL._AC_US218_FMwebp_QL70_.jpg"
          price={20.2}
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id={3}
          tittle="iBall Musi Cube X1 Portable Bluetooth Speaker"
          image="https://m.media-amazon.com/images/I/61gDxNyYOEL._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
        <Product
          id={4}
          tittle="JBL GO Portable Wireless Bluetooth Speaker with Mic (Teal)"
          image="https://m.media-amazon.com/images/I/817TjAPJjvL._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
        <Product
          id={5}
          tittle="Creative Pebble 2.0 USB-Powered Desktop Speakers"
          image="https://m.media-amazon.com/images/I/31lrbOsJ2qL._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
        <Product
          id={6}
          tittle="Philips Portable Wireless Bluetooth Speaker, Blue"
          image="https://m.media-amazon.com/images/I/71wKZA5Vi8L._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
      </div>
      <div className="home_row">
        <img
          className="add_banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Postlockdown/E-learning/SHF/COOP_banners/v2/_V205954306_IN_Laptops_Study-from-home_WF_Rush_1500x300_2.jpg"
          alt="add banner"
        />
      </div>
      <div className="home_row">
        <Product
          id={7}
          tittle="Dell Inspiron 5300 13.3-inch FHD Laptop (10th Gen i5-10210U/8GB/512GB SSD/Win 10 + MS Office/Intel UHD Graphics)"
          image="https://m.media-amazon.com/images/I/61HYBKhx4BL._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
        <Product
          id={8}
          tittle="Microsoft Surface GO 1-inch Laptop (Gold Processor 4425Y/8GB/128GB SSD/Windows 10 Home in S Mode/Intel UHD 615 Graphics)"
          image="https://m.media-amazon.com/images/I/61Ysjm+ObeL._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
        <Product
          id={9}
          tittle="Dell XPS 9370 13.3-inch FHD Display Thin & Light Laptop (8th Gen i7-8550U/16GB/512GB SSD/Win 10 + MS Office/Integrated Graphics)"
          image="https://m.media-amazon.com/images/I/61fl1y0mHgL._AC_UY218_.jpg"
          price={20.2}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
