import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollLink from "components/ScrollLink";
import Hero from "components/homepage/Hero";
import Technologies from "components/homepage/Technologies";
import Services from "components/homepage/Services";
import About from "components/homepage/About";
import Contact from "components/homepage/Contact";

interface PageSection {
  component: React.ReactNode;
  menuTitle: string;
  id: string;
}

const pageSections: PageSection[] = [
  {
    component: <Services />,
    menuTitle: "Services",
    id: "services",
  },
  {
    component: <Technologies />,
    menuTitle: "Technologies",
    id: "technologies",
  },
  {
    component: <About />,
    menuTitle: "About",
    id: "about",
  },
  {
    component: <Contact />,
    menuTitle: "Contact",
    id: "contact",
  },
].filter((item) => item);

function Home() {
  useEffect(function () {
    console.log(
      "Want to view the source for this site? Go to https://github.com/tylerlwsmith/bakersfieldtechnology.com"
    );
  }, []);
  return (
    <React.Fragment>
      {/* https://blog.jarrodwatts.com/track-user-behaviour-on-your-website-with-google-analytics-and-nextjs */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PQ033CGTYZ"
      />
      <Script>
        {`
            <!-- Global site tag (gtag.js) - Google Analytics -->


            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-PQ033CGTYZ');
        `}
      </Script>

      <Head>
        <title>Bakersfield Technology: Website and app development</title>
        <meta
          name="description"
          content="Building technology for Bakersfield's digital needs."
        />
        {"<!-- Testing -->"}
        <meta property="og:site_name" content="Bakersfield Technology" />
        <meta
          property="og:description"
          content="Building technology for Bakersfield's digital needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Bakersfield Technology" />
        <meta property="og:url" content="https://bakersfieldtechnology.com" />
        <meta
          property="og:image"
          content="https://bakersfieldtechnology.com/og-image.jpg"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative">
        <nav
          className="
            absolute left-0 right-0 top-0 text-white p-8 z-10
            hidden
            sm:block
          "
        >
          <ul className="flex justify-end">
            {pageSections.map((section) => (
              <li key={section.id} className="mx-4">
                <ScrollLink
                  className="border-b border-transparent hover:border-white transition-all p-1.5"
                  href={`#${section.id}`}
                >
                  {section.menuTitle}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          <Hero />

          {pageSections.map((section) => (
            <section id={section.id} key={section.id} className="bg-white">
              {section.component}
            </section>
          ))}
        </main>

        <footer className="bg-gray-900 px-10 py-4 text-gray-300 text-center text-md">
          ©{" "}
          <a
            href="https://deadhandmedia.com/"
            className="text-pink-500 underline"
          >
            Tyler Smith
          </a>{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
