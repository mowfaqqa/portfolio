import { CardV2 } from "@/components/Card";
import Tab from "@/components/Tab";
import Image from "next/image";
import React from "react";

const About = () => {
    const TABS = React.useMemo(
        () => [
            {
                label: "Languages",
                content: <Languages />
            },
            {
                label: "Framework",
                content: <Frameworks />
            },
            {
                label: "Tools",
                content: <Tools />
            },
        ], []
    )
  return (
    <div className="max-w-6xl mx-auto overflow-hidden px-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-5">
          <h1 className="text-3xl text-center md:text-start my-4 font-bold text-caribbean">
            About Muwaffaq
          </h1>
          <p className="text-lg text-taupe/70 text-center md:text-start">
            A Frontend developer with a problem solving focus towards building
            and development of high performing and user-friendly applications
            (web and mobile) with a comprehension of how to create responsive
            and visually appealing designs that work across different devices
            and screen sizes. I am constantly learning and staying up to date
            with the latest developments and best practices in the field.
          </p>
        </div>
        <div className="px-12">
          <Image src="/assets/mwffq.jpg" width={500} height={400} alt="mwffq" />
        </div>
      </div>
      <div>
        <Tab variant="outlined" tabs={TABS}/>
      </div>
    </div>
  );
};

export default About;

const Languages = () => {
    const languages = [
        {
            skill : "Javascript",
            img : "/assets/js.png"
        },
        {
            skill : "TypeScript",
            img : "/assets/ts.png"
        },
        {
            skill : "HTML",
            img : "/assets/html.png"
        },
        {
            skill : "CSS",
            img : "/assets/css.png"
        },
        {
            skill : "Dart",
            img : "/assets/dart.png"
        },
    ]
    return (
        <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {languages.map((lang: any, index : number) => (
            <CardV2 key={index} className="">
                <div className="flex items-center gap-3"><Image src={lang.img} width={40} height={40}alt="icon"/>
                <p>{lang.skill}</p>
                </div>
            </CardV2>

            ))}
        </div>
    )
}
const Frameworks = () => {
    const framwork = [
        {
            skill : "React",
            img : "/assets/react.png"
        },
        {
            skill : "Next.js",
            img : "/assets/nextjs.png"
        },
        {
            skill : "React Native",
            img : "/assets/reactnative.png"
        },
        {
            skill : "Tailwind-CSS",
            img : "/assets/tailwind.png"
        },
        {
            skill : "Flutter",
            img : "/assets/flutter.png"
        },
    ]
    return (
        <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {framwork.map((lang: any, index : number) => (
            <CardV2 key={index} className="">
                <div className="flex items-center gap-3"><Image src={lang.img} width={40} height={40}alt="icon"/>
                <p>{lang.skill}</p>
                </div>
            </CardV2>

            ))}
        </div>
    )
}
const Tools = () => {
    const tools = [
        {
            skill : "Git",
            img : "/assets/git.png"
        },
        {
            skill : "Firebase",
            img : "/assets/firebase.png"
        },
        {
            skill : "Zustand",
            img : "/assets/zustand.png"
        },
        {
            skill : "MongoDB",
            img : "/assets/mongodb.png"
        },
        {
            skill : "React Query",
            img : "/assets/react-query.svg"
        },
        {
            skill : "Rest API",
            img : "/assets/restapi.png"
        },
        {
            skill : "JIRA",
            img : "/assets/jira.png"
        },
    ]
    return (
        <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {tools.map((lang: any, index : number) => (
            <CardV2 key={index} className="">
                <div className="flex items-center gap-3"><Image src={lang.img} width={40} height={40}alt="icon"/>
                <p>{lang.skill}</p>
                </div>
            </CardV2>
            ))}
        </div>
    )
}