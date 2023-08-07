import React from "react";
import download from "../../../assets/download.jpg";
import { Link } from "react-router-dom";
import playStore from "../../../assets/playstore.png";
import apple from "../../../assets/apple.png";
import { Fade } from "react-awesome-reveal";

const Download = () => {
  return (
    <section id="download">
      <div className="mycontainer">
        <div className="downloadWrapper grid grid-cols-1 md:grid-cols-2 items-center">
          <Fade cascade duration={5000}>
            <div className="downloadLeft">
              <img
                className="block w-full"
                src={download}
                alt="images not founds"
              />
            </div>
          </Fade>
          <Fade cascade duration={10000}>
            <div className="downloadRight text-center md:text-left">
              <div className="downloadHeading">
                <h2 className="text-4xl font-semibold">
                  Download Our Mobile App
                </h2>
                <p className="my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, consectetur et nihil, fugiat aliquam facilis
                  suscipit officia doloribus tenetur nam unde fuga placeat!
                  Deleniti illo praesentium alias, a aliquam similique.
                </p>
                <ul>
                  <li className="inline-block">
                    <Link className="block" to="#">
                      <img
                        className="block w-[150px] h-[45px] md:w-[240px] md:h-[60px] object-cover rounded-md"
                        src={playStore}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="inline-block ml-6">
                    <Link className="block" to="#">
                      <img
                        className="block w-[150px] h-[45px] md:w-[240px] md:h-[60px] object-cover rounded-md"
                        src={apple}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Download;
