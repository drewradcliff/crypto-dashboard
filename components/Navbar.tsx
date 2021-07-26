import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "../components/UserDropdown";
import { useAuth } from "../lib/auth";

export default function Navbar() {
  const router = useRouter();
  const { auth, loading } = useAuth();

  useEffect(() => {
    if (!auth && !loading) {
      router.push("/login");
    }
  }, [auth, loading]);

  return (
    <div className="shadow-border">
      <div className="flex justify-between max-w-1048 mx-auto py-4">
        <Link href={auth ? "/" : "/login"}>
          <a>
            <Image
              src="/logo.svg"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </a>
        </Link>
        {auth ? (
          <UserDropdown />
        ) : (
          <Link href="/login">
            <a className="text-gray-500 hover:text-gray-700">Login</a>
          </Link>
        )}
      </div>
      {auth && (
        <div className="flex space-x-4 max-w-1048 mx-auto">
          <Link href="/">
            <a
              className={
                (router.pathname === "/"
                  ? "border-b-2 border-black text-gray-700"
                  : "text-gray-500") + " pb-2"
              }
            >
              Overview
            </a>
          </Link>
          <Link href="/settings">
            <a
              className={
                (router.pathname === "/settings"
                  ? "border-b-2 border-black text-gray-700"
                  : "text-gray-500") + " pb-2"
              }
            >
              Settings
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
