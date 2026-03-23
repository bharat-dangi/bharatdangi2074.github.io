import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer className="pt-8">
      <div
        className="py-8 md:py-12"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div className="max-w-[768px] mx-auto px-6 grid gap-8 md:grid-cols-3 md:items-center md:gap-12 md:px-4 lg:px-0">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">Bharat</h1>
            <span className="text-sm text-white/80">Senior Software Engineer</span>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6 md:flex-row md:gap-8">
            {[
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#contact", label: "Contact Me" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white hover:text-(--primary-lighter) transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex gap-6 md:justify-end">
            {[
              { href: "https://www.facebook.com/bharat.dangi.5070", Icon: FacebookIcon, label: "Facebook" },
              { href: "https://www.instagram.com/bharatdangi1511/", Icon: InstagramIcon, label: "Instagram" },
              { href: "https://twitter.com/dangibharat11", Icon: TwitterIcon, label: "Twitter" },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white text-xl hover:text-(--primary-lighter) transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-white/60 mt-12">
          &copy; Bharat. All rights reserved
        </p>
      </div>
    </footer>
  );
}
