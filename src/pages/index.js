import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon.com Spend less, smile more.</title>
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product feed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return {
    props: {
      products
    }
  };
}
