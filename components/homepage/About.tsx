import styles from "./About.module.scss";

export default function WhoAmI() {
  return (
    <div className={`pt-16 lg:pb-20 relative pb-60 ${styles.backgroundImage}`}>
      <div className={`hidden lg:block ${styles.gradient}`}></div>
      <div className="max-w-3xl mx-auto px-8 relative">
        <h2
          className="
            font-black mb-8 text-pink-600
            text-5xl
            sm:text-6xl
          "
        >
          Who am I?
        </h2>
        <div className="prose text-lg font-regular text-gray-500 not-antialiased leading-8 sm:leading-10">
          <p>
            My name is <strong>Tyler Smith</strong>. I was born and raised here
            in Bakersfield, then started my career in the tech industry while
            living in Sacramento in 2015. As I progressed in my career, I got to
            work on websites for some of the most well-funded ballot initiative
            campaigns in California's history, and I built tools that empowered
            voters and legislative decision-makers. When I went independent, my
            first client was Stan Lee of Marvel Comics fame.
          </p>

          <p>
            I returned to Bakersfield in 2019 and I'm eager to share my skills
            with the community that shaped who I am.
          </p>
        </div>
      </div>
    </div>
  );
}
