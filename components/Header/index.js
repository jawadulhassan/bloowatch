import Image from "next/image";

import logo from "../../public/static/logo.png";
import cart from "../../public/static/cart_black.png";

export default function Header() {
  return (
    <div className="header">
      <Image src={logo} alt="logo image" />
      <div className="header-left">
        <div className="bold-text">Shop</div>
        <div className="bold-text">blog</div>
        <div className="bold-text">search</div>
        <div className="bold-text">
          <Image src={cart} alt="cart" width={15} height={15} />
          cart
        </div>
      </div>
    </div>
  );
}
