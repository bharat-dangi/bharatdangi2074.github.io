import Image from "next/image";
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Message";

export default function ProjectCTA() {
  return (
    <section className="py-8 text-center md:text-left">
      <div
        className="py-12 md:rounded-2xl md:px-10"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div className="max-w-[768px] mx-auto px-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:px-4 lg:px-0">
          <div className="pt-3">
            <h2 className="text-xl font-semibold text-white mb-3">
              You have a new project?
            </h2>
            <p className="text-sm text-white/80 mb-6">
              Contact me now and get a 30% discount on your new project.
            </p>
            <Button
              href="#contact"
              variant="contained"
              endIcon={<MessageIcon />}
              sx={{
                bgcolor: "#fff",
                color: "var(--primary)",
                textTransform: "none",
                borderRadius: "0.5rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                "&:hover": { bgcolor: "#fff" },
              }}
            >
              Contact Me
            </Button>
          </div>
          <Image
            src="/images/project.png"
            alt="New project illustration"
            width={232}
            height={200}
            className="justify-self-center md:justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}
