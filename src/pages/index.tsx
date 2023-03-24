import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import Navigation from "lib/layout/Navigation";
import { api } from "utils/api";
import olivo from "images/olivo.jpeg";

const Home: NextPage = () => {
  const t = useTranslations("home");

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Permasturi</title>
        <meta name="description" content="Permacultura en Gijón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.hero}>
          <Image
            className={styles.heroImage}
            src={olivo}
            alt="Olive tree at Permasturi"
            fill
          />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>{t("title")}</h1>
          <div>{t("example")}</div>
          <div className={styles.volunteersContainer}>
            <h2>{t("volunteersTitle")}</h2>
            <div>{t("volunteersText")}</div>
            <Link href="/contact">{t("contact")}</Link>
          </div>
          <div className={styles.showcaseContainer}>
            <p className={styles.showcaseText}>
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <p>
        Visit user list: <Link href="/users">Go</Link>
      </p>
      <button
        className={styles.loginButton}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`translations/${locale}.json`)).default,
    },
  };
}
