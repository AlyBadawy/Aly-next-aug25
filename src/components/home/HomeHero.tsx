import Image from "next/image";
import { ScrambleText } from "../ScrambleText";

export const HomeHero = () => {
  return (
    <div className="container mx-auto p-4 min-h-full">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 items-center">
        {/* MAIN HEADLINE + BIO */}
        <div className="col-span-5" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:leading-[1] font-extrabold font-sans text-shadow-lg text-gray-200">
            Crafting
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500 animate-gradient">
              Practical Solutions
            </span>
            <br />
            <span className="font-light">
              as a <em>Software Engineer</em>
            </span>
          </h1>
          <section className="mt-8 max-w-3xl text-gray-400">
            <p className="font-normal text-dimWhite">
              Hi 👋 I’m <strong>Aly Badawy</strong>,
            </p>
            <p className="mt-2">
              A senior software and embedded systems engineer based in Wayne,
              NJ.
            </p>
            <p className="mt-2">
              I specialize in secure web applications (Ruby on Rails), custom
              STM32/ARM firmware, and advanced PCB/IoT systems. I deliver robust
              solutions across web, embedded, and hardware domains—focused on
              security, reliability, and continuous delivery.
            </p>
            <p className="mt-2">
              Whether I'm architecting web, desktop, or mobile applications,
              <br className="hidden md:inline" />
              building reusable embedded frameworks,
              <br className="hidden md:inline" />
              or prototyping hardware,
              <br className="hidden md:inline" />I help teams solve real-world
              challenges with{" "}
              <span className="text-gradient animate-gradient">
                tailored, high-quality software
              </span>
              .
            </p>
          </section>
          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow hover:from-fuchsia-500 hover:to-cyan-500 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume"
              className="px-6 py-3 rounded-lg font-semibold border border-cyan-400 text-cyan-300 bg-zinc-900 hover:bg-zinc-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Resume
            </a>
          </div>
        </div>
        {/* IMAGE + SECONDARY CTA */}
        <div className="col-span-2 mx-auto flex flex-col justify-between items-center align-middle">
          <Image
            src="/home-aly-pic.jpeg"
            alt="Aly Badawy profile"
            className="hidden lg:inline-block w-full max-w-sm md:max-w-md h-auto rounded-xl  shadow-blue-950 shadow-sm"
            data-aos="fade-left"
            width={800}
            height={800}
            priority
          />
          <button
            className="mt-8 p-3 border-2 rounded-lg text-zinc-300 border-zinc-400 cursor-pointer hover:bg-zinc-700 transition-colors duration-200"
            data-aos="zoom-in"
          >
            <ScrambleText text="View My Work" delay={400} start={1500} />
          </button>
        </div>
      </div>
    </div>
  );
};
