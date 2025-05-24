"use client"
import Image from "next/image";
import { useRef } from "react";
import { useAnimateScroll } from "../componets/Animation/UseAnimateScroll";
const ImageSection = () => {
    const refs = {
      box: useRef<HTMLDivElement>(null),
      image: useRef<HTMLDivElement>(null), 
    };
  
    useAnimateScroll(refs);
  
    return (
      <div className="flex justify-center items-center  w-full">
        <div
          ref={refs.image} 
               className="relative flex h-[190px] w-[190px] md:w-[300px] md:h-[300px] justify-center items-center  rounded-full overflow-hidden"
      >
        <div className="absolute flex h-[186px] w-[186px] md:w-[290px] md:h-[290px] border-4 justify-center items-center rounded-full">
          <div
            ref={refs.box}
            className="w-20 h-[240px] md:h-[350px] bg-blue-600"
          ></div>
          <Image
            src="/images/mohammad.jpg"
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          </div>
        </div>
      </div>
    );
  };
  export default  ImageSection;