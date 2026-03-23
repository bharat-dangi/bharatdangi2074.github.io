import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorageIcon from "@mui/icons-material/Storage";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import CodeIcon from "@mui/icons-material/Code";
import type { ServiceItem } from "@/types/portfolio";

const iconMap: Record<string, React.ElementType> = {
  ArrowForward: CodeIcon,
  Storage: StorageIcon,
  SmartToy: SmartToyIcon,
  WebAsset: WebAssetIcon,
};

interface Props {
  service: ServiceItem;
  onViewMore: () => void;
}

export default function ServiceCard({ service, onViewMore }: Readonly<Props>) {
  const Icon = iconMap[service.muiIcon] ?? CodeIcon;

  return (
    <div className="flex flex-col items-center text-center bg-(--container-bg) rounded-xl px-6 py-8 shadow-sm hover:shadow-md transition-shadow">
      <span
        className="flex items-center justify-center w-16 h-16 rounded-full mb-5"
        style={{ background: "hsl(250 69% 61% / 0.12)" }}
      >
        <Icon sx={{ color: "var(--primary)", fontSize: "2rem" }} />
      </span>
      <h3 className="text-base font-semibold text-(--title-color) mb-5 leading-snug">
        {service.title.replace("\n", " ")}
      </h3>
      <Button
        variant="text"
        size="small"
        endIcon={<ArrowForwardIcon />}
        onClick={onViewMore}
        sx={{
          color: "var(--primary)",
          fontSize: "0.813rem",
          p: 0,
          mt: "auto",
          textTransform: "none",
          fontFamily: "Poppins, sans-serif",
          "&:hover .MuiButton-endIcon": { transform: "translateX(4px)", transition: "0.3s" },
        }}
      >
        View More
      </Button>
    </div>
  );
}
