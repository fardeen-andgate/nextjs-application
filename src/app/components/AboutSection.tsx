"use client";
/* eslint-disable react/no-unescaped-entities */
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Next.Js</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwand.CSS</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
           <li>Matriculation In Science</li> 
          <li>Intermediate In Computer Science</li>
          <li>Undergraduate Bachelors In Software Engineering</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Prompt Engineering In ChatGpt</li>
          <li>Introduction To Generative AI</li>
          <li>Cyber Security & Ethical Hacking</li>
          <li>Pursuing GENAI, Web3 and Metaverse Development</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id: React.SetStateAction<string>) => {
      startTransition(() => {
        setTab(id);
      });
    };
  
  return (
    <section id='about' className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <Image src={require("../../../public/assets/pictures/aboutme.jpg")} alt='About me' width={500} height={500} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">I'm Fardeen, an undergraduate software engineer, passionate about modern tech stacks like Next.js, 
        TypeScript, Tailwind CSS, and Node.js. I'm dedicated to crafting stunning web applications and am always eager to expand my skill set.
        As a quick learner, I'm excited to collaborate with others to create amazing web applications that push the boundaries of what's
        possible. Let's build the future together.</p>
        <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t)=> t.id === tab)?.content}</div>
      </div>
      </div>
      </section>
  )
}

export default AboutSection