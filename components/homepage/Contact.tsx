import Container from "components/Container";

export default function Contact() {
  return (
    <div className="bg-pink-50 pt-12 pb-16 px-6">
      <Container>
        <div>
          <h2 className="text-pink-600 text-5xl font-black mb-5 text-center sr-only">
            Contact
          </h2>
          <div className="text-center font-light text-gray-900 mx-auto">
            <p className="text-4xl mb-2 text-pink-600 font-black">
              Have a project in mind?
            </p>
            <p className="text-2xl mb-8">
              Get in touch and let's solve your problem together.
            </p>

            <a
              href="mailto:tylerlwsmith@gmail.com"
              target="_blank"
              rel="noopener"
              className="
                inline-block tracking-widest border 
                border-pink-600 bg-pink-600 text-white rounded-full
                hover:bg-white hover:border-pink-600 hover:text-pink-600  transition
                font-normal
                text-lg px-10 py-3
                sm:text-lg sm:px-12
              "
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
