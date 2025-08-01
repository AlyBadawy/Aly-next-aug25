import Link from "next/link";
import { FaEnvelope, FaFileAlt, FaUser } from "react-icons/fa";

export const ContactHireSection = () => {
  return (
    <div className="container mx-auto">
      <section
        id="contact"
        className="flex flex-col items-center py-16 px-4 bg-zinc-950 rounded-xl my-10 shadow-lg"
      >
        <h2
          className="text-2xl md:text-4xl font-semibold mb-4 text-cyan-300"
          data-aos="fade-up"
        >
          Ready to work together?
        </h2>
        <p
          className="text-gray-400 mb-8 max-w-2xl text-center"
          data-aos="fade-up"
          data-aos-delay={50}
        >
          Whether you need secure web applications, custom embedded systems, or
          just want to chat about your next project, let’s connect. Reach out
          and I’ll respond quickly—your ideas are welcome here!
        </p>
        <div
          className="flex flex-wrap gap-6 justify-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <a
            href="mailto:aly.badawy@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold shadow hover:from-fuchsia-600 hover:to-cyan-600 transition-colors"
          >
            <FaEnvelope /> Contact Me
          </a>
          <Link
            href="/resume"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300 bg-zinc-900 hover:bg-zinc-800 font-bold transition-colors"
          >
            <FaFileAlt /> See Resume
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-fuchsia-400 text-fuchsia-300 bg-zinc-900 hover:bg-zinc-800 font-bold transition-colors"
          >
            <FaUser /> About Me
          </Link>
        </div>
      </section>
    </div>
  );
};
