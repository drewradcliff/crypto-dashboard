import Head from "next/head";
import Navbar from "../components/Navbar";
import AssetCard from "../components/AssetCard";
import { useAuth } from "../lib/auth";

export default function Home() {
  const { auth } = useAuth();

  return (
    <div>
      <Head>
        <title>Crypto Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="flex justify-between max-w-1048 mx-auto py-12">
          <h1 className="text-6xl max-w-1048">
            Hello, {auth?.name.split(" ")[0]}
          </h1>
          <button className="bg-black text-white rounded-md px-8 hover:bg-white hover:text-black border border-black h-10">
            Buy / Sell
          </button>
        </div>
        <div className="flex max-w-1048 mx-auto space-x-4">
          <AssetCard />
          <AssetCard />
          <AssetCard />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
