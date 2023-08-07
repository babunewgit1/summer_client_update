import React from "react";
import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";
import team4 from "../../../assets/team4.jpg";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Team = () => {
  return (
    <section id="team" className="bg-[#FDE5EC] py-14">
      <div className="mycontainer">
        <div className="teamWrapper">
          <h2 className="text-4xl font-semibold mb-8">Meet Our Team</h2>
          <div className="teamMember grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Fade cascade duration={5000}>
              <div className="teamOne bg-white shadow-xl">
                <div className="teamOneImg">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={team1}
                    alt="team one"
                  />
                </div>
                <div className="teamDetails p-4">
                  <h2 className="text-2xl font-semibold">Gail A. Delong</h2>
                  <p>-Web developer</p>
                  <ul className="mt-3">
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaTwitter></FaTwitter>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaInstagram></FaInstagram>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaLinkedinIn></FaLinkedinIn>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>

            <Fade cascade duration={5000}>
              <div className="teamOne bg-white shadow-xl">
                <div className="teamOneImg">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={team2}
                    alt="team one"
                  />
                </div>
                <div className="teamDetails p-4">
                  <h2 className="text-2xl font-semibold">Elizabeth R. Grosz</h2>
                  <p>-UI UX Designer</p>
                  <ul className="mt-3">
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaTwitter></FaTwitter>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaInstagram></FaInstagram>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaLinkedinIn></FaLinkedinIn>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
            <Fade cascade duration={5000}>
              <div className="teamOne bg-white shadow-xl">
                <div className="teamOneImg">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={team3}
                    alt="team one"
                  />
                </div>
                <div className="teamDetails p-4">
                  <h2 className="text-2xl font-semibold">Mary L. Ta</h2>
                  <p>-Manager</p>
                  <ul className="mt-3">
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaTwitter></FaTwitter>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaInstagram></FaInstagram>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaLinkedinIn></FaLinkedinIn>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
            <Fade cascade duration={5000}>
              <div className="teamOne bg-white shadow-xl">
                <div className="teamOneImg">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={team4}
                    alt="team one"
                  />
                </div>
                <div className="teamDetails p-4">
                  <h2>Martin T. Brown</h2>
                  <p>-CEO</p>
                  <ul className="mt-3">
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaTwitter></FaTwitter>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaInstagram></FaInstagram>
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link to="#" className="inline-block text-3xl mr-3">
                        <FaLinkedinIn></FaLinkedinIn>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
