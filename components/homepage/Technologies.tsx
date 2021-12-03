const tools = [
  "Laravel",
  "Django",
  "Ruby on Rails",
  "WordPress",
  "Docker",
  "Ansible",
  "Terraform",
  "React",
  "Next.js",
  "React Native",
  "Express.js",
  "Vue",
  "Svelte",
  "jQuery",
];

const languages = ["JavaScript", "Python", "PHP", "Ruby"];

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
            and languages. Here are some favorites.
          </p>
        </div>

        <h3 className="mb-2 text-xl">Tools</h3>
        <ul className="text-gray-500 mb-6" style={{ columnCount: 2 }}>
          {tools.map((tool) => (
            <li key={tool} className="text-lg" children={tool} />
          ))}
        </ul>

        <h3 className="mb-2 text-xl">Lanuages</h3>
        <ul className="text-gray-500 mb-6" style={{ columnCount: 2 }}>
          {languages.map((language) => (
            <li key={language} className="text-lg" children={language} />
          ))}
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
