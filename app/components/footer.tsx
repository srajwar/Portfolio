import { FaLinkedinIn, FaRss } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time> {metaData.title}
      <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href={socialLinks.email} aria-label="Email">
          <TbMailFilled />
        </a>
        <a href="/rss.xml" aria-label="RSS feed">
          <FaRss />
        </a>
      </div>
    </small>
  );
}
