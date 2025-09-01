"use client";
import React , {useEffect, useState} from 'react'
import Image from 'next/image'

const AboutMb = () => {

 


  return (
    <div
              id="about"
              className="h-[1200px] relative bg-[#BE731D]  md:h-auto w-screen  "
            >
              <Image
                className=" z-[1] -top-[350px]  absolute w-full"
                src={"/hero-drip.svg"}
                width={100}
                height={100}
              />
    
              <div className=" px-[10px]">
                <div className="w-full  relative">
                  <div className="w-full   ">
                    <div className=" pt-[200px] w-full flex-col flex justify-center items-center ">
                      {/* <Image
                        className=""
                        src={"/about-header.png"}
                        width={200}
                        height={200}
                      /> */}
    
                      <div className="w-[330px] relative ">
                        <div className=" flex justify-center items-center relative z-[10] ">
                          {/* <Image
                        className=""
                        src={"/about-header.png"}
                        width={300}
                        height={300}
                      /> */}
                          {/* <Image
                            className=""
                            src={"/about-header.svg"}
                            width={250}
                            height={250}
                          /> */}
                          <svg
                            viewBox="0 0 300 100"
                            className="w-full h-auto max-w-[600px] mx-auto relative z-[10]"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <defs>
                              <filter id="dropshadow" height="130%">
                                <feDropShadow
                                  dx="3"
                                  dy="3"
                                  stdDeviation="7"
                                  floodColor="#2F9259"
                                />
                              </filter>
                            </defs>
    
                            <text
                              x="50%"
                              y="50%"
                              dy=".35em"
                              textAnchor="middle"
                              fill="white"
                              stroke="#2F9259"
                              strokeWidth="11"
                              strokeLinejoin="round"
                              paintOrder="stroke fill"
                              fontSize="53"
                              fontWeight="bold"
                              filter="url(#dropshadow)"
                            >
                              ABOUT
                            </text>
                          </svg>
                        </div>
    
                        <p className="text-[#321502] px-[20px]  mt-2 relative z-[10] text-[16px] font-bold text-center">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="mt-[30px] relative w-full">
                        <div className="text-xl text-center font-bold text-[#633300] relative z-[10]">
                          BUY NOW
                        </div>
    
                        <Image
                          className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
                          src="/button-wrapper-mb.svg"
                          width={270}
                          height={270}
                          alt="button background"
                        />
                      </div>
    
                      <div className="mt-[30px] relative z-[10]">
                        <Image
                          src={"/about-side-img-mb.svg"}
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
    
                  <Image
                    className="w-full top-0 mt-[110px] absolute"
                    src={"/about-wrapper.svg"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
  )
}

export default AboutMb