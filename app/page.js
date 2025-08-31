import Image from "next/image";
import Link from "next/link";
import nav from "../public/nav.png";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <nav className="border flex justify-center items-center ">
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
          <div className="w-full flex justify-center items-center">
            <div className="flex px-[20px] w-full justify-between items-center border border-pink-500 md:w-[70%]">
              <div id="logo" className="md:border md:w-auto w-[40px]">
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

              <div id="buy" className="md:w-auto w-[120px]">
                <Image src={"/buy.png"} width={200} height={100} />
              </div>

              <div id="x" className="md:w-auto w-[60px]">
                <Image src={"/x.png"} width={100} height={100} />
              </div>
            </div>
          </div>
        </nav>

        <div className="h-[600px] border-2  mt-[50px] justify-center items-center flex relative">
          <Image
            className="-z-[1] absolute md:hidden hidden  top-[100px] border"
            src={"/hero.svg"}
            alt="hero"
            width={1000}
            height={1000}
          />

          <div className=" mt-[26%] ml-[40px] hidden flex-row justify-between border w-[40%]">
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
          className="border   border-blue-600 relative bg-[#BE731D]  md:h-auto w-screen  "
        >
          <Image
            className="z-[1] border -top-[400px] border-green-500 absolute w-full"
            src={"/drip-hero.png"}
            width={100}
            height={100}
          />

          <div className="-z-[1] mt-[90px] px-[10px]">
            <div className="w-full z-[100] relative">
              <div className="w-full border border-pink-700 mt-[70px] z-[1]">
                <div className=" w-full flex-col mt-[160px] flex justify-center items-center z-[1] border border-blue-800">
                  {/* <Image
                    className=""
                    src={"/about-header.png"}
                    width={200}
                    height={200}
                  /> */}

                  <div className="w-[330px] border border-pink-500">
                    <h2 className="text-center text-[70px] text-white stroke-about">
                      ABOUT
                    </h2>

                    <p className="text-[#321502] text-[18px] font-bold text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="mt-[30px] relative w-full border border-green-500">
                    <div className="text-xl text-center font-bold text-[#633300] relative z-[10]">
                      BUY NOW
                    </div>

                    <Image
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]"
                      src="/button-wrapper-mb.svg"
                      width={300}
                      height={300}
                      alt="button background"
                    />
                  </div>
                  <div className="mt-[30px]">
                    <Image src={"/about-side-img-mb.svg"} width={350} height={350} />
                  </div>
                </div>
              </div>

              <Image
                className="w-full top-0 -z-[1] absolute"
                src={"/about-wrapper.svg"}
                width={100}
                height={100}
              />
            </div>
          </div>

          <div id="tokenomics" className="w-full flex justify-center items-center mt-[200px] mb-[50px] bg-white relative">
            <div>
              <h2 className="relative z-[10] text-center text-[60px] text-[#EEDCDC] stroke-token">
                      TOKENOMICS
                    </h2>
            </div>
            <Image className="absolute -top-[180px]" src={"/token-wrapper-mb.svg"} width={1200} height={200} />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
