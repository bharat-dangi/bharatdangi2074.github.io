import Image from "next/image";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16 md:pt-24 md:pb-8">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0">
        <SectionHeader title="About Me" subtitle="My Introduction" />

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12">
          {/* Profile image */}
          <Image
            src="/images/profile.jpeg"
            alt="Bharat Dangi profile photo"
            width={350}
            height={450}
            priority
            className="w-50 md:w-87.5 rounded-lg justify-self-center self-start"
          />

          {/* About data */}
          <div>
            <p className="text-sm text-(--text-color) mb-10 leading-relaxed">
              Senior Software Engineer with 5+ years of experience building scalable,
              high-performance web applications for enterprise clients. Based in{" "}
              <strong className="text-(--title-color)">Sydney, New South Wales, Australia</strong>,
              I currently work at Arrow Transport Logistics & Quarantine Services, developing
              enterprise logistics platforms using .NET Core, React.js, TypeScript, and MobX.
              <br />
              <br />
              Previously at PortPro, I led a team of 5+ engineers and delivered significant
              results: reduced API costs by 87.5% ($12K → $1.5K) through intelligent caching,
              reduced database storage by 88% (700GB → 80GB) via strategic migration to
              TimeScaleDB, and improved system throughput by 40%. I am skilled in cloud
              technologies — AWS Lambda, ECS, Docker, Kubernetes — and monitoring tools
              such as New Relic, ElasticSearch, and Kibana.
              <br />
              <br />
              I hold a Master of Information Technology from Australian Catholic University,
              Sydney, and a Bachelor of Engineering in Computer Engineering from Tribhuvan
              University, Nepal. I&apos;m always looking to connect with like-minded professionals
              and explore new opportunities to drive innovation. Let&apos;s connect and see how
              we can collaborate to achieve your goals!
            </p>

            {/* Stats */}
            <div className="flex justify-evenly mb-10 md:justify-between">
              <div className="text-center">
                <span className="block text-2xl font-semibold text-(--title-color)">05+</span>
                <span className="text-xs text-(--text-color)">
                  Years
                  <br />
                  of building
                  <br />
                  awesome
                  <br />
                  applications
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-semibold text-(--title-color)">03</span>
                <span className="text-xs text-(--text-color)">
                  Companies
                  <br />
                  worked
                </span>
              </div>
            </div>

            {/* Download CV */}
            <div className="flex justify-center md:justify-start">
              <Button
                href="/pdf/Bharat Dangi - Senior Software Engineer.pdf"
                download
                variant="contained"
                endIcon={<DownloadIcon />}
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
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
