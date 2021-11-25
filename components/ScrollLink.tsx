export default function ScrollLink({ href, ...props }) {
  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    // @ts-ignore
    const sectionId = new URL(event.target.href).hash;
    const section = document.querySelector(sectionId);
    section.scrollIntoView();
  }
  return <a {...props} href={href} onClick={scrollToSection} />;
}
