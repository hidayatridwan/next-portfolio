"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
        <Link
          href={link.path}
          className={`capitalize ${linkStyles}`}
          key={link.name}
        >
          {link.path === path && (
            <motion.span
              className={`${underLineStyles}`}
              layoutId="underline"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "twean" }}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
