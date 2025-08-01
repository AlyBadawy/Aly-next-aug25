import { STATS } from "@/data/home-states";

export const QuickStats = () => {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto my-8 p-4">
        <section className="py-14 flex flex-col items-center">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-8 text-center"
            data-aos="fade-up"
          >
            By the Numbers
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-zinc-900 border border-zinc-700 rounded-lg p-6 w-40 shadow-md"
                data-aos="zoom-in"
                data-aos-delay={i * 75}
              >
                <span className="text-4xl mb-2">{stat.icon}</span>
                <span className="text-3xl font-bold text-cyan-300">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 text-center mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
