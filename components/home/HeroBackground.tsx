import { FunctionComponent } from "react";

export type HeroBackgroundProps = {
  className?: string;
};
export const HeroBackground: FunctionComponent<HeroBackgroundProps> = (
  props
) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full -z-1 ${
        props.className ?? ""
      }`}
      aria-hidden="true"
    >
      <HeroBackgroundImage />

      <div className="absolute inset-0 h-full w-full box-content">
        <div className="absolute inset-0 -start-[25%]  bg-gradient-to-r from-gray-900"></div>

        <div className="absolute inset-0 -start-[25%] bg-gradient-to-t from-gray-900"></div>
      </div>
    </div>
  );
};

export type HeroBackgroundImageProps = {
  className?: string;
};
export const HeroBackgroundImage: FunctionComponent<
  HeroBackgroundImageProps
> = (props) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${props.className ?? ""}`}
      style={{ backgroundImage: `url(/images/gaudi_pattern4.svg)` }}
    ></div>
  );
};
