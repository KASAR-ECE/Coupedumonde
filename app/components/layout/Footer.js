import Image from "next/image";
import Link from "next/link";
import Kasar from "./../../img/Kasar.png"

export default function Footer({ }) {
  return (
    <footer className=" bg-kasar1 h-14 items-center ">
      <div className="flex flex-row items-center h-full w-[60%] px-4 mx-auto">
        <div className="w-auto object-center text-center text-white sm:ml-[25%] md:ml-[40%]">
          Powered by KASAR
        </div>
        <Link href="https://www.instagram.com/kasar.ai/">
          <Image src={Kasar} className=" ml-0 w-12 h-12 rounded-[50%] border-kasar5 border-2" alt="Kasar-ai Logo" />
        </Link>
      </div>
    </footer>
  );
}
