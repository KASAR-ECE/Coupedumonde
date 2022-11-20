import Image from "next/image";
import Link from "next/link";
import Kasar from "../../../Kasar.png"

export default function Footer({ }) {
  return (
    <footer>
      <div className="relative flex flex-row items-center h-14 bg-kasar1 px-4">
        <div className=" w-full object-center text-center text-kasar5">
          Powered by KASAR
        </div>
        <Link href="https://www.instagram.com/kasar.ai/">
          <Image src={Kasar} className="bg-kasar1 w-8 h-8 rounded-[50%]" alt="Kasar-ai Logo" />
        </Link>
      </div>
    </footer>
  );
}
