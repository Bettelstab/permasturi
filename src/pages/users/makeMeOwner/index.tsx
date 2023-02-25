import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

import Navigation from "lib/layout/Navigation";
import { api } from "utils/api";
import styles from "./Users.module.css";
import { useEffect } from "react";

const MakeMeOwner: NextPage = () => {
  // const makeMeOwner = api.user.makeMeOwner.useMutation();

  return null;

  /*
  return (
    <>
      <Head>
        <title>Permasturi</title>
        <meta name="description" content="Permacultura en Gijón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <button onClick={() => makeMeOwner.mutate()}>Make me owner</button>
      </main>
    </>
  );
    */
};

export default MakeMeOwner;
