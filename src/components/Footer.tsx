import Link from "next/link";
import { SketchLine, SketchArrow } from "./Gota";

const footerLinks = [
  {
    title: "Sobre m\u00ed",
    description: "Qui\u00e9n soy y por qu\u00e9 escribo.",
    href: "/sobre-mi",
    external: false,
  },
  {
    title: "Hablamos",
    description: "Si crees que puedo ayudarte, escr\u00edbeme.",
    href: "mailto:cristinaalcalazamora@gmail.com",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Mi perfil y mi actividad profesional.",
    href: "https://www.linkedin.com/in/cristina-alcal%C3%A1-zamora-borreguero/",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="pt-10 pb-14">
      <SketchLine className="w-full h-2 text-foreground mb-10" />

      {/* CTA columns */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {footerLinks.map((link) => {
          const Tag = link.external ? "a" : Link;
          const extraProps = link.external
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={link.title}
              href={link.href}
              className="group block"
              {...extraProps}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm font-medium group-hover:opacity-60 transition-opacity">
                  {link.title}
                </span>
                <SketchArrow className="w-4 h-2 text-foreground opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {link.description}
              </p>
            </Tag>
          );
        })}
      </div>

      <SketchLine className="w-full h-2 text-foreground mb-8" />

      <div
        className="flex items-center justify-between text-xs text-muted"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <span>cada gota cuenta</span>
        <span>Cristina Alcal&aacute;-Zamora &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
