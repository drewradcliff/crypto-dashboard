import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useAuth } from "../lib/auth";

export default function Login() {
  const { auth, siginWithGoogle } = useAuth();
  const router = useRouter();

  if (auth) {
    router.push((router.query.next as string) || "/");
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-within-screen">
        <div className="max-w-xl flex flex-col justify-center p-4">
          <div className="text-center">
            <h1 className="text-5xl">Log in to Dashboard</h1>
          </div>
          <div className="max-w-xs w-full self-center mt-4">
            <button
              className="w-full mt-2 py-2 bg-blue-700 rounded text-white"
              onClick={() => siginWithGoogle()}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
