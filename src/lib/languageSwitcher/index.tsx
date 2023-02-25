import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { flag } from "./flag";
import { languageName } from "./languageName";

export default function LanguageSwitcher() {
  const { locale: currentLocale, locales, route, push } = useRouter();

  // Go to the same page in the other locale when select changes
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    push(route, route, { locale });
  };

  return (
    <select defaultValue={currentLocale} onChange={handleChange}>
      {locales?.map((locale) => (
        <option value={locale} key={locale} aria-label={languageName(locale)}>
          {flag(locale)}
        </option>
      ))}
    </select>
  );
}
