import Image from "next/image";
import hero from "../../../public/hero.svg";
import Button from "@/Components/Button";
function Hero() {
  return (
    <main className="container max-w-6xl mx-auto flex px-10 items-center md:flex-row md:space-x-6 flex-col-reverse mb-20">
      <div className="md:w-1/2 flex justify-center flex-col space-y-6">
        <h1 className="md:text-start capitalize font-extrabold text-4xl leading-tight text-center">
          Empowering Your Online Presence with Strategic Digital Solutions
        </h1>
        <p className="text-slate-500">
          At PixelPulse Digital, we specialize in crafting tailored digital
          marketing strategies that amplify your brand's voice, engage your
          audience.
        </p>
        <Button />
      </div>
      <div className="md:w-1/2 mb-10">
        <Image src={hero} width={500} height={500} />
      </div>
    </main>
  );
}

export default Hero;
