import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { PiLinkedinLogoBold } from "react-icons/pi";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="container bg-white py-[75px] px-[10px] md:px-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-[20px] pt-[20px] pb-[10px]">
        {/* ============= main links ============ */}
        <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly gap-[20px] sm:gap-[7rem]">
          <Link href="/">
            <li className="text-[15px] font-[700] list-none text-center hover:text-primaryColor">
              HOME
            </li>
          </Link>
          <Link href="/">
            <li className="text-[15px] font-[700] list-none text-center hover:text-primaryColor">
              CONTACT
            </li>
          </Link>
        </div>

        {/* ======== logo ========= */}
        <div className="hidden md:block">
          <Link href="/">
            <Image src="/logo.png" width={150} height={150} alt="" />
          </Link>
        </div>

        <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly gap-[20px] sm:gap-[7rem]">
          <Link href="/">
            <li className="text-[15px] font-[700] list-none text-center hover:text-primaryColor">
              ABOUT US
            </li>
          </Link>
          <Link href="/">
            <li className="text-[15px] font-[700] list-none text-center hover:text-primaryColor">
              BLOG
            </li>
          </Link>
        </div>
      </div>

      {/* ========= copyright ========= */}
      <div className="flex mx-auto w-[95%] h-[1px] bg-black bg-opacity-40 my-[30px]"></div>
      <div className="flex items-center justify-center gap-[30px] mt-[70px]">
        <Link
         href="/"
        >
          <BsInstagram className="w-[35px] h-[35px] cursor-pointer hover:text-primaryColor" />
        </Link>
        <Link
           href="/"
        >
          <LuFacebook className="w-[35px] h-[35px] cursor-pointer hover:text-primaryColor" />
        </Link>
        <Link href="/">
          <BsWhatsapp className="w-[35px] h-[35px] cursor-pointer hover:text-primaryColor" />
        </Link>
        <Link
           href="/"
        >
          <PiLinkedinLogoBold className="w-[35px] h-[35px] cursor-pointer hover:text-primaryColor" />
        </Link>
      </div>
      <div className="mt-[2rem]">
        <h3 className="text-center text-[15px] font-[400] opacity-80">
          © Accounting website {date}
        </h3>
      </div>
    </div>
  );
}
