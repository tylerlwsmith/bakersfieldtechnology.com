import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  TemplateIcon,
  SortDescendingIcon,
  GlobeAltIcon,
  ClipboardListIcon,
  ExclamationIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

import Container from "components/Container";

// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/Example.tsx:711-723

const services = [
  {
    icon: <GlobeAltIcon className="w-8" />,
    serviceName: "Web development",
  },
  {
    icon: <DeviceMobileIcon className="w-8" />,
    serviceName: "Mobile development",
  },
  {
    icon: <TemplateIcon className="w-8" />,
    serviceName: "Custom applications",
  },
  {
    icon: <SortDescendingIcon className="w-8" />,
    serviceName: "Data automation",
  },
  {
    icon: <DesktopComputerIcon className="w-8" />,
    serviceName: "Website design",
  },
  {
    icon: <ClipboardListIcon className="w-8" />,
    serviceName: "Website audits",
  },
  {
    icon: <ExclamationIcon className="w-8" />,
    serviceName: "Application maintenance",
  },
  {
    icon: <LightBulbIcon className="w-8" />,
    serviceName: "White-label",
  },
];

const Service = ({ children, show }) => (
  <li
    className={`
        bg-gradient-to-br from-pink-600 to-purple-500 text-white
        py-4 rounded-2xl px-6 drop-shadow-lg 
        transform-gpu transition ease-out duration-300
        ${show ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}
      `}
  >
    {children}
  </li>
);

function ServiceName({ children }) {
  return (
    <div className="font-semibold text-lg tracking-wide" children={children} />
  );
}

function IconWrapper({ children }) {
  return <div className="h-10 mb-1" children={children} />;
}

export default function Services() {
  const ref = useRef();
  const [visibilityIndex, setVisibilityIndex] = useState(-1);

  useEffect(function animate() {
    let animationStarted = false;
    const observer = new IntersectionObserver(
      function (entries) {
        console.log("intersect check function");
        if (entries[0].isIntersecting === true && animationStarted === false) {
          animationStarted = true;
          const interval = setInterval(function () {
            setVisibilityIndex((currentIndex) => {
              const newIndex = currentIndex + 1;
              if (newIndex >= services.length) clearInterval(interval);
              return newIndex;
            });
          }, 100);
        }
      },
      {
        root: null,
        rootMargin: "-200px",
        // threshold: 1,
      }
    );
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <div className="bg-pink-50 pt-12 pb-16">
      <Container>
        <h2 className="text-pink-600 text-5xl font-black mb-6 text-center">
          Services
        </h2>
        <div className="prose text-center text-3xl text-gray-700 font-light mb-6 px-8">
          <p>
            <strong className="font-normal">Bakersfield Technology</strong>'s{" "}
            services include:
          </p>
        </div>
      </Container>
      <ul
        ref={ref}
        className="
            grid pt-6 mx-auto gap-6 px-8
            xs:grid-cols-2 xs:px-4
            md:max-w-3xl md:grid-cols-4
            xl:max-w-7xl 
          "
      >
        {services.map((service, index) => (
          <Service key={index} show={visibilityIndex >= index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceName>{service.serviceName}</ServiceName>
          </Service>
        ))}
      </ul>
    </div>
  );
}
