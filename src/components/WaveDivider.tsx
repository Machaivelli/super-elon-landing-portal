import { cn } from "@/lib/utils";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export const WaveDivider = ({ 
  className, 
  flip = false,
  color = "from-background to-background/80" 
}: WaveDividerProps) => {
  return (
    <div className={cn(
      "absolute left-0 right-0 h-32 w-full", // Increased height and added full width
      flip ? "top-0" : "bottom-0", // Adjusted positioning
      className
    )}>
      <div className={cn(
        "relative w-full h-full overflow-hidden",
        flip && "transform rotate-180"
      )}>
        <div className={cn(
          "absolute w-full h-full bg-gradient-to-b z-10", // Added z-index
          color
        )} />
        <svg
          className="absolute w-full h-full z-20" // Added z-index
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="currentColor"
            fillOpacity="0.3"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="currentColor"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};