import React, { useRef, useState } from "react";
import "./WhatWeDo.css";

import webdev from "../assets/feature/webdev.png";
import mobile from "../assets/feature/mobile.jpeg";
import ai from "../assets/feature/AI.jpeg";
import custom from "../assets/feature/custom.jpeg";
import support from "../assets/feature/suppport.jpeg";

type Service = {
  title: string;
  desc: string[];
  img: string;
};

const servicesData: Service[] = [
  {
    title: "Web Development",
    desc: [
      "We build fast, secure, and scalable",
      "websites using modern technologies.",
    ],
    img: webdev,
  },
  {
    title: "Mobile App Development",
    desc: [
      "We design and develop high-quality",
      "Android and iOS applications.",
    ],
    img: mobile,
  },
  {
    title: "AI & Automation",
    desc: [
      "We create AI-powered systems to automate",
      "workflows and enhance decision-making.",
    ],
    img: ai,
  },
  {
    title: "Custom Software",
    desc: [
      "We develop tailored software",
      "designed around your business needs.",
    ],
    img: custom,
  },
  {
    title: "Maintenance & Support",
    desc: [
      "We provide continuous monitoring,",
      "updates, and technical support.",
    ],
    img: support,
  },
];

const WhatWeDo: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // speed multiplier

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="services">
      <div
        className="services-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="services-track">
          {[...servicesData, ...servicesData].map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              {service.desc.map((line, i) => (
                <p key={i}>{line}</p>
              ))}

              <img src={service.img} alt={service.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
