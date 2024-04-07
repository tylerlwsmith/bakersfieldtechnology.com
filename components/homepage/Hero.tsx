import { useState, useEffect } from "react";
import ScrollLink from "components/ScrollLink";
import FadeIn from "components/FadeIn";

const heroImageUrl = "/hero.jpg";

function InsetBackgroundImageOld() {
  return (
    <div
      className="z-0 inset-0 absolute bg-no-repeat bg-cover bg-center opacity-30 mix-blend-soft-light sm:bg-fixed"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    />
  );
}

function InsetBackgroundImageNewest() {
  return (
    <div
      className="z-0 inset-0 fixed bg-no-repeat bg-cover bg-center opacity-30 mix-blend-soft-light"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
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
      className="
        mx-auto text-center
        sm:mx-0 sm:text-left
        sm:max-w-md
        md:max-w-2xl
      "
      children={children}
    />
  );
}

export default function Hero() {
  const [visibilityIndex, setVisibilityIndex] = useState(-1);
  const [useNewBackground, setUseNewBackground] = useState(false); // performance test
  useEffect(
    () =>
      console.log(
        useNewBackground ? "Optimized for RPi" : "Using background-attachment"
      ),
    [useNewBackground]
  );

  useEffect(function animate() {
    let numberOfItems = 3;

    onImageLoaded(heroImageUrl, () => {
      setTimeout(function() {
        const interval = setInterval(function() {
          setVisibilityIndex((currentIndex) => {
            const newIndex = currentIndex + 1;
            if (newIndex >= numberOfItems) clearInterval(interval);
            return newIndex;
          });
        }, 100);
      }, 100);
    });
  }, []);

  // https://stackoverflow.com/a/55358417/7759523
  function onImageLoaded(url: string, callback: (event: Event) => void) {
    const img = new Image();
    img.src = url;
    img.onload = callback;
    img.onerror = callback;
    return;
  }

  return (
    <header
      className="
        flex items-center
        min-h-screen bg-gradient-to-br
        from-pink-600 to-purple-500 text-white
        px-6 sm:px-10 pt-24 pb-20 relative
      "
    >
      {useNewBackground ? (
        <InsetBackgroundImageNewest />
      ) : (
        <InsetBackgroundImageOld />
      )}

      <CenteredContainer>
        <WidthConstrainer>
          <FadeIn show={visibilityIndex >= 0}>
            <h1
              className="
              font-black tracking-wide mb-8
              text-[12vw] leading-[1.0em]
              sm:text-7xl
              md:text-8xl
            "
            >
              <span onClick={() => setUseNewBackground((current) => !current)}>
                Bakersfield
              </span>{" "}
              Technology
            </h1>
          </FadeIn>

          <FadeIn show={visibilityIndex >= 1}>
            <p className="text-lg sm:text-2xl font-light tracking-wider mb-14">
              Building technology for Bakersfield's digital needs
            </p>
          </FadeIn>

          <FadeIn show={visibilityIndex >= 2}>
            <ScrollLink
              href="#services"
              className="
              inline-block tracking-widest border border-white rounded-full
              hover:bg-white hover:text-pink-600 transition
              text-regular px-10 py-3
              sm:text-lg sm:px-12
            "
            >
              Learn More
            </ScrollLink>
          </FadeIn>
        </WidthConstrainer>
      </CenteredContainer>
    </header>
  );
}
