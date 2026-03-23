"use client";

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeService = services.find((s) => s.id === openId);

  return (
    <section id="services" className="pt-8 pb-16 md:pt-24 md:pb-8">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0">
        <SectionHeader title="Services" subtitle="What I offer" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewMore={() => setOpenId(service.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!openId}
        onClose={() => setOpenId(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "var(--container-bg)",
            color: "var(--text-color)",
            borderRadius: "0.5rem",
            p: 0.5,
          },
        }}
      >
        {activeService && (
          <>
            <DialogTitle
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "1.125rem",
                color: "var(--title-color)",
                pr: 6,
              }}
            >
              {activeService.title.replace("\n", " ")}
            </DialogTitle>
            <IconButton
              onClick={() => setOpenId(null)}
              aria-label="Close modal"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "var(--primary)",
                "&:hover": { color: "var(--primary-alt)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent sx={{ pt: 0 }}>
              <List dense>
                {activeService.bullets.map((bullet, i) => (
                  <ListItem key={i} alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <CheckCircleOutlineIcon
                        sx={{ color: "var(--primary)", fontSize: "1.1rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={bullet}
                      primaryTypographyProps={{
                        fontSize: "0.875rem",
                        color: "var(--text-color)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
}
