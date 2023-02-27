import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { Role } from "@prisma/client";

import Navigation from "lib/layout/Navigation";
import { parseRole } from "utils/parseRole";
import { api } from "utils/api";
import styles from "./Users.module.css";

const Users: NextPage = () => {
  const t = useTranslations("users");

  const users = api.user.getAll.useQuery();

  const setRole = api.user.setRole.useMutation();

  const handleRoleChange = (userId: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole.mutate({ id: userId, role: parseRole(e.target.value)});
  };

  return (
    <>
      <Head>
        <title>Permasturi</title>
        <meta name="description" content="Permacultura en Gijón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t("title")}</h1>
          <div>
            {users.data?.map((user) => (
              <div key={user.id}>
                {user.name}
                <select defaultValue={user.role} onChange={handleRoleChange(user.id)}>
                  {Object.values(Role).map((role) => (
                    <option key={role} value={role}>{t(role)}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Users;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`translations/${locale}.json`)).default,
    },
  };
}
