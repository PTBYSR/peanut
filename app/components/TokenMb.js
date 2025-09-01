import React from 'react'
import Image from 'next/image'

const TokenMb = () => {
  return (
    <div id="tokenomics" className="w-full bg-white  mb-[50px] relative">
          <div>
            <div className="w-full flex justify-center items-center">
              <svg
                viewBox="0 0 300 100"
                className="w-full h-auto max-w-[600px] mx-auto relative z-[10]"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="dropshadow1" height="130%">
                    <feDropShadow
                      dx="3"
                      dy="3"
                      stdDeviation="2"
                      floodColor="rgba(0,0,0,0.6)"
                    />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  fill="#EEDCDC"
                  stroke="#310D01"
                  strokeWidth="8"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  fontSize="40"
                  fontWeight="bold"
                  filter="url(#dropshadow1)"
                >
                  TOKENOMICS
                </text>
              </svg>
            </div>
            <div
              id="token-drip-1"
              className=" relative z-[10] flex flex-col justify-center items-center mt-[20px] gap-4"
            >
              <svg
                viewBox="0 0 300 50"
                className=" absolute  left-1/2 + -translate-x-1/2 -top-[15px] w-full h-auto max-w-[600px] mx-auto "
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="dropshadow-ts" height="130%">
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="4"
                      floodColor="#BF4E69"
                    />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  fill="#BF4E69"
                  // stroke="#BF4E69"
                  // strokeWidth="1"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  fontSize="15"
                  fontWeight="bold"
                  filter="url(#dropshadow-ts)"
                >
                  TOTAL SUPPLY
                </text>
              </svg>
              <div>
                <Image
                  className="absolute right-[4px] -top-[45px] z-[10]"
                  src={"/banana-1.svg"}
                  width={60}
                  height={60}
                />
              </div>
              <div> </div>
              <div className="w-full ">
                <svg
                  viewBox="0 0 300 50"
                  className=" w-full h-auto max-w-[600px] mx-auto relative z-[10]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="dropshadow2" height="130%">
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="6"
                        floodColor="white"
                      />
                    </filter>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fill="white"
                    // stroke="white"
                    // strokeWidth="1"
                    strokeLinejoin="round"
                    paintOrder="stroke fill"
                    fontSize="25"
                    fontWeight="bold"
                    filter="url(#dropshadow2)"
                  >
                    1,000,000,000,000
                  </text>
                </svg>
                <Image
                  className="mt-[35px] w-full absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
                  src={"/token-drip-1-mb.svg"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              id="token-drip-2"
              className="relative z-[10] flex flex-col justify-center items-center mt-[65px] gap-4"
            >
              <svg
                viewBox="0 0 300 50"
                className=" absolute  left-1/2 + -translate-x-1/2 -top-[10px] w-full h-auto max-w-[600px] mx-auto "
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="dropshadow-ts" height="130%">
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="4"
                      floodColor="#BF4E69"
                    />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  fill="#BF4E69"
                  // stroke="#BF4E69"
                  // strokeWidth="1"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  fontSize="15"
                  fontWeight="bold"
                  filter="url(#dropshadow-ts)"
                >
                  TAXES
                </text>
              </svg>
              <div>
                <Image
                  className="absolute left-[4px] -top-[28px] z-[10]"
                  src={"/banana-2.svg"}
                  width={45}
                  height={45}
                />
              </div>
              <div> </div>
              <div className="w-full ">
                <svg
                  viewBox="0 0 300 50"
                  className=" w-full h-auto max-w-[600px] mx-auto relative z-[10]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="dropshadow2" height="130%">
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="3"
                        floodColor="white"
                      />
                    </filter>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fill="white"
                    // stroke="white"
                    // strokeWidth="1"
                    strokeLinejoin="round"
                    paintOrder="stroke fill"
                    fontSize="25"
                    fontWeight="bold"
                    filter="url(#dropshadow2)"
                  >
                    0%
                  </text>
                </svg>
                <Image
                  className="mt-[35px] w-full absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
                  src={"/token-drip-2-mb.svg"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              id="token-drip-3"
              className=" relative z-[10] flex flex-col justify-center items-center mt-[65px] gap-4"
            >
              <svg
                viewBox="0 0 300 50"
                className=" absolute  left-1/2 + -translate-x-1/2 -top-[10px] w-full h-auto max-w-[600px] mx-auto "
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="dropshadow-ts" height="130%">
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="4"
                      floodColor="#BF4E69"
                    />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  fill="#BF4E69"
                  // stroke="#BF4E69"
                  // strokeWidth="1"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  fontSize="15"
                  fontWeight="bold"
                  filter="url(#dropshadow-ts)"
                >
                  TOKEN NAME
                </text>
              </svg>
              <div>
                <Image
                  className="absolute right-[6px] -top-[5px] z-[10]"
                  src={"/banana-3.svg"}
                  width={30}
                  height={30}
                />
                <Image
                  className="absolute left-[90px] -top-[5px] z-[10]"
                  src={"/banana-4.svg"}
                  width={28}
                  height={28}
                />
              </div>
              <div> </div>
              <div className="w-full ">
                <svg
                  viewBox="0 0 300 50"
                  className=" w-full h-auto max-w-[600px] mx-auto relative z-[10]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="dropshadow2" height="130%">
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="6"
                        floodColor="white"
                      />
                    </filter>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fill="white"
                    // stroke="white"
                    // strokeWidth="1"
                    strokeLinejoin="round"
                    paintOrder="stroke fill"
                    fontSize="25"
                    fontWeight="bold"
                    filter="url(#dropshadow2)"
                  >
                    JELLY TIME
                  </text>
                </svg>
                <Image
                  className="mt-[35px] w-full absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
                  src={"/token-drip-1-mb.svg"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-[100px]  px-[10px] z-[10] w-full">
            <Image
              className="w-full"
              src={"/token-side-img-mb.svg"}
              width={100}
              height={500}
            />
          </div>

          <Image
            className=" absolute -top-[200px]"
            src={"/token-wrapper-mb.svg"}
            width={500}
            height={500}
          />
        </div>
  )
}

export default TokenMb