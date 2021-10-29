import React, { useState, useEffect, useRef } from "react";
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
import FadeIn from "components/FadeIn";

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
    serviceName: "White-label development",
  },
];

function Service({ children }) {
  return (
    <div
      className={`
        bg-gradient-to-br from-pink-600 to-purple-500 text-white
        py-4 rounded-2xl px-6 drop-shadow-lg w-full
      `}
      children={children}
    />
  );
}

function ServiceName({ children }) {
  return (
    <div className="font-bold text-lg tracking-wide" children={children} />
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
        if (animationStarted) return;

        if (entries[0].isIntersecting === true) {
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
        // threshold: 1, // Unsure of the ideal value here.
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
        <div
          className="
            prose text-center text-gray-700 font-light mb-6 
            text-2xl px-6
            sm:text-3xl sm:px-8
          "
        >
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
          <li key={index} className="flex">
            <FadeIn
              show={visibilityIndex >= index}
              className="w-full flex items-stretch"
            >
              <Service>
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceName>{service.serviceName}</ServiceName>
              </Service>
            </FadeIn>
          </li>
        ))}
      </ul>
    </div>
  );
}
