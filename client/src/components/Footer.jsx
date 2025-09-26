import { assets, footerLinks } from "../assets/assets";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300/30 text-gray-600">
        
        {/* Brand Info */}
        <div className="max-w-[420px]">
          <img className="w-32" src={assets.logo} alt="ZestMart Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            We deliver fresh groceries and snacks straight to your door. 
            Trusted by thousands, we aim to make your shopping experience 
            simple and affordable.
          </p>
        </div>

        {/* Footer Links (except Follow Us) */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-6">
          {footerLinks
            .filter((section) => section.title !== "Follow Us") // 👈 Follow Us skip kar diya
            .map((section, index) => (
              <div key={index} className="min-w-[120px]">
                <h3 className="font-semibold text-gray-900 text-base mb-3 md:mb-5">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Contact Section */}
          <div className="min-w-[160px]">
            <h3 className="font-semibold text-gray-900 text-base mb-3 md:mb-5">
              Contact Us
            </h3>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:support@zestmart.com" className="hover:underline">
                  support@zestmart.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Patna, Bihar, India</span>
              </li>
            </ul>

            {/* Social Links (only here rakhe) */}
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook size={18} className="text-gray-600 hover:text-primary transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={18} className="text-gray-600 hover:text-primary transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter size={18} className="text-gray-600 hover:text-primary transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-medium">Himanshu Kumar</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
