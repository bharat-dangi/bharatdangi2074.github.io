import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import MessageIcon from "@mui/icons-material/Message";
import MouseIcon from "@mui/icons-material/Mouse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const socialLinks = [
  { href: "https://www.linkedin.com/in/bharatdangi", Icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://github.com/bharat-dangi", Icon: GitHubIcon, label: "GitHub" },
  { href: "https://www.facebook.com/bharat.dangi.5070", Icon: FacebookIcon, label: "Facebook" },
];

export default function Hero() {
  return (
    <section id="home" className="py-8 pb-16 md:pb-8">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0 grid gap-4">

        {/* Mobile: flex column; sm+: 3-col grid */}
        <div className="flex flex-col items-center gap-6 pt-10 sm:grid sm:grid-cols-[max-content_1fr_1fr] sm:items-center sm:gap-8 md:pt-22">

          {/* Social icons — vertical column on sm+, hidden on mobile */}
          <div className="hidden sm:grid gap-4 content-start justify-items-start md:-translate-x-24">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl text-(--primary) hover:text-(--primary-alt) transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Blob + profile image — on sm+, moves to last col via order */}
          <div className="justify-self-center sm:order-1">
            <svg
              className="fill-(--primary) w-52 sm:w-60 md:w-67.5 lg:w-80"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" maskContentUnits="userSpaceOnUse">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <image href="/images/profile.png" x="12" y="18" width="170" height="170" />
              </g>
            </svg>
          </div>

          {/* Text content */}
          <div className="text-center sm:text-left w-full">
            <h1 className="text-4xl font-semibold text-(--title-color) mb-1 md:text-5xl lg:text-6xl">
              Hi, I&apos;am Bharat
            </h1>
            <h3 className="text-lg font-medium text-(--text-color) mb-3">
              Senior Software Engineer
            </h3>
            <p className="text-sm text-(--text-color) mb-6 leading-relaxed">
              Senior Software Engineer with 5+ years of experience building
              scalable, high-performance web applications for enterprise clients.
              Proven track record of cost optimization (87% reduction), performance
              improvement (40% throughput increase), and leading cross-functional teams.
              Expertise in full-stack development, cloud architecture, and microservices.
            </p>

            {/* Social icons — horizontal row on mobile only */}
            <div className="flex justify-center gap-6 mb-6 sm:hidden">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-2xl text-(--primary) hover:text-(--primary-alt) transition-colors"
                >
                  <Icon fontSize="inherit" />
                </a>
              ))}
            </div>

            <Button
              href="#contact"
              variant="contained"
              endIcon={<MessageIcon />}
              sx={{
                bgcolor: "var(--primary)",
                color: "#fff",
                textTransform: "none",
                borderRadius: "0.5rem",
                fontFamily: "Poppins, sans-serif",
                px: 2,
                "&:hover": { bgcolor: "var(--primary-alt)" },
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll down — desktop only */}
        <div className="hidden md:flex items-center mt-8 ml-12">
          <a
            href="#about"
            className="flex items-center gap-1 text-(--primary) hover:translate-y-1 transition-transform"
          >
            <MouseIcon sx={{ fontSize: "2rem" }} />
            <span className="text-sm font-medium text-(--title-color) mr-1">Scroll down</span>
            <KeyboardArrowDownIcon />
          </a>
        </div>

      </div>
    </section>
  );
}
