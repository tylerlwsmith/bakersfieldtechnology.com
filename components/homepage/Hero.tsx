import { useState, useEffect, useRef } from "react";
import ScrollLink from "components/ScrollLink";
import FadeIn from "components/FadeIn";

const heroImageUrl = "/hero.jpg";

function InsetBackgroundImage() {
  /**
   * Using fixed position element for better scroll performance than using
   * `background-attachment: fixed`. Using `clip` to handle overflow issues
   * on fixed position element.
   *
   * Problem description:  https://medium.com/vehikl-news/fixed-background-image-performance-issue-6b7d9e2dbc55
   * Implemented solution: https://jsfiddle.net/lmeurs/jf3t0fmf/
   *
   * MacOS Chrome 95.0.4638.69 has a bug where sometimes the absolutely
   * positioned parent will disappear on scroll. To replicate at the time of
   * writing, comment out the useEffect hook, scroll to the very bottom of the
   * page, reload then scroll to the very top. The background will be missing.
   *
   * To fix this, an intersection observer is used to change the rect top value
   * from 0px to 1px on scroll. This forces the browser to rerender the
   * element, but it takes a pixel off the top.
   */
  const ref = useRef();
  const [inset, setInset] = useState(0);
  useEffect(function animate() {
    /** Keep a local reference so we can do cleanup without an error. */
    const observedRef = ref.current;
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === false) return;
        setInset((inset) => {
          return inset === 0 ? 1 : 0;
        });
      },
      {
        /**
         * If the page loads at the top pixel of the services section (which can
         * happen by clicking "Services" from the menu then reloading the page),
         * and scroll up, the background won't be loaded if the threshold is at
         * the default of 0. We will trigger the intersection callback again at
         * 0.1 to ensure that the image is visible.
         */
        threshold: [0, 0.1],
      }
    );
    observer.observe(observedRef);
    return () => observer.unobserve(observedRef);
  }, []);
  return (
    <div
      ref={ref}
      className="absolute inset-0 opacity-30 mix-blend-soft-light"
      style={{
        clip: `rect(${inset}px, auto, auto, 0)`,
      }}
    >
      <div
        className="z-0 inset-0 fixed bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      />
    </div>
  );
}

function InsetBackgroundImageOld() {
  return (
    <div
      className="z-0 inset-0 absolute bg-no-repeat bg-cover bg-center opacity-30 mix-blend-soft-light sm:bg-fixed"
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
  const [useNewBackground, setUseNewBackground] = useState(true); // performance test
  useEffect(
    () =>
      console.log(
        useNewBackground ? "Using fancy BG" : "Using background-attachment"
      ),
    [useNewBackground]
  );

  useEffect(function animate() {
    let numberOfItems = 3;

    onImageLoaded(heroImageUrl, () => {
      setTimeout(function () {
        const interval = setInterval(function () {
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
  function onImageLoaded(url, callback) {
    const img = new Image();
    img.src = url;
    img.onload = callback;
    img.onerror = callback;
    return;
  }

  return (
    <header
      style={{ willChange: "opacity" }}
      className="
        flex items-center
        min-h-screen bg-gradient-to-br 
        from-pink-600 to-purple-500 text-white
        px-6 sm:px-10 pt-24 pb-20 relative
      "
    >
      {useNewBackground ? (
        <InsetBackgroundImage />
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
