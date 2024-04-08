import Image from "next/image";
import logo from "../../../public/logo.png";
import DropDown from "@/Components/DropDown";
import Link from "next/link";
import Button from "@/Components/Button";

function Navigations() {
  return (
    <nav className="container max-w-6xl relative mx-auto flex justify-between px-10 py-7 items-center mb-20">
      <div>
        <Link href={"/"}>
          <Image src={logo} width={50} />
        </Link>
      </div>
      <ul className="hidden font-semibold md:flex md:space-x-5 md:visible text-sm items-center">
        <li className="cursor-pointer hover:text-slate-700">Home</li>
        <li className="cursor-pointer hover:text-slate-700">About</li>
        <li className="cursor-pointer hover:text-slate-700">Contact</li>
        <li className="cursor-pointer hover:text-slate-700">Social</li>
        <Button />
      </ul>
      <DropDown />
    </nav>
  );
}

export default Navigations;
