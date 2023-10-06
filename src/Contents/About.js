import React from "react";
import "../Contents/About.css";
export const About = () => {

    const handlebtn=()=>{
        console.log("hi")
    }
  return (
    <div className="container">
      <center>
        <h1 style={{ padding: "20px" }}>About US</h1>
      </center>
      <div className="row">
        <div className="left">
          <h4 style={{ color: "#479ed8" }}>Project 1</h4>
          <p className="p-data">
            Pede massa eiusmod incididunt molestie pede nostra corporis facere
            natoque risus error. Diam diam, curae, nostrud aptent vel, quia
            aliquet rerum tellus facere odit cillum felis aptent tempus
            distinctio proin posuere gravida sem occaecat reiciendis minima
            venenatis mollis itaque mauris! Unde primis, soluta eius. Dignissim
            morbi quisque dictumst! Sagittis rutrum eros. Proident inceptos,
            risus voluptatibus, elementum! Donec officia! Excepturi fuga. Magna
            praesent. Neque quasi occaecat irure sociosqu anim duis cillum
            nesciunt lacus illo facilis
          </p>
        </div>
        <div className="right">
          <h4 style={{ color: "#479ed8" }}>Project 1</h4>
          <p className="p-data">
            Pede massa eiusmod incididunt molestie pede nostra corporis facere
            natoque risus error. Diam diam, curae, nostrud aptent vel, quia
            aliquet rerum tellus facere odit cillum felis aptent tempus
            distinctio proin posuere gravida sem occaecat reiciendis minima
            venenatis mollis itaque mauris! Unde primis, soluta eius. Dignissim
            morbi quisque dictumst! Sagittis rutrum eros. Proident inceptos,
            risus voluptatibus, elementum! Donec officia! Excepturi fuga. Magna
            praesent. Neque quasi occaecat irure sociosqu anim duis cillum
            nesciunt lacus illo facilis
          </p>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <h4 style={{ color: "#479ed8" }}>Project 1</h4>
          <p className="p-data">
            Pede massa eiusmod incididunt molestie pede nostra corporis facere
            natoque risus error. Diam diam, curae, nostrud aptent vel, quia
            aliquet rerum tellus facere odit cillum felis aptent tempus
            distinctio proin posuere gravida sem occaecat reiciendis minima
            venenatis mollis itaque mauris! Unde primis, soluta eius. Dignissim
            morbi quisque dictumst! Sagittis rutrum eros. Proident inceptos,
            risus voluptatibus, elementum! Donec officia! Excepturi fuga. Magna
            praesent. Neque quasi occaecat irure sociosqu anim duis cillum
            nesciunt lacus illo facilis
          </p>
        </div>
        <div className="right">
          <h4 style={{ color: "#479ed8" }}>Project 1</h4>
          <p className="p-data">
            Pede massa eiusmod incididunt molestie pede nostra corporis facere
            natoque risus error. Diam diam, curae, nostrud aptent vel, quia
            aliquet rerum tellus facere odit cillum felis aptent tempus
            distinctio proin posuere gravida sem occaecat reiciendis minima
            venenatis mollis itaque mauris! Unde primis, soluta eius. Dignissim
            morbi quisque dictumst! Sagittis rutrum eros. Proident inceptos,
            risus voluptatibus, elementum! Donec officia! Excepturi fuga. Magna
            praesent. Neque quasi occaecat irure sociosqu anim duis cillum
            nesciunt lacus illo facilis
          </p>
        </div>
      </div>
        <button className="more-btn center" onClick={handlebtn}>Learn more About our projects </button>
        
    </div>
  );
};
