import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import bannar from "../../../assets/bannar.webp";
import play from "../../../assets/play.png";

const About = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="about">
      <div className="mycontainer">
        <div className="wrapper grid grid-cols-2 gap-7 items-center">
          <div className="wrapperLeft">
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
              />

              <div className="poster relative">
                <img
                  className="w-full h-[400px] object-cover"
                  src={bannar}
                  alt=""
                />
                <button
                  className="btn-primary absolute playbutton"
                  onClick={() => setOpen(true)}
                >
                  <img className="w-[70px]" src={play} alt="" />
                </button>
              </div>
            </React.Fragment>
          </div>
          <div className="wrapperRight">
            <h2>About Us</h2>
            <p>
              Welcome to SportFusion, where we combine the excitement of games
              with the joy of learning. Our summer programs are designed to
              teach people of all ages the benefits of sports and teamwork. With
              experienced instructors and a variety of sports to choose from, we
              create a fun and educational environment for everyone. Join us at
              SportFusion this summer and experience the fusion of fun and
              learning like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
