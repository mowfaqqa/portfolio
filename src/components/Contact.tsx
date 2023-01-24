import React from "react";
import { Mail, PhoneCall } from "react-feather";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-7">
      <div>
        <h1 className="text-4xl font-unbounded font-semibold text-white mb-3">
          LEt&apos;s ConNecT
        </h1>
        <p className="text-taupe/50">
          Muwaffaq Aliyu is an experienced frontend developer with satisfactoy
          years of experience in translating designs into code and develops
          user-friendly and high quality applications.I am always availaible if you have a project or just simply want to chat. <span className="text-taupe text-xl">🤣</span> 
        </p>
      </div>
      <div className="relative md:px-24 flex flex-col items-start justify-center">
        <div className="flex items-center my-3 font-medium">
          <Mail size={30} />
          <span className="mx-3">itzmuwaffaq@gmail.com</span>
        </div>
        <div className="flex items-center my-3 font-medium">
          <PhoneCall size={30} />
          <span className="mx-3">+2348187869760</span>
        </div>
            <h1 className=" absolute transform rotate-12 md:top-8 text-7xl font-unbounded text-gray-600/20">LEt&apos;s ConNect</h1>
      </div>
    </div>
  );
};

export default Contact;
