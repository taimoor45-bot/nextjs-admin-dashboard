import darkLogo from "@/assets/logos/WQ.png";
import logo from "@/assets/logos/BQ.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        src={logo}
        className="dark:hidden flex items-center justify-center "
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
        fill
        // width={100}
        // height={100}
      />

      <Image
        src={darkLogo}
        className="hidden dark:block"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
        fill
        // width={70}
        // height={70}
      />
    </div>
  );
}
