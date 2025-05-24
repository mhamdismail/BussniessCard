import ImageSection from "@/componets/ImageSection";
import React from "react";
import { FaPhoneAlt , FaLinkedin, FaInstagram, FaFileDownload  } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
<div className="min-h-screen flex justify-center items-center flex-col p-10">
<div className="flex justify-center items-center w-full md:w-[470px]">
        <ImageSection />
      </div>
      <h1 className="mt-6 text-xl font-mono text-white font-bold">
        &lt; Mohammad Ismail /&gt;
      </h1>
      <h1 className="mt-2 text-s font-stretch-normal text-white font-bold">
        Full Stack Developer
      </h1>

      <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
        <a
  href="tel:+96176875862"
  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FaPhoneAlt  className="text-white" /> Call Me
        </a>
        <a
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHLJ-eIlLxJBwAAAZcBGxbQRHfQnFoNNRsi_XOaOyo01yrXUdx9cjfFUfQefKL74I6S9akGGudWTh_KlxBZPJ0UZg-qek6TKdoMrYFM8BlKkypcJJqnVx2S5GRnJM2pF4eQXDo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohammad-ismail-6a32762b6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FaLinkedin className="text-white" /> LinkedIn
        </a>
        <a
          href="/Mohammad Ismail full Stack Developer.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FaFileDownload className="text-white" /> Download CV
        </a>
        <a
          href="https://www.instagram.com/your-instagram-id"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FaInstagram className="text-white" /> Instagram
        </a>
      </div>
      <div className="grid grid-cols-3 gap-6 py-5">
  <a
        href="https://portfolio-mohammads-projects-699eb36e.vercel.app/en/pages"
className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-4 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full h-full"
  >
    <FaCode size={16} />
  </a>
  <a
    href="https://portfolio-mohammads-projects-699eb36e.vercel.app/en/pages#skills"
    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-4 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full h-full"
  >
    <GiSkills size={16} />
  </a>
  <a    href="https://portfolio-mohammads-projects-699eb36e.vercel.app/en/pages#projects"

    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-4 rounded-full text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full h-full"
  >
    <GrProjects size={16} />
  </a>
</div>
 <Image src={"/logo/logo.svg"} alt="log" className="opacity-5" width={75} height={75}/>
    </div>
  );
};

export default Page;
