import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    "title": "eBankify - Bank Account & Transaction Management",
    "description": 
      "Welcome to eBankify, a comprehensive platform for managing bank accounts, transactions, and loans. Designed for both personal and business use, eBankify helps users keep track of their finances, make seamless transactions, and manage loans. With real-time updates, secure account management, and detailed transaction records, eBankify is the ideal solution for your banking needs.",
    "features": [
      "Account Management: Allows users to manage multiple bank accounts and view transaction history.",
      "Transaction Tracking: Enables users to make deposits, withdrawals, and transfer funds with ease.",
      "Loan Management: Provides tools to apply for, track, and manage loans efficiently.",
      "Real-time Updates: Offers instant updates on transaction statuses and loan repayments.",
      "Financial Reporting: Detailed reports on account activity and loan balances."
    ],
    "technologies": [
      { "name": "Spring Boot", "icon": "/spring-boot.svg" },
      { "name": "Spring Data", "icon": "/spring-data.svg" },
      { "name": "Hibernate", "icon": "/hibernate.svg" },
      { "name": "PostgreSQL", "icon": "/postgresql.svg" },
      { "name": "Spring Security", "icon": "/spring-security.svg" },
      { "name": "Docker", "icon": "/docker.svg" },
      { "name": "JWT", "icon": "/jwt.svg" }
    ],
    "livePreviewUrl": "https://ebankify.example.com/",
    "githubUrl": "https://github.com/mohamedtergui1/ebankify",
    "imageSrc": "/ebankify.jpeg"
}
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="md:ml-40  px-4 md:px-0 mt-12 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
        Projects
      </h3>
      {projects.map((project, index) => (
        <motion.div
          initial={{ y: 50 }}
          animate={{
            y: 0,
          }}
          viewport={{ amount: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
          key={index}
        >
          <div className=" card flex flex-col lg:flex-row lg:gap-12 justify-between items-start lg:items-center px-8 mb-12">
            <div className="max-w-prose gray font-medium text-lg flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-white text-2xl mt-4">{project.title}</h1>
              <p className="gray text-sm md:text-md leading-relaxed">
                {project.description}
              </p>
              <p>Features:</p>
              <ul className="text-sm md:text-md space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[#607b96] mr-2">*</span>
                    <p className="md:text-md text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-2">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={25}
                      height={25}
                    />
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center md:items-start md:justify-start flex-col sm:flex-row gap-4 md:mb-4">
                <Link href={project.githubUrl} target="_blank">
                  <button className="hidden md:block border border-white text-white px-4 py-2 rounded-full font-bold cursor-pointer transition-opacity duration-300 w-full sm:w-[226px] h-[78px] text-lg hover:opacity-80">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={
                imageLoaded
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 lg:pb-0 pb-4 lg:mt-0"
            >
              <Image
                onLoad={() => setImageLoaded(true)}
                src={project.imageSrc}
                alt={`${project.title} project`}
                layout="responsive"
                width={100}
                height={75}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}