"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underLinkStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
        <Link
          href={link.path}
          className={`capitalize ${linkStyles}`}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
