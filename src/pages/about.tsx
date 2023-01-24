import { CardV2 } from "@/components/Card";
import Tab from "@/components/Tab";
import Image from "next/image";
import React from "react";
import { saveAs } from "file-saver"
import Contact from '@/components/Contact';

const About = () => {
  const saveFile = () => {
    // using Java Script method to get PDF file
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
}
  const TABS = React.useMemo(
    () => [
      {
        label: "Languages",
        content: <Languages />,
      },
      {
        label: "Framework",
        content: <Frameworks />,
      },
      {
        label: "Tools",
        content: <Tools />,
      },
    ],
    []
  );
  const experiences = [
    {
      org: "Hubuk Technologies",
      role: "Lead Frontend Engineer",
      period: "Jan 2022 - Present",
      desc: "Designing and building client side applications.",
    },
    {
      org: "Billie NG",
      role: "Lead Frontend Engineer",
      period: "Jan 2021 - Dec 2021",
      desc: "Designing and building client side applications.",
    },
    {
      org: "HNG Internship",
      role: "Intern Frontend Engineer",
      period: "Aug 2022 - Nov 2021",
      desc: "Worked on building UI and api integrations using axios, materail ui and react.",
    },
    {
      org: "Freelance",
      role: "Software Developer",
      period: "August 2020 - Present",
      desc: "Design and develop high quality and user-friendly web applications and mobile apps based on client requirements and budget.",
    },
  ];
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
          <h2 className="text-xl text-caribbean font-semibold">My Stack</h2>
          <p className="text-lg text-taupe/70 text-center md:text-start">
            As a React frontend developer, my stack typically includes: React or
            Next.js for building the UI and managing the component state,
            JavaScript (ES6+) for writing the logic and interactions Webpack for
            bundling and building the code NPM or yarn for package management
            Git for version control CSS for styling Testing libraries such as
            Jest and Enzyme for testing. Additionally, I may use additional
            tools such as Redux , Redux tool kit or zustand for state
            management, Axios and React Query for making API calls, and React
            Router for client-side routing, Open API generator for easier and
            faster integration of endpoints I have a solid understanding of each
            of these technologies, and I am constantly learning and staying up
            to date with the latest developments and best practices in the
            field. I am particularly experienced with React and Next.js, and I
            have a deep understanding of its component-based architecture and
            how to use it to build efficient and scalable user interfaces and
            also implement reusable components. I understand how to create
            responsive and visually appealing designs that work across different
            devices and screen sizes. Overall, I am confident in my ability to
            build high-performing and user-friendly web applications using my
            stack.
          </p>
          <button onClick={saveFile} className="text-caribbean border border-caribbean shadow-sm shadow-taupe hover:bg-taupe mt-4 px-3 py-2 rounded-md">View My Resume</button>
        </div>
        <div className="px-12">
          <Image src="/assets/mwffq.jpg" width={500} height={400} alt="mwffq" />
        </div>
      </div>
      {/* skill */}
      <div className="py-2">
        <h1 className="font-medium text-xl text-center md:text-start">
          SKILLS
        </h1>
        <Tab variant="outlined" tabs={TABS} />
      </div>
      {/* experience */}
      <div className="mt-5">
        <h1 className="text-xl font-semibold">EXPERIENCE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          {experiences.map((exp: any, index: number) => (
            <CardV2 key={index} className="flex-col p-3 my-3">
              <div>
                <p>
                  {" "}
                  <span className="font-medium text-lg">{exp.role}</span> -{" "}
                  <span className="text-sm">{exp.org}</span>
                </p>
                <p className="text-sm">{exp.period}</p>
                <p className="text-sm">{exp.desc}</p>
              </div>
            </CardV2>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;

const Languages = () => {
  const languages = [
    {
      skill: "Javascript",
      img: "/assets/js.png",
    },
    {
      skill: "TypeScript",
      img: "/assets/ts.png",
    },
    {
      skill: "HTML",
      img: "/assets/html.png",
    },
    {
      skill: "CSS",
      img: "/assets/css.png",
    },
    {
      skill: "Dart",
      img: "/assets/dart.png",
    },
  ];
  return (
    <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      {languages.map((lang: any, index: number) => (
        <CardV2 key={index} className="px-2">
          <div className="flex items-center gap-3">
            <Image src={lang.img} width={40} height={40} alt="icon" />
            <p>{lang.skill}</p>
          </div>
        </CardV2>
      ))}
    </div>
  );
};
const Frameworks = () => {
  const framwork = [
    {
      skill: "React",
      img: "/assets/react.png",
    },
    {
      skill: "Next.js",
      img: "/assets/nextjs.png",
    },
    {
      skill: "React Native",
      img: "/assets/reactnative.png",
    },
    {
      skill: "Tailwind-CSS",
      img: "/assets/tailwind.png",
    },
    {
      skill: "Flutter",
      img: "/assets/flutter.png",
    },
  ];
  return (
    <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      {framwork.map((lang: any, index: number) => (
        <CardV2 key={index} className="px-2">
          <div className="flex items-center gap-3">
            <Image src={lang.img} width={40} height={40} alt="icon" />
            <p>{lang.skill}</p>
          </div>
        </CardV2>
      ))}
    </div>
  );
};
const Tools = () => {
  const tools = [
    {
      skill: "Git",
      img: "/assets/git.png",
    },
    {
      skill: "Firebase",
      img: "/assets/firebase.png",
    },
    {
      skill: "Zustand",
      img: "/assets/zustand.png",
    },
    {
      skill: "MongoDB",
      img: "/assets/mongodb.png",
    },
    {
      skill: "React Query",
      img: "/assets/react-query.svg",
    },
    {
      skill: "Rest API",
      img: "/assets/restapi.png",
    },
    {
      skill: "JIRA",
      img: "/assets/jira.png",
    },
  ];
  return (
    <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      {tools.map((lang: any, index: number) => (
        <CardV2 key={index} className="px-2">
          <div className="flex items-center gap-3">
            <Image src={lang.img} width={40} height={40} alt="icon" />
            <p>{lang.skill}</p>
          </div>
        </CardV2>
      ))}
    </div>
  );
};
