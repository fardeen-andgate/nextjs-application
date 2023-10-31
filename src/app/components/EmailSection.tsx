"use client";
/* eslint-disable react/no-unescaped-entities */
import React, {useState} from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { POST } from "../api/send/route";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSONdata
    }
    const response = await fetch(endpoint, options)
    const resData = await response.json();

    if (response.status === 200) {
        console.log("Message sent.")
        setEmailSubmitted(true)
    };
  };



  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm actively exploring new opportunities, and my DMs are wide open.
          Whether you have questions or just want to say hi, I'm here to connect
          and will do my best to get back to you promptly!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/fardeen-andgate"}>
            <Image src={GitHubIcon} alt="Github"></Image>
          </Link>
          <Link href={"https://pk.linkedin.com/in/muhammad-fardeen-7265441b5"}>
            <Image src={LinkedinIcon} alt="Linkedin"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@goole.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just Saying hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about......"
              />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
          {
            emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
