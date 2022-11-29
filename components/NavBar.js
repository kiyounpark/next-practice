import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <span className={router.pathname === "/" && styles.active}>홈으로</span>
      </Link>

      <Link href="/about">
        <span className={router.pathname === "/about" && styles.active}>
          이건 좀;;
        </span>
      </Link>
    </nav>
  );
}
