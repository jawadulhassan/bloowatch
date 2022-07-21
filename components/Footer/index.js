import Image from "next/image";

import inst_1 from "../../public/static/INSTAGRAM_1.png";
import inst_2 from "../../public/static/INSTAGRAM_2.png";
import inst_3 from "../../public/static/INSTAGRAM_3.png";
import inst_4 from "../../public/static/INSTAGRAM_4.png";
import inst_5 from "../../public/static/INSTAGRAM_5.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sub-footer">
        <div className="footer-widget">
          <div className="bold-white-text">About</div>
          <div className="light-white-text">
            Bloowatch is specialized software for watersports schools (surfing,
            kitesurfing, sailing, and diving) and outdoor activity providers
            (skiing, climbing)
          </div>
        </div>
        <div className="footer-widget">
          <div className="bold-white-text">contact</div>
          <div className="light-white-text">156-677-124-442-2887</div>
          <br />
          <div className="light-white-text">wave@bloowatch.com</div>
          <br />
          <div className="light-white-text">Spain</div>
        </div>
        <div className="footer-widget">
          <div className="bold-white-text">useful links</div>
          <div className="light-white-text">About us</div>
          <br />
          <div className="light-white-text">History</div>
          <br />
          <div className="light-white-text">Contact us</div>
        </div>
        <div className="footer-widget">
          <div className="bold-white-text">instagram</div>
          <div className="flexed-row">
            <Image src={inst_1} alt="inst_1 image" width={50} height={50} />
            <div className="pl-1" />
            <Image src={inst_2} alt="inst_1 image" width={50} height={50} />
            <div className="pl-1" />
            <Image src={inst_3} alt="inst_1 image" width={50} height={50} />
            <div className="pl-1" />
            <Image src={inst_4} alt="inst_1 image" width={50} height={50} />
            <div className="pl-1" />
            <Image src={inst_5} alt="inst_1 image" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
