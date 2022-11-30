import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Image alt="로고 이미지" className="img" />
      <article>
        <Link
          href="/"
          className={`noneUnderLine ${router.pathname === "/" && "active"}`}
        >
          홈으로
        </Link>
        <Link
          href="/about"
          className={`noneUnderLine ${
            router.pathname === "/about" && "active"
          }`}
        >
          어바웃으로
        </Link>
      </article>

      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          padding-top: 20px;
          padding-bottom: 10px;
        }

        .noneUnderLine {
          text-decoration: none;
          color: black;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
