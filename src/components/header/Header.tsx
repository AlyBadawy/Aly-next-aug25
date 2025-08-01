import logo from "@/assets/images/logo.svg";
import { HeaderNav } from "./HeaderNav";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="text-white mb-4 sticky top-0 bg-zinc-950 shadow-lg z-10 border-b border-zinc-900">
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="w-28 sm:w-40 mr-2">
            <Link href="/">
              <Image src={logo} alt="Aly Badawy" />
            </Link>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
