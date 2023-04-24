import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row-reverse">
      <div>
        {/* <img src="/earth4.png"></img> */}
        <Image src="/earth4.png" width={40} height={40}></Image>
      </div>
      <div>
        <Link href="/" className="text-xl m-4 text-pink-700">
          Home
        </Link>
        <Link href="/blogs" className="text-xl m-4 text-pink-700">
          Blogs
        </Link>
        <Link href="/media" className="text-xl m-4 text-pink-700">
          Media
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
<div>
  <a> Home </a>
  <a> Blogs </a>
  <a> Media </a>
</div>;
