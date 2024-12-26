import Link from "next/link";
import Image from "next/image";

const Navbar = ({ sideMenu }) => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>
      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            <Link href="/login" className="login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
