import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        href="/"
        className={`noneUnderLine ${router.pathname === "/" && "active"}`}
      >
        홈으로
      </Link>
      <Link
        href="/about"
        className={`noneUnderLine ${router.pathname === "/about" && "active"}`}
      >
        어바웃으로
      </Link>
      <Link
        href="/wonhee"
        className={`noneUnderLine ${router.pathname === "/wonhee" && "active"}`}
      >
        원희에게로
      </Link>
      <style>{`
    .noneUnderLine {
        text-decoration : none;
        color : black;
    }
    .active{
        color : blue;
    }

`}</style>
    </nav>
  );
}
