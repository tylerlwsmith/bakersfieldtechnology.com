import Container from "components/Container";

export default function Services() {
  return (
    <div className="pt-16 pb-6">
      <div className="max-w-3xl mx-auto px-8">
        <h2
          className="
            font-black mb-8 text-pink-600
            text-3xl
            xs:text-5xl
            sm:text-6xl
          "
        >
          Technologies
        </h2>
        <div className="prose text-xl font-light text-gray-500 not-antialiased leading-8 mb-8 max-w-xl">
          <p>
            Bakersfield Technology has experience with a wide variety of tools
            and languages. Here are some of our favorites.
          </p>
        </div>

        <h3 className="mb-2 text-lg">Tools</h3>
        <ul className="text-gray-500 mb-6" style={{ columnCount: 2 }}>
          <li>Laravel</li>
          <li>Django</li>
          <li>Ruby on Rails</li>
          <li>WordPress</li>
          <li>Docker</li>
          <li>Ansible</li>
          <li>Terraform</li>
          <li>React</li>
          <li>Next.js</li>
          <li>React Native</li>
          <li>Express.js</li>
          <li>Vue</li>
          <li>Svelte</li>
          <li>jQuery</li>
        </ul>

        <h3 className="mb-2 text-lg">Lanuages</h3>
        <ul className="text-gray-500 mb-6" style={{ columnCount: 2 }}>
          <li>JavaScript</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Ruby</li>
        </ul>

        <div className="text-sm max-w-sm pt-2 text-gray-500">
          <p>
            Don't see your organization's tools listed on here?{" "}
            <a href="/#contact">Send an email</a> and let's see what we can do.
          </p>
        </div>
      </div>
    </div>
  );
}
