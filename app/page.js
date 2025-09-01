"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nav from "../public/nav.png";
import AboutDsk from "./components/AboutDsk";
import AboutMb from "./components/AboutMb";
import TokenMb from "./components/TokenMb";
import Footer from "./components/Footer";
import TokenDsk from "./components/TokenDsk";

export default function Home() {
  const [loading, setLoading] = useState(true);







  return (
    <div >
      <div className="w-full hidden bg-black text-white text-center text-[50px] p-2">
        Still under development
      </div>
      <main className="md:hidden ">
        <nav className="flex justify-center items-center ">
          <Image
            className="absolute hidden md:block  md:top-[0.2px] -z-[1]"
            src={"/nav.png"}
            alt="logo"
            width={1100}
            height={200}
          />
          <Image
            className="absolute md:hidden -top-[15px] -z-[1]"
            src={"/nav-mb.png"}
            alt="logo"
            width={500}
            height={200}
          />
          <div className=" pt-[5px] w-full flex justify-center items-center">
            <div className="flex px-[20px] w-full justify-between items-center  md:w-[70%]">
              <div id="logo" className="md:w-auto w-[40px]">
                <Image src={"/logo.png"} width={60} height={60} />
              </div>

              <div id="menu-links" className=" hidden md:flex flex-row gap-7">
                <Link href={"#home"}>
                  <Image src={"/HOME.png"} width={70} height={100} />
                </Link>
                <Link href={"#home"}>
                  <Image src={"/ABOUT.png"} width={73} height={100} />
                </Link>
                <Link href={"#home"}>
                  <Image src={"/TOKENOMICS.png"} width={150} height={100} />
                </Link>
              </div>

              <div className=" flex ">
                <div id="buy" className="md:w-auto w-[120px]">
                  <Image src={"/buy.png"} width={200} height={100} />
                </div>

                <div id="x" className="md:w-auto w-[60px]">
                  <Image src={"/x.png"} width={100} height={100} />
                </div>
                <div id="x" className="md:w-auto md:hidden w-[60px]">
                  <Image
                    src={"/hamburger-menu-mb.svg"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="h-[600px] mt-[65px] justify-center items-center flex relative">
          <Image
            className="-z-[1] absolute md:hidden hidden  top-[100px] b"
            src={"/hero.svg"}
            alt="hero"
            width={1000}
            height={1000}
          />

          <div className=" mt-[26%] ml-[40px] hidden flex-row justify-between  w-[40%]">
            <div className="animate-tilt">
              <Image src={"/button2.png"} width={130} height={130} />
            </div>
            <div className="animate-tilt">
              <Image src={"/button1.png"} width={130} height={130} />
            </div>
          </div>
        </div>

        {/* <div className="md:hidden"></div> */}
        <AboutMb />

        <TokenMb />

        {/* <TokenMb /> */}
        <div className="hidden md:block">
          <AboutDsk />
          <TokenDsk />
        </div>

      </main>
      <footer className="w-screen relative mt-[150px] overflow-x-clip">
              <div className=" -left-[100px] z-[10] h-[100px] w-[150vw] absolute -top-[40px]">
      
              <Image
                className=""
                src={"/footer-wrapper-mb.svg"}
                fill
                
              />
              </div>
      
      
              <Image
                src={"/footer-img.svg"}
                width={100}
                height={50}
                className="w-full"
              />
            </footer>
    </div>
  );
}
