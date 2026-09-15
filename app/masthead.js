import Link from "next/link";

export default function Masthead({ back = false }) {
  return (
    <header className="masthead">
      <Link href="/" className="wordmark">
        <img src="/marks/phoky.png" alt="" />
        <span>Phoky</span>
      </Link>
      {back && (
        <nav>
          <Link href="/">Retour à l&apos;accueil</Link>
        </nav>
      )}
    </header>
  );
}
