import React from "react";
import Hero from "components/homepage/Hero";
import About from "components/homepage/About";
import Services from "components/homepage/Services";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
    <div className="relative">
      <main>
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

        <Hero />

        {pageSections.map((section) => (
          <section id={section.id} key={section.id}>
            {section.component}
          </section>
        ))}
      </main>
    </div>
  );
}

export default Home;
