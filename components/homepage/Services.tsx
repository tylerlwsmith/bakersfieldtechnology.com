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

const variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hidden: {
    x: 10,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Service = motion(
  React.forwardRef(({ children }, ref: any) => (
    <motion.li
      variants={itemVariants}
      ref={ref}
      className="
      bg-gray-200 py-4 rounded-2xl px-6 drop-shadow-lg 
      bg-gradient-to-br from-pink-600 to-purple-500 text-white
    "
    >
      {children}
    </motion.li>
  ))
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
  const [visible, setVisible] = useState(false);
  useEffect(function animate() {
    const observer = new IntersectionObserver(
      function (entries) {
        console.log(entries[0]);
        if (entries[0].isIntersecting === true) {
          setVisible(true);
        } else {
          // setVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 1,
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
      <div ref={ref}>
        <motion.ul
          className="
            grid pt-6 mx-auto gap-6 px-8
            xs:grid-cols-2 xs:px-4
            md:max-w-3xl md:grid-cols-4
            xl:max-w-7xl 
          "
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={variants}
        >
          <Service>
            <IconWrapper>
              <GlobeAltIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Web development</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <DeviceMobileIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Mobile development</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <TemplateIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Custom applications</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <SortDescendingIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Data automation</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <DesktopComputerIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Website design</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <ClipboardListIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Website audits</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <ExclamationIcon className="w-8" />
            </IconWrapper>
            <ServiceName>Application maintenance</ServiceName>
          </Service>

          <Service>
            <IconWrapper>
              <LightBulbIcon className="w-8" />
            </IconWrapper>
            <ServiceName>White-label development</ServiceName>
          </Service>
        </motion.ul>
      </div>
    </div>
  );
}
