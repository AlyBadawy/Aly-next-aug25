import Image from "next/image";
import { PROJECTS } from "@/data/home-projects";

export const PortfolioSection = () => {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto my-8 p-4">
        <section id="portfolio" className="flex flex-col p-4 pt-14">
          <h2
            className="text-2xl md:text-5xl font-semibold mb-6"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {PROJECTS.map((proj, i) => (
              <div
                key={proj.title}
                className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg w-full max-w-xs p-5 flex flex-col items-center hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay={i * 75}
              >
                <Image
                  src={proj.img}
                  alt={proj.title}
                  className="h-24 w-24 rounded mb-4 opacity-80 dark:opacity-50"
                />
                <h3 className="font-bold text-lg text-cyan-300 mb-1">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-center mb-2">{proj.desc}</p>
                <div className="text-xs text-fuchsia-400 italic mb-2">
                  {proj.tech}
                </div>
                {/* If you want: */}
                {/* <span className="text-sm text-gray-500">Demo coming soon</span> */}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center" data-aos="fade-in">
            <p className="text-gray-400">
              Want a closer look or a private demo?{" "}
              <a
                href="#contact"
                className="text-gradient font-semibold underline hover:text-cyan-300 transition-colors"
              >
                Let's connect!
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
