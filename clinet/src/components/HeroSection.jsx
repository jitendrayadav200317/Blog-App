import { motion } from "motion/react";
import img from "../assets/hero.png";
import { Button } from "@mantine/core";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center">
      <div className=" ">
        <p className="text-4xl text-orange-950  ">
          CREATE <span className="text-pink-400">A BLOGE</span>
        </p>
        <p className="text-pink-300">
          Share your story with the world Create a beautiful personalized blog
          this fits your brand
        </p>
        <button  className="text-pink-300 hover:text-gray-500 transition-transform  hover:scale-105 duration-200">Explore Now</button>
      </div>
      <div className="flex items-center size-100">
        <img src={img} alt="Photo" class="w-64 h-auto" />
      </div>
    </div>
  );
}
