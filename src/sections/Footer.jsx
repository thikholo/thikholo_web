import Container from "../components/Container.jsx";
import logoInverse from "../assets/fig/logo-inverse.png";

import cod from "../assets/cod.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import american from "../assets/american.png";
import bkash from "../assets/bkash.png";
import rocket from "../assets/rocket.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const payments = [
  { src: cod, alt: "Cash on Delivery" },
  { src: visa, alt: "Visa" },
  { src: mastercard, alt: "Mastercard" },
  { src: american, alt: "American Express" },
  { src: bkash, alt: "bKash" },
  { src: rocket, alt: "Rocket" },
];

function PayLogo({ src, alt }) {
  return (
    <div
      className="
        flex items-center justify-center
        rounded-lg bg-white
        w-12 h-8
        lg:w-[56px] lg:h-9
        xl:w-[60px] xl:h-10
      "
      title={alt}
    >
      <img src={src} alt={alt} className="max-h-[70%] max-w-[80%] object-contain" />
    </div>
  );
}

export default function Footer() {
  return (
<footer id="footer" className="bg-[#17161A] text-white">
  <Container className="py-12">
    {/* Logo (centered + bigger) */}
    <div className="flex justify-center pb-14"> {/* 56px bottom padding */}
      <img
        src={logoInverse}
        alt="ThikHolo"
        className="
          w-auto
          h-[56px] sm:h-[64px] md:h-[72px] lg:h-[84px]
          xl:h-[92px] 2xl:h-[110px]
        "
      />
    </div>

    <div className="grid gap-10 md:grid-cols-5">
      {/* Important Links */}
      <div>
        <div className="text-base font-bold text-white">Important Links</div>
        <ul className="mt-6 grid gap-10 text-sm text-white/70">
          <li><a className="hover:text-white" href="#top">Home</a></li>
          <li><a className="hover:text-white" href="#services">Device Book</a></li>
          <li><a className="hover:text-white" href="#repair">Repair</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <div className="text-base font-bold text-white">Services</div>
        <ul className="mt-6 grid gap-10 text-sm text-white/70">
          <li><a className="hover:text-white" href="#services">Devices Repair</a></li>
          <li><a className="hover:text-white" href="#exchange">Exchange Devices</a></li>
          <li><a className="hover:text-white" href="#health">Device Health Check</a></li>
        </ul>
      </div>

      {/* Shops */}
      <div>
        <div className="text-base font-bold text-white">Shops</div>
        <ul className="mt-6 grid gap-10 text-sm text-white/70">
          <li className="flex gap-2">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-white/30" />
            <span>Rifles Square, Shimanto Shambhar Mall. Level 3. Shop 3053. Jigatola. Dhanmondi, Dhaka.</span>
          </li>
      
        </ul>
      </div>

      {/* Payments + Certifications */}
    <div>
      <div className="text-base font-bold text-white">Payments</div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {payments.map((p) => (
          <PayLogo key={p.alt} src={p.src} alt={p.alt} />
        ))}
      </div>
    </div>

        {/* Certifications */}
    <div>
      <div className="text-base font-bold text-white">Certifications</div>

      <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
          B
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
          E
        </div>
      </div>
    </div>
    </div>

    {/* Middle: contact/email/social */}
    <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
      <div>
        <div className="text-base font-bold text-white">Contact</div>
        <div className="mt-6 text-sm text-white/70">+8801738588006</div>
      </div>

      <div>
        <div className="text-base font-bold text-white">Email</div>
        <div className="mt-6 text-sm text-white/70">thikholo.live@gmail.com</div>
      </div>

      <div>
        <div className="text-base font-bold text-white">Social Links</div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-2">
            {["f", "in", "x", "yt"].map((t) => (
              <a
                key={t}
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white hover:bg-white/20"
                aria-label="social"
              >
                {t}
              </a>
            ))}
          </div>

          {/* Store icons (beside social links) */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-xl"
              aria-label="Apple Store"
            >
              <img src={apple} alt="Apple" className="h-6 w-auto" />
            </a>

            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-xl"
              aria-label="Google Play"
            >
              <img src={google} alt="Google" className="h-6 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
      <div className="text-xs text-white/60">© {new Date().getFullYear()} ThikHolo. Copyright</div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
<Link to="/terms-condition" className="hover:text-white">Terms &amp; Conditions</Link>
<Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
      </div>
    </div>
  </Container>
</footer>
  );
}
