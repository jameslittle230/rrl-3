import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/index.css";

const components = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-extrabold mb-8 text-gray-800">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-800">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-3 mb-6 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  li: ({ children }) => (
    <li className="pl-2 pb-3 leading-relaxed">{children}</li>
  ),
  a: ({ href, children }) => (
    <Link href={href} passhref>
      <a className="font-bold underline hover:opacity-60 cursor-pointer">
        {children}
      </a>
    </Link>
  ),
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.goatcounter.count({
        path: router.asPath,
      });
    }
  }, [router]);

  return <Component components={components} {...pageProps} />;
}
