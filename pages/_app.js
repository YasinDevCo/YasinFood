import "../styles/globals.css";
import styles from "../components/layouts/Layout.module.css";
import Link from "next/link";
export default function App({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">YasinFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/yasindevco"
          target="_blank"
          rel="noreferrer"
        >
          YasinDevCo 👨‍💻
        </a>{" "}
        | Next.js Site create whith ❤️
      </footer>
    </>
  );
}
