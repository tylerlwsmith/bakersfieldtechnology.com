// @ts-nocheck
export default function ScrollLink({ href, ...props }) {
  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    const sectionId = new URL(event.target.href).hash;
    const section = document.querySelector(sectionId);
    if (!section) return;

    const hasTabIndex = section.hasAttribute("tabindex");
    const hasOutline = section.style.outline ? true : false;

    !hasTabIndex && section.setAttribute("tabindex", "-1");
    !hasOutline && (section.style.outline = "none");

    section.focus();

    section.addEventListener("blur", function blurListener() {
      section.removeEventListener("blur", blurListener);
      !hasTabIndex && section.removeAttribute("tabindex");
      !hasOutline && section.style.removeProperty("outline");
    });
  }
  return <a {...props} href={href} onClick={scrollToSection} />;
}
