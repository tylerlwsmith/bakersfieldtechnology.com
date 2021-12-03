import ScrollLink from "components/ScrollLink";

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

function ListTitle({ className = "", ...props }) {
  return <h3 className={`mb-2 text-lg sm:text-xl ${className}`} {...props} />;
}

function List({ className = "", style = {}, ...props }) {
  return (
    <ul
      className={`text-gray-500 mb-6 ${className}`}
      style={{ columnCount: 2, ...style }}
      {...props}
    />
  );
}

function ListItem({ className = "", ...props }) {
  return <li className={`sm:text-lg sm:mb-1 ${className}`} {...props} />;
}

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

        <ListTitle>Tools</ListTitle>
        <List>
          {tools.map((tool) => (
            <ListItem key={tool} children={tool} />
          ))}
        </List>

        <ListTitle>Lanuages</ListTitle>
        <List>
          {languages.map((language) => (
            <ListItem key={language} children={language} />
          ))}
        </List>

        <div className="text-sm pt-2 text-gray-500">
          <p>
            Don't see your organization's tools listed on here? <br />
            <ScrollLink href="#contact" className="underline">
              Send an email anyway
            </ScrollLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
