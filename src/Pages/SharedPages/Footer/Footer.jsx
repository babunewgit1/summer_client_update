import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-[#1e272e]">
      <div className="mycontainer">
        <div className="footer-wrapper block lg:flex justify-between pt-12 pb-5 lg:space-y-0 space-y-10">
          <div className="footerLogo">
            <Link to="/">
              <h2 className="text-4xl font-bold text-white">SportFusion</h2>
            </Link>
            <ul className="flex items-center gap-4 mt-5">
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-[#DBB984] text-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaFacebookF></FaFacebookF>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-[#DBB984] text-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaTwitter></FaTwitter>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-[#DBB984] text-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaInstagram></FaInstagram>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-[#DBB984] text-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaLinkedinIn></FaLinkedinIn>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2 className="text-2xl font-medium text-white mb-5">Address</h2>
            <ul>
              <li className="flex gap-5 text-white">
                <span className="mt-[5px]">
                  <FaMapMarkerAlt className="text-[#DBB984]"></FaMapMarkerAlt>
                </span>
                <div className="mail">
                  <p className="mb-2">Head offce</p>
                  <p>
                    3101 Chestnut Street <br />
                    Tampa, FL 33610
                  </p>
                </div>
              </li>
              <li className="flex gap-5 text-white">
                <span className="mt-[23px]">
                  <FaMapMarkerAlt className="text-[#DBB984]"></FaMapMarkerAlt>
                </span>
                <div className="mail mt-5">
                  <p className="mb-2">Sub offce</p>
                  <p>
                    1045 Stockert Hollow Road <br />
                    Redmond, WA 98052
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2 className="text-2xl font-medium text-white mb-5">
              Contact Info
            </h2>
            <ul className="text-white">
              <li className="flex gap-5">
                <span className="mt-[5px]">
                  <FaEnvelope className="text-[#DBB984]"></FaEnvelope>
                </span>
                <div className="mail">
                  <p>xyz@gmail.com</p>
                  <p>zxr@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-5 mt-5">
                <span className="mt-[5px]">
                  <FaPhoneSquareAlt className="text-[#DBB984]"></FaPhoneSquareAlt>
                </span>
                <div className="mail">
                  <p>+8801000000000</p>
                  <p>+8802222222000</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright text-center border-t border-t-white py-10">
          <p className=" font-medium text-white">
            all rights reserved by
            <Link className="text-[#DBB984]" to="/">
              <span> SportFusion</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
