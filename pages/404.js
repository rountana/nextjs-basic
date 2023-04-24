import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NoPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    // <div className="flex text-center justify-center items-center">
    <div>
      <h1 className="text-blue-600"> Ooops... page not found</h1>
      <br></br>
      <p>
        <Link href="/">Return to home</Link>
      </p>
    </div>
  );
};

export default NoPage;
