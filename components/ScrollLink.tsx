// @ts-nocheck
export default function ScrollLink({ href, ...props }) {
  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    const sectionId = new URL(event.target.href).hash;
    const section = document.querySelector(sectionId);
    if (!section) return;

    event.preventDefault();
    const hasTabIndex = section.hasAttribute("tabindex");
    const hasOutline = section.style.outline ? true : false;

    if (!hasTabIndex) section.setAttribute("tabindex", "-1");
    if (!hasOutline) section.style.outline = "none";

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    section.focus({ preventScroll: true });

    section.addEventListener("blur", function blurListener() {
      section.removeEventListener("blur", blurListener);
      if (!hasTabIndex) section.removeAttribute("tabindex");
      if (!hasOutline) section.style.removeProperty("outline");
    });
  }
  return <a {...props} href={href} onClick={scrollToSection} />;
}
