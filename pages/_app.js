import "@/styles/globals.css";
import Layout from "@/layout/Layout";
export default function App({ Component, pageProps, router }) {
  const showHeaderAndFooter = !["/signup", "/login"].includes(router.pathname);
  return (
    <Layout showHeaderAndFooter={showHeaderAndFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}
