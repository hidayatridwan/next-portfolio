import { Book, Cross, Inbox, SoupIcon, Table } from "lucide-react";
import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <SoupIcon />,
  },
  {
    path: "/linkedin",
    name: <Book />,
  },
  {
    path: "/github",
    name: <Table />,
  },
  {
    path: "/facebook",
    name: <Inbox />,
  },
  {
    path: "/instagram",
    name: <Cross />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, idx) => {
        return (
          <Link href={icon.path} key={idx}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
