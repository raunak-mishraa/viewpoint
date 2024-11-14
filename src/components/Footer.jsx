import React from "react";
import logo from "../assets/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-10 bg-black/90  text-gray-300 py-6 relative z-20">
      <div className="max-w-5xl mx-auto h-auto flex justify-between items-stretch text-black">
        <div className="w-3/5 flex gap-4 ">
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <img src={logo} alt="logo" className="w-8" />
              <h1 className="text-2xl font-bold text-opacity-80 text-white">
                ViewPoint
              </h1>
            </div>
            <div className="font-Inter font-light text-white">
              {/* <span>Stay updated with the latest news around the world.</span> */}
              <div>
                <p className="mt-6 font-semibold text-white">Inshorts Pte. Ltd.</p>
                <p className="text-gray-400 text-xs">© COPYRIGHT 2024</p>
              </div>
            </div>
          </div>
          <div className="h-24 border-l border-white/50" />
          <div>
            <div className="space-y-0.5 text-left text-sm font-light">
              <a href="#contact" className="text-white block hover:underline">
                Contact Us
              </a>
              <a href="#terms" className="text-white block hover:underline">
                Terms & conditions
              </a>
              <a href="#privacy" className="text-white block hover:underline">
                Privacy Policies
              </a>
            </div>
          </div>
        </div>
        <div className="w-3/5 h-auto flex items-end justify-end">
          <div className="flex justify-end gap-6">
            <FaFacebookF className="text-2xl text-white" />
            <FaXTwitter className="text-2xl text-white" />
            <FaLinkedinIn className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
