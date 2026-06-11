import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-base-300/60 bg-base-200/30 px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-xl font-bold">Salman Khan</p>
            <p className="mt-1 text-sm opacity-70">
              React Native & Web Developer
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="btn btn-ghost btn-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <SocialLinks variant="square" />
        </div>

        <div className="mt-10 border-t border-base-300/40 pt-8 text-center text-sm opacity-60">
          <p>
            Built with React & Tailwind CSS by{" "}
            <span className="font-semibold text-base-content">Salman Khan</span>
          </p>
          <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
