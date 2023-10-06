import React from "react";
import img from "../assets/enterprise.png";
import "../Contents/Home.css";

export const Home = () => {
  return (
    <div>
      
        <center>
          <h2 style={{ color: "#479ed8",padding:"40px" }}>Welcome to our Enterprices</h2>
        </center>
        <section className="home-section">
        <img className="home-image" src={img} />
        <p className="home-p">
          Pede massa eiusmod incididunt molestie pede nostra corporis facere
          natoque risus error. Diam diam, curae, nostrud aptent vel, quia
          aliquet rerum tellus facere odit cillum felis aptent tempus distinctio
          proin posuere gravida sem occaecat reiciendis minima venenatis mollis
          itaque mauris! Unde primis, soluta eius. Dignissim morbi quisque
          dictumst! Sagittis rutrum eros. Proident inceptos, risus voluptatibus,
          elementum! Donec officia! Excepturi fuga. Magna praesent. Neque quasi
          occaecat irure sociosqu anim duis cillum nesciunt lacus illo facilis
        </p>
      </section>
    </div>
  );
};
