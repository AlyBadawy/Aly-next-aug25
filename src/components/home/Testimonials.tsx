import { FaLinkedin } from "react-icons/fa";
import { TESTIMONIALS } from "@/data/testimonials";

export const TestimonialsSection = () => {
  return (
    <div className="container mx-auto">
      <section
        id="testimonials"
        className="flex flex-col items-center p-4 pt-14"
      >
        <h2
          className="text-2xl md:text-4xl font-semibold mb-8"
          data-aos="fade-up"
        >
          Testimonials
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-cyan-800 rounded-lg shadow-md max-w-md p-6 flex flex-col items-center justify-between"
              data-aos="flip-left"
              data-aos-delay={i * 200}
            >
              <FaLinkedin className="text-cyan-500 text-3xl mb-3" />
              <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
              <div>
                <div className="font-bold text-cyan-200">{t.name}</div>
                <div className="text-xs text-fuchsia-400">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500">
          * All testimonials are from real clients and colleagues on{" "}
          <a
            href="https://www.linkedin.com/in/aly-badawy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            LinkedIn
          </a>
          .
        </div>
      </section>
    </div>
  );
};
