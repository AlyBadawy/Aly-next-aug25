import Image from "next/image";
import HirePic from "@/assets/images/home-hire.png";
import Link from "next/link";

export const HireSection = () => {
  return (
    <div className="container mx-auto">
      <section id="solutions" className="flex flex-col p-4 pt-14">
        <h2
          className="text-2xl md:text-5xl font-semibold mb-2"
          data-aos="fade-up"
        >
          Need Robust, Tailored Solutions?
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center my-4 gap-8">
          <div className="w-1/2 md:w-1/3 flex-shrink-0" data-aos="fade-right">
            <Image
              src={HirePic}
              alt="Hire Me"
              className="w-full rounded-lg shadow-lg"
              width={500}
            />
          </div>
          <div className="flex-1 flex flex-col gap-5" data-aos="fade-left">
            <p>
              Tired of cookie-cutter software? I deliver{" "}
              <span className="text-gradient">bespoke engineering</span> for
              real-world needs—whether that’s secure web apps, custom embedded
              frameworks, or hardware that just works.
            </p>
            <p>
              My approach is simple: listen deeply, design smart, and build
              reliable systems that help you get ahead. I specialize in projects
              where quality and security aren’t optional, and where innovation
              meets accountability.
            </p>
            <p>
              From first sketches to final deployment, I’m your partner for
              bringing ideas to life—on time, and ready for tomorrow’s
              challenges. Let’s collaborate to create solutions that make an
              impact.
            </p>
            <Link href="/hire" className="mt-2">
              <span className="inline-block py-2 px-4 rounded-md border-2 border-cyan-700 hover:bg-cyan-900/30 transition-colors font-semibold text-gradient cursor-pointer">
                🤝🏻 Hire Me
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
