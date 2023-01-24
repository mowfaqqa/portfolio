import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 py-10">
        <div>
        <h1 className="text-xl font-bold my-1 text-center">MWFFQ</h1>
        <div className="flex justify-center items-center gap-5 py-2">
      <Link href="https://github.com/mowfaqqa">
        <span>
          <Image
            src={"/assets/github.svg"}
            width={38}
            height={38}
            alt="github"
            />
        </span>
      </Link>
      <Link href="https://twitter.com/muw_ffaq" passHref>
        <span>
          <Image
            src={"/assets/twitter.png"}
            width={38}
            height={38}
            alt="twitter"
            />
        </span>
      </Link>
      <Link href="https://github.">
        <span>
          <Image
            src={"/assets/linkedin.png"}
            width={38}
            height={38}
            alt="linkedin"
            />
        </span>
      </Link>
        </div>
          <span className="text-taupe/30 pt-10">© 2022, Muwaffaq Aliyu </span>  
        </div>
    </div>
  );
};

export default Footer;
