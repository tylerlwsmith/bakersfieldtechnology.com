import Container from "components/Container";

export default function WhoAmI() {
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-6xl font-black mb-8">Who am I?</h2>
        <div className="prose text-xl font-light text-gray-700">
          <p>
            My name is <strong>Tyler Smith</strong>. I was born and raised here
            in Bakersfield. I started my career in the tech industry in
            Sacramento in 2015. As I progressed in my career, I went on to work
            on websites for the some of the most well-funded ballot initiative
            campaigns in Californa state's history and built tools that
            empowered voters and legislative decision makers. When I went
            independent, my first client was Stan Lee of Marvel Comics fame.
          </p>

          <p>
            I'm living in Bakersfield again and I'm eager to share my skills
            with the community that shaped who I am.
          </p>
        </div>
      </div>
    </div>
  );
}
