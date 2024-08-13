import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky flex">
      <div className="container mx-auto py-2">
        <ul className="flex space-x-10 justify-between">
          <li>
            <Link href="/">
              <span
                className={`block p-2 text-center text-lg ${
                  pathname === "/" ? "font-bold" : ""
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <span
                className={`block p-2 text-center text-lg ${
                  pathname === "/products" ? "font-bold" : ""
                }`}
              >
                Products
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <span
                className={`block p-2 text-center text-lg ${
                  pathname === "/cart" ? "font-bold" : ""
                }`}
              >
                Cart
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
