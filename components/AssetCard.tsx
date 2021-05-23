import { FaBitcoin } from "react-icons/fa";

export default function AssetCard() {
  return (
    <div className="rounded-md shadow-md w-full">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center">
          <FaBitcoin size="36" />
          <div className="pl-4">
            <h1 className="font-bold">Bitcoin</h1>
            <h2 className="text-gray-500">BTC</h2>
          </div>
        </div>
        <span className="bg-gray-100 border-gray-300 border rounded-2xl text-xs p-1">
          24H
        </span>
      </div>
      <div className="flex justify-between p-4 items-center">
        <span>18,245.4 USD</span>
        <span className="text-green-500">+2.73%</span>
      </div>
    </div>
  );
}
