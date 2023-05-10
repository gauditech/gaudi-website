import GaudiLogo from "@/public/images/gaudi/gaudi_logo.svg";

export default function Logo() {
  return (
    <img
      src={GaudiLogo.src}
      alt="gaudi_logo"
      title="Gaudi logo"
      className="w-full h-full"
    />
  );
}
