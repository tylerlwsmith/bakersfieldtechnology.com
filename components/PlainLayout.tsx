import Head from "next/head";

export default function PlainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
      <style jsx global>{`
        ul {
          padding: 1em 0;
          padding-left: 2em;
          list-style: initial;
        }
        p {
          margin-bottom: 1em;
        }
      `}</style>
      {children}
    </>
  );
}
