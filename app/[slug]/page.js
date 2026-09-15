import { notFound } from "next/navigation";
import Masthead from "../masthead";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Masthead back />

      <main className="product">
        <div className="product__head">
          <img className="product__mark" src={product.mark} alt="" />

          <div>
            <p className="product__status">{product.status}</p>
            <h1 className="product__name">{product.name}</h1>
            <p className="product__lead">{product.lead}</p>

            {product.action.href ? (
              <a
                className="action"
                href={product.action.href}
                target="_blank"
                rel="noreferrer"
              >
                {product.action.label}
              </a>
            ) : product.action.label ? (
              <span className="action action--idle">{product.action.label}</span>
            ) : null}
          </div>
        </div>

        <div className="blocks">
          {product.sections.map((section) => {
            const List = section.ordered ? "ol" : "ul";
            return (
              <section className="block" key={section.title}>
                <h2>{section.title}</h2>
                <List>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </List>
              </section>
            );
          })}
        </div>

        {product.links.length > 0 && (
          <div className="elsewhere">
            {product.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Phoky</span>
      </footer>
    </>
  );
}
