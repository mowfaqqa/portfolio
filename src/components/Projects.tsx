import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as Linked } from "react-feather";


const Projects = () => {
  return (
    <div className="text-taupe/70">
      <h1 className="text-3xl text-gray-100 font-readex ">Selected Projects</h1>
      {/* projects */}
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-base font-bold font-unbounded">STARLOAN</h1>
          <div className="relative flex">
            <span className="py-4 flex items-center font-bold">Jan</span>
            <span className="bg-caribbean rounded-full px-3  flex items-center justify-center">
              2k22
            </span>
          </div>
        </div>
        <div className="py-3">
            <Image src="/assets/loansystem.png" width={1300} height={400} alt="sterloan"/>
            <a href='https://sterloan.hubuk.ng' target="_blank" rel="noreferrer">
                <span className="text-caribbean text-xl mt-2 font-medium flex items-center"><Linked size={20} className="mx-1"/> View Project</span>
            </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-base font-bold font-unbounded">Unified-Camp Ebook</h1>
          <div className="relative flex">
            <span className="py-4 flex items-center font-bold">Aug</span>
            <span className="bg-caribbean rounded-full px-3  flex items-center justify-center">
              2k21
            </span>
          </div>
        </div>
        <div className="py-3">
            <Image src="/assets/unifiedcamp.png" width={1300} height={400} alt="sterloan"/>
            <a href='https://www.unifiedcamp.com/Pdf/Books' target="_blank" rel="noreferrer">
                <span className="text-caribbean text-xl mt-2 font-medium flex items-center"><Linked size={20} className="mx-1"/> View Project</span>
            </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-base font-bold font-unbounded">Billie NG</h1>
          <div className="relative flex">
            <span className="py-4 flex items-center font-bold">Oct</span>
            <span className="bg-caribbean rounded-full px-3  flex items-center justify-center">
              2k21
            </span>
          </div>
        </div>
        <div className="py-3">
            <Image src="/assets/billie.png" width={1300} height={400} alt="sterloan"/>
            <a href='https://billie.com.ng/' target="_blank" rel="noreferrer">
                <span className="text-caribbean text-xl mt-2 font-medium flex items-center"><Linked size={20} className="mx-1"/> View Project</span>
            </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-base font-bold font-unbounded">SuperTrade-FX</h1>
          <div className="relative flex">
            <span className="py-4 flex items-center font-bold">Dec</span>
            <span className="bg-caribbean rounded-full px-3  flex items-center justify-center">
              2k22
            </span>
          </div>
        </div>
        <div className="py-3">
            <Image src="/assets/supertrade.png" width={1300} height={400} alt="sterloan"/>
            <a href='https://super-tradefx.vercel.app/' target="_blank" rel="noreferrer">
                <span className="text-caribbean text-xl mt-2 font-medium flex items-center"><Linked size={20} className="mx-1"/> View Project</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
