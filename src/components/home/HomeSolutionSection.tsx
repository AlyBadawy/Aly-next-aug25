import { BsAppIndicator, BsCpu, BsShieldLock } from "react-icons/bs";
import { HomeSolution } from "./HomeSolution";

export const HomeSolutionSection = () => {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto my-8 p-4">
        <section
          id="solutions"
          className="flex flex-col p-4 pt-14 text-neutral-400"
        >
          <h2
            className="text-2xl md:text-5xl font-semibold text-white"
            data-aos="fade-up"
          >
            Solutions
          </h2>
          <div className="grid grid-flow-row xl:grid-flow-col auto-cols-auto gap-8 py-4">
            <HomeSolution title="DevSecOps" icon={<BsShieldLock />}>
              <>
                <p>
                  My passion lies at the intersection of software development
                  and DevSecOps— building applications that are not only
                  functional and performant, but also secure, scalable, and
                  resilient. I'm driven by the challenge of creating seamless
                  user experiences while ensuring the systems behind them are
                  built with security and automation from the ground up.
                </p>
                <p>
                  I enjoy designing and developing solutions that integrate
                  CI/CD pipelines, infrastructure as code, and proactive
                  security practices into the development lifecycle. Whether I’m
                  writing code, configuring cloud environments, or automating
                  compliance checks, I strive to deliver software that is both
                  innovative and trustworthy.
                </p>
              </>
            </HomeSolution>
            <HomeSolution title="Mobile Application" icon={<BsAppIndicator />}>
              <>
                <p>
                  Mobile app development is an exciting field, where I can
                  leverage my creativity, technical skills and passion to create
                  intuitive and user-friendly apps that enhance people&apos;s
                  daily lives.
                </p>
                <p>
                  I have developed a wide range of apps, from simple utility
                  apps to complex apps that integrate with various web services
                  and backend systems. I have a deep understanding of iOS
                  platform and its specific requirements, such as design
                  principles, Human Interface Guidelines and App Store
                  submission process. I have also experience in using various
                  mobile development frameworks and libraries such as UIKit,
                  CoreData, CoreLocation and more.
                </p>
              </>
            </HomeSolution>
            <HomeSolution title="IoT and Embedded Systems" icon={<BsCpu />}>
              <>
                <p>
                  IoT and embedded systems are at the forefront of technological
                  innovation, and I am passionate about creating solutions that
                  bridge the digital and physical worlds. My experience includes
                  working with microcontrollers, sensors, and actuators to build
                  intelligent systems that can sense, process, and act on data
                  in real-time.
                </p>
                <p>
                  I have a strong foundation in low-level programming and
                  hardware design, which allows me to optimize performance and
                  resource usage in my projects. Whether it's developing
                  firmware for a new device or creating a cloud-based platform
                  to manage IoT devices, I enjoy tackling the unique challenges
                  that come with embedded development.
                </p>
              </>
            </HomeSolution>
          </div>
        </section>
      </div>
    </div>
  );
};
