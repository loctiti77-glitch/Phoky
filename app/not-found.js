import Link from "next/link";
import Masthead from "./masthead";

export const metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <>
      <Masthead back />
      <main className="missing">
        <h1>Cette page n&apos;existe pas</h1>
        <p>
          Le lien est peut-être ancien ou mal recopié. Revenez à l&apos;accueil pour
          retrouver Mai Coach, Collectra et Lisko.
        </p>
        <p>
          <Link href="/" className="action">
            Aller à l&apos;accueil
          </Link>
        </p>
      </main>
    </>
  );
}
