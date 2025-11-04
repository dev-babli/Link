"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook,
  SiMongodb, SiPostgresql, SiPython, SiGraphql, SiKubernetes
} from "react-icons/si";

const fallbackUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png"
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiGraphql, color: "#E10098" },
  { Icon: SiKubernetes, color: "#326CE5" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaGoogle, color: "#DB4437" },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full max-w-[1920px] mx-auto my-32 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between min-h-[30rem] border border-gray-200 bg-white overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-full lg:w-1/2 z-10 py-12 lg:py-0">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#000000]">
          Build your idea
        </h1>
        <p className="text-[#666666] mb-6 max-w-lg">
          Link Innovations provides modern and responsive solutions using React, Next.js, and cutting-edge technologies.
        </p>
        <div className="flex items-center gap-3">
          <Link href="#contact" target="_blank" className="[&_*]:!text-white">
            <Button 
              variant="default" 
              className="bg-[#000000] hover:bg-[#333333] get-started-btn" 
              style={{ backgroundColor: '#000000', color: '#ffffff' }}
            >
              <span style={{ color: '#ffffff !important' }}>Get Started</span>
            </Button>
          </Link>
          <Button variant="outline" className="border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-white">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full flex items-center justify-center lg:justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] lg:translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200">
            <FaReact className="w-12 h-12 text-blue-400" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-gray-300"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-white rounded-full p-2 shadow-md border border-gray-100 flex items-center justify-center"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          width: '3rem',
                          height: '3rem',
                        }}
                      >
                        {cfg.Icon ? (
                          <cfg.Icon className="w-7 h-7" style={{ color: cfg.color }} />
                        ) : cfg.img ? (
                          <img
                            src={cfg.img}
                            alt="icon"
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              // Replace with React icon if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent && !parent.querySelector('.fallback-icon')) {
                                const reactIcon = document.createElement('div');
                                reactIcon.className = 'fallback-icon';
                                reactIcon.innerHTML = '<svg class="w-7 h-7" style="color: #61DAFB" viewBox="0 0 24 24"><path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278a2.416 2.416 0 0 0-.857 1.014c-.12.26-.178.533-.178.808 0 .62.216 1.35.61 2.174.393.825.956 1.7 1.647 2.583a37.42 37.42 0 0 0 2.778 3.103l.798.792a.884.884 0 0 0 1.19 0l.8-.79a38.21 38.21 0 0 0 2.777-3.1c.69-.883 1.253-1.76 1.646-2.583.394-.825.61-1.553.61-2.174 0-.275-.06-.549-.178-.808a2.395 2.395 0 0 0-.856-1.014c-.323-.185-.696-.278-1.107-.278z"/></svg>';
                                parent.appendChild(reactIcon);
                              }
                            }}
                          />
                        ) : null}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

