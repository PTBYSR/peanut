import Image from "next/image";
import Link from "next/link";
import nav from "../public/nav.png";

export default function Home() {
  return (
    <div className="">
      <div className="w-full hidden md:block bg-black text-white text-center text-[50px] p-2">
        Still under development
      </div>
      <main className="md:hidden">
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
                <div id="x" className="md:w-auto w-[60px]">
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

        <div className="h-[600px] mt-[50px] justify-center items-center flex relative">
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

        <div
          id="about"
          className="h-[1000px] relative bg-[#BE731D]  md:h-auto w-screen  "
        >
          <Image
            className=" z-[1] -top-[400px]  absolute w-full"
            src={"/hero-drip.svg"}
            width={100}
            height={100}
          />

          <div className=" px-[10px]">
            <div className="w-full  relative">
              <div className="w-full   ">
                <div className=" pt-[150px] w-full flex-col flex justify-center items-center ">
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
                      <svg viewBox="0 0 300 100" className="w-full h-auto max-w-[600px] mx-auto relative z-[10]"
  preserveAspectRatio="xMidYMid meet">
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
                className="w-full top-0 mt-[40px] absolute"
                src={"/about-wrapper.svg"}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>


        <div
          id="tokenomics"
          className="w-full bg-[#BE731D]  mb-[50px] relative"
        >
          <div className="w-full flex justify-center items-center">
            <svg viewBox="0 0 300 100" className="w-full h-auto max-w-[600px] mx-auto relative z-[10]"
  preserveAspectRatio="xMidYMid meet">
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

          <div id="token-drip-1" className=" relative z-[10] flex flex-col justify-center items-center mt-[20px] gap-4">
            <div className="w-full ">
              <svg viewBox="0 0 300 50" className=" w-full h-auto max-w-[600px] mx-auto relative z-[10]"
  preserveAspectRatio="xMidYMid meet">
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
              <Image className="mt-[16px] w-full absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]" src={"/token-drip-1-mb.svg"} width={100} height={100} />
            </div>
          </div>


          <Image
            className=" absolute -top-[140px]"
            src={"/token-wrapper-mb.svg"}
            width={500}
            height={500}
          />
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
