import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <span style={{ color: "red" }}>홈으로</span>
      </Link>
      <p></p>
      <Link href="/about">어바웃으로</Link>
    </nav>
  );
}
