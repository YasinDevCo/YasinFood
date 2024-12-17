import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ childern }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">YasinFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{childern}</div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/yasindevco"
          target="_blank"
          rel="noreferrer"
        >
          YasinDevCo 👨‍💻
        </a>
        {" "}|{" "} Next.js Site create whith ❤️
      </footer>
    </div>
  );
}

export default Layout;
