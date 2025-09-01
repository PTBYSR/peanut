import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-screen relative mt-[150px] overflow-x-clip">
        <div className=" -left-[20px] z-[10] h-[90px] w-[110vw] absolute -top-[40px]">

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
  )
}

export default Footer