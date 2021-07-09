import React from "react";
import {NavLink} from 'react-router-dom'
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import gallery from "../Photo/charli.png";
import gallery1 from "../Photo/man.png";
import gallery2 from "../Photo/kaktus.png";
import gallery3 from "../Photo/duck.png";
import gallery4 from "../Photo/alpenist.png";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="sosial_area">
          <a href="#">
            <span className="dot">&#8226; </span> <AiOutlineInstagram />
            Instagram
          </a>
          <a href="#">
            <span className="dot">&#8226;</span>
            <GrFacebookOption /> Facebook{" "}
          </a>
          <a href="#">
            <span className="dot">&#8226;</span>
            <FiTwitter /> Twitter
          </a>
        </div>

        <div className="banner-content">
          <h1>
            Bir
            <br />
            <span className="red-content"> Peşəkar </span>
            <br />
            Fotoqrofçı
          </h1>
          <p> Hekayəni sözlə danışa bilsəydim,  <p> ozaman yanımda kamera daşımağa ehtiyac olmazdı.© Lewis Hine</p>
            </p>
          {/* <a className="main-btn" href="#">
            view portfolio
          </a> */}
        </div>
      </div>

      <div className="portfolio">
        <div className="area-heading">
          <h3>
            PENTAX
            <span> Yaratdıqları </span>
            
          </h3>

          <p>She'd earth that midst void creeping him above seas.</p>
        </div>

        <div className="alboms">
          <div className="alboms1">
            <NavLink to="add/"><img className="image" src={gallery} /></NavLink>
            <img className="image2" src={gallery2} />
            <img className="image1" src={gallery3} />
          </div>

          <div className="alboms2">
            <img className="image3" src={gallery1} />
            <img src={gallery4} />
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
