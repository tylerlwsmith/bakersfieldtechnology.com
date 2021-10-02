import { useState, useEffect } from "react";
import FadeIn from "components/FadeIn";

function InsetBackgroundImage() {
  return (
    <div
      className="z-0 inset-0 absolute bg-no-repeat bg-cover bg-center opacity-30 mix-blend-soft-light sm:bg-fixed"
      style={{ backgroundImage: "url(/hero2.jpeg)" }}
    />
  );
}

function CenteredContainer({ children }) {
  return (
    <div
      className="max-w-full w-[1000px] mx-auto relative z-10"
      children={children}
    />
  );
}

function WidthConstrainer({ children }) {
  return (
    <div
      className=" mx-auto max-w-[250px] sm:mx-0 sm:max-w-md md:max-w-2xl"
      children={children}
    />
  );
}

export default function Hero() {
  const [visibilityIndex, setVisibilityIndex] = useState(-1);

  useEffect(function animate() {
    let numberOfItems = 3;
    setTimeout(function () {
      const interval = setInterval(function () {
        setVisibilityIndex((currentIndex) => {
          const newIndex = currentIndex + 1;
          if (newIndex >= numberOfItems) clearInterval(interval);
          return newIndex;
        });
      }, 100);
    }, 100);
  }, []);

  return (
    <header
      className="
        flex items-center
        h-96 min-h-screen bg-gradient-to-br 
        from-pink-600 to-purple-500 text-white
        px-6 sm:px-10 pt-20 pb-16 relative
      "
    >
      <InsetBackgroundImage />
      <CenteredContainer>
        <WidthConstrainer>
          <FadeIn show={visibilityIndex >= 0}>
            <h1
              className="
              font-black tracking-wide mb-8
              text-4xl
              sm:text-7xl
              md:text-8xl
            "
            >
              Bakersfield Technology
            </h1>
          </FadeIn>

          <FadeIn show={visibilityIndex >= 1}>
            <p className="text-lg sm:text-2xl font-light tracking-wider mb-14">
              Building technology for Bakersfield's digital needs
            </p>
          </FadeIn>

          <FadeIn show={visibilityIndex >= 2}>
            <a
              href="#services"
              className="
              inline-block tracking-widest border border-white rounded-full
              hover:bg-white hover:text-pink-600 transition
              text-regular px-10 py-3
              sm:text-lg sm:px-12
            "
            >
              Learn More
            </a>
          </FadeIn>
        </WidthConstrainer>
      </CenteredContainer>
    </header>
  );
}
