import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "WemTech",
    position: "Software Engineer - Full-time",
    startDate: "5/2024",
    endDate: "7/2024"
  }
];

export default function About() {
  return (
    <div className=" ">
      <h3 className="md:text-4xl md:ml-0 ml-4 text-xl text-white font-semibold mb-12 md:text-center text-start md:mt-48 mt-20">
        About Me
      </h3>
      <motion.div
        initial={{ y: 50 }}
        animate={{
          y: 0,
        }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
        className="flex md:justify-center md:ml-0  md:items-center items-start flex-col "
      >
        <div className="bg-gray-900 p-6 md:mx-0 mx-4 rounded-lg lg:w-[50%] w-[90%]   mb-8 ">
          <p className="gray md:text-lg text-sm">
            Hi, I&apos;m Mohamed Tergui, a developer based in Morocco. I bring a strong problem-solving mindset and technical proficiency to every project. With hands-on experience in Full-stack Engineering, I excel in collaborative environments.
          </p>

          <p className="gray pt-4 md:text-lg text-sm">
            With a passion for frontend development, I&apos;ve dedicated my efforts to crafting seamless and visually stunning user interfaces.
          </p>

          <p className="gray pt-4 md:text-lg text-sm">
            I am excited to work on robust applications that make a difference. Let&apos;s connect and discuss how my skills can contribute to the success of your projects.
          </p>
          <p className="gray pt-4 pb-4 md:text-lg text-sm">
            I build awesome products using:
          </p>
          <ul className="grid grid-cols-3 gap-2">
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Java</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Spring-Boot</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Php</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Laravel</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Vue.js</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Angular</p>
            </li>
          </ul>
          <span className="flex gap-2 pt-4">
            <p className="gray md:text-base text-sm">Others:</p>
            <p className="text-1 md:text-base text-sm ">
            typescript,  docker, jenkins,  git
            </p>
          </span>
        </div>
      </motion.div>

      <motion.div
        className=""
        initial={{ y: 50 }}
        animate={{
          y: 0,
        }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
      >
        <ExperienceTimeline experiences={experiences} totalYears={1/4} />
      </motion.div>
    </div>
  );
}