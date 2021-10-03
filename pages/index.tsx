import React from "react";
import Hero from "components/homepage/Hero";
import About from "components/homepage/About";
import Services from "components/homepage/Services";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
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
    component: <About />,
    menuTitle: "About",
    id: "about",
  },
  {
    component: <Contact />,
    menuTitle: "Contact",
    id: "contact",
  },
];

function Home() {
  return (
    <React.Fragment>
      <Head>
        {/* https://blog.jarrodwatts.com/track-user-behaviour-on-your-website-with-google-analytics-and-nextjs */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-PQ033CGTYZ"
        />
        <Script strategy="lazyOnload">
          {`
            <!-- Global site tag (gtag.js) - Google Analytics -->


            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-PQ033CGTYZ');
        `}
        </Script>
        <title>Bakersfield Technology: Website and app development</title>
        <meta
          name="description"
          content="Building technology for Bakersfield's digital needs."
        />

        <meta property="og:site_name" content="Bakersfield Technology" />
        <meta
          property="og:description"
          content="Building technology for Bakersfield's digital needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Homepage" />
        <meta property="og:url" content="https://bakersfieldtechnology.com" />
        <meta
          property="og:image"
          content="https://bakersfieldtechnology.com/og-image.jpg"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
                <a
                  className="border-b border-transparent hover:border-white transition-all p-1.5"
                  href={`#${section.id}`}
                >
                  {section.menuTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          <Hero />

          {pageSections.map((section) => (
            <section id={section.id} key={section.id}>
              {section.component}
            </section>
          ))}
        </main>

        <footer className="bg-gray-800 px-10 py-2 text-gray-300 text-center text-sm">
          © Tyler Smith {new Date().getFullYear()}
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
