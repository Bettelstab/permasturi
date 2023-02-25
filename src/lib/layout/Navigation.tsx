import LanguageSwitcher from "lib/languageSwitcher";
import Link from "next/link";

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">🏠</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
            <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};
