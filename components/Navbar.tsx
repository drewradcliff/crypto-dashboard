import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../lib/auth";

export default function Navbar() {
  const router = useRouter();
  const { auth, signOut } = useAuth();

  useEffect(() => {
    !auth && router.push("/login");
  }, [auth]);

  return (
    <div className="border-b-2">
      <div className="flex justify-between m-4">
        <Link href={`${auth ? "/" : "/login"}`}>
          <Image
            src="/logo.svg"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </Link>
        {auth ? (
          <a className="cursor-pointer" onClick={signOut}>
            Logout
          </a>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </div>
    </div>
  );
}
