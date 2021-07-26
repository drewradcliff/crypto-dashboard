import Head from "next/head";
import Navbar from "../components/Navbar";
import AssetCard from "../components/AssetCard";
import { useAuth } from "../lib/auth";
import { GetStaticProps } from "next";
import axios from "axios";
import { Coin } from "../types/coin";

interface Props {
  data: {
    data: Coin[];
    status: {
      credit_count: number;
      elapsed: number;
      error_code: number;
      error_message: string | null;
      notice: string | null;
      timestamp: string;
      total_count: number;
    };
  };
}

export default function Home({ data }: Props) {
  const { auth } = useAuth();

  return (
    <div>
      <Head>
        <title>Crypto Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="max-w-1048 mx-auto py-12">
          <h1 className="text-6xl max-w-1048 mb-12">
            Hello {auth?.name ? auth.name.split(" ")[0] : " 👋"}
          </h1>
          <div className="space-y-4">
            {data.data.map((coin) => (
              <AssetCard key={coin.id} coin={coin} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD",
    {
      headers: {
        Accept: "application / json",
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
      },
    }
  );

  return {
    props: { data },
  };
};
