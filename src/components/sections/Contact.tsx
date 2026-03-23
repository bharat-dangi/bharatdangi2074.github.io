"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import SectionHeader from "@/components/ui/SectionHeader";

const contactInfo = [
  { Icon: PhoneIcon, title: "Call Me", lines: ["0411627569"] },
  { Icon: EmailIcon, title: "Email", lines: ["bharatdangi1511@gmail.com", "bharatdangi2074@gmail.com"] },
  { Icon: LocationOnIcon, title: "Location", lines: ["Sydney, Australia"] },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(project || "New Project Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:bharatdangi1511@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      bgcolor: "var(--input-color)",
      color: "var(--text-color)",
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.938rem",
      borderRadius: "0.5rem",
      "& fieldset": { borderColor: "transparent" },
      "&:hover fieldset": { borderColor: "var(--primary)" },
      "&.Mui-focused fieldset": { borderColor: "var(--primary)" },
    },
    "& .MuiInputLabel-root": {
      color: "var(--title-color)",
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.75rem",
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "var(--primary)" },
  };

  return (
    <section id="contact" className="pt-8 pb-16 md:pt-24 md:pb-8">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0">
        <SectionHeader title="Contact Me" subtitle="Get in touch" />

        <div className="grid gap-12 sm:grid-cols-2">
          {/* Contact info */}
          <div>
            {contactInfo.map(({ Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-3 mb-8">
                <Icon sx={{ color: "var(--primary)", fontSize: "2rem" }} />
                <div>
                  <h3 className="text-lg font-medium text-(--title-color)">{title}</h3>
                  {lines.map((line) => (
                    <span key={line} className="block text-sm text-[hsl(250,8%,65%)]">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="grid gap-4 md:w-[460px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                size="small"
                required
                sx={inputSx}
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size="small"
                required
                sx={inputSx}
              />
            </div>
            <TextField
              label="Project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              variant="outlined"
              size="small"
              sx={inputSx}
            />
            <TextField
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
              multiline
              rows={7}
              sx={inputSx}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                bgcolor: "var(--primary)",
                color: "#fff",
                textTransform: "none",
                borderRadius: "0.5rem",
                fontFamily: "Poppins, sans-serif",
                alignSelf: "flex-start",
                px: 3,
                "&:hover": { bgcolor: "var(--primary-alt)" },
              }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
