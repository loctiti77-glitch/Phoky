import Link from "next/link";
import Masthead from "./masthead";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Masthead />

      <main className="shelf">
        {products.map((p) => (
          <Link key={p.slug} href={`/${p.slug}`} className="panel">
            <div className="panel__mark">
              <img src={p.mark} alt="" />
            </div>

            <div>
              <h2 className="panel__name">{p.name}</h2>
              <p className="panel__tagline">{p.tagline}</p>
            </div>

            <div className="panel__foot">
              <span>Découvrir</span>
              <span className="panel__status">{p.status}</span>
            </div>
          </Link>
        ))}
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Phoky</span>
      </footer>
    </>
  );
}
