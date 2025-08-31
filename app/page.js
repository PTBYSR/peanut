import Image from "next/image";
import Link from "next/link";
import nav from "../public/nav.png"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <nav    className="border flex justify-center items-center ">
{/* <Image className="absolute  md:top-[0.2px] -z-10" src={"/nav.png"} alt="logo" width={1100} height={200}/> */}
<Image className="absolute -top-[15px] -z-10" src={"/nav-mb.png"} alt="logo" width={500} height={200}/>
<div className="w-full flex justify-center items-center">

<div className="flex justify-between items-center border border-pink-500 md:w-[70%]">
  
    <div id="logo" className="md:border">
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

    <div id="buy" className="md:w-auto w-[100px]"> 
      
    <Image src={"/buy.png"} width={200} height={100} />
  </div>
  
  <div id="x">
    <Image src={"/x.png"} width={100} height={100} />
  </div>
</div>


</div>
        </nav>
       

<div className="h-screen border-2  mt-[50px] justify-center items-center flex relative"> 
  <Image className="-z-10 absolute md:hidden hidden  top-[100px] border" src={"/hero.svg"} alt="hero" width={1000} height={1000} />
  
  <div className=" mt-[26%] ml-[40px] hidden flex-row justify-between border w-[40%]">
    <div className="animate-tilt">
      <Image src={"/button2.png"} width={130} height={130} />
    </div>
    <div className="animate-tilt">
      <Image src={"/button1.png"} width={130} height={130} />
    </div>
  </div>
</div>


<div id="about">

</div>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
