import LanguageSwitcher from "lib/languageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default () => {
  const t = useTranslations("navigation");

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">🏠</Link>
        </li>
        <li>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li>
          <Link href="/contact">{t("contact")}</Link>
        </li>
        <li>
            <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export async function getStaticProps({locale}: {locale: string}) {
  return {
    props: {
      messages: (await import(`translations/${locale}.json`)).default
    }
  };
}

