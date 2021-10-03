export default function FadeIn({ children, show, className = "" }) {
  return (
    <div
      className={`
        transform-gpu transition ease-out duration-300
        ${show ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
