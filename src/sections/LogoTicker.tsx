import { Marquee } from "@/components/Marquee";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface LogoTickerProps {}

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const LogoTicker: FC<LogoTickerProps> = ({}) => {
  return (
    <div className="relative">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="text-7xl font-oswald tracking-widest mx-8">.ASTER</div>
        <div className="text-7xl font-oswald tracking-widest mx-8">.BELIS</div>
        <div className="text-7xl font-oswald tracking-widest mx-8">.DAHLIA</div>
        <div className="text-7xl font-oswald tracking-widest mx-8">.ERUCA</div>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-sama-background   "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-sama-background  "></div>
    </div>
  );
};

export default LogoTicker;
