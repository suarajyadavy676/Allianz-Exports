import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] mx-auto py-6">
        <p className="xl:text-left text-center">2024 © Unfluke. All rights reserved.</p>
        <div className="flex justify-between flex-wrap text-blue-600 xl:py-0 py-5">
          <div className="grid grid-cols-3 gap-4 justify-between"> 
            <a href="https://wa.me/917607487361" target="_blank"><FaWhatsapp /></a>        
            <a href="https://x.com/aseem_singhal" target="_blank"><TfiTwitter /></a>
            <a href="https://www.linkedin.com/in/singhalaseem/" target="_blank"><FaLinkedinIn /></a>           
          </div>
          <p className="mx-3"><Link to='/terms'>Terms and Conditions</Link></p>
          <p className="mx-3"><Link to='/refund'>Refund Policy</Link></p>
          <p className="mx-3">Privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
