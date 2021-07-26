import { FaBitcoin } from "react-icons/fa";
import { Coin } from "../types/coin";

interface Props {
  coin: Coin;
}

export default function AssetCard({ coin }: Props) {
  return (
    <div className="rounded-md shadow-md">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center">
          {/* <FaBitcoin size="36" /> */}
          <div className="rounded-full bg-black text-white h-12 w-12 flex justify-center items-center text-sm">
            {coin.symbol}
          </div>
          <div className="pl-4">
            <h1 className="font-bold">{coin.name}</h1>
          </div>
        </div>
        <span className="bg-gray-100 border-gray-300 border rounded-2xl text-xs p-1">
          24H
        </span>
      </div>
      <div className="flex justify-between p-4 items-center">
        <span>
          {coin.quote.USD.price
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          USD
        </span>
        {coin.quote.USD.percent_change_24h > 0 ? (
          <span className="text-green-500">
            +{coin.quote.USD.percent_change_24h.toFixed(2)}%
          </span>
        ) : (
          <span className="text-red-500">
            {coin.quote.USD.percent_change_24h.toFixed(2)}%
          </span>
        )}
      </div>
    </div>
  );
}
