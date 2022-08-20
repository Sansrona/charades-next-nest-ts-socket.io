import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className={styles.container}>
        <h1>Charades</h1>
        <p>
          Сыграй в шарады с друзьями.
          <br /> Догадаются ли они что ты думаешь?
        </p>
        <button className={styles.startGameBtn}>Создать игру</button>
      </div>
    </div>
  );
};

export default Home;
