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
          className="border   border-blue-600 relative bg-[#BE731D] h-screen md:h-auto w-screen  "
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
                <div className=" w-full flex-col mt-[300px] flex justify-center items-center z-[1] border border-blue-800">
                  <Image
                    className=""
                    src={"/about-header.png"}
                    width={200}
                    height={200}
                  />

                  <div className="w-[300px] border border-pink-500">
                  <Image className="w-full border border-amber-900" src={"/about-text.png"} width={100} height={100} />
                  </div>
                </div>
              </div>




              <Image
                className="w-full top-0 -z-[1] absolute"
                src={"/about-wrapper.png"}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
