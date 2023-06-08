import { FunctionComponent, PropsWithChildren } from "react";

export type HeroBackgroundProps = {
  className?: string;
  secondary?: boolean;
};
export const HeroBackground: FunctionComponent<HeroBackgroundProps> = (
  props
) => {
  const variants = {
    secondary: props.secondary ? "opacity-70 grayscale-50" : "",
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full -z-1 ${[
        variants.secondary,
        props.className,
      ].join(" ")}`}
      aria-hidden="true"
    >
      <HeroBackgroundImage />

      <div className="absolute inset-0 h-full w-full box-content">
        {/* horizontal fader (l -> r) */}
        <div className="absolute inset-0 -start-[25%]  bg-gradient-to-r from-gray-900"></div>

        {/* vertical fader (b -> t) */}
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
      className={`absolute top-0 left-0 w-full h-full bg-repeat-x ${
        props.className ?? ""
      }`}
      style={{ backgroundImage: `url(/images/style/gaudi_pattern_1_3.svg)` }}
    ></div>
  );
};

export type HeroFrameProps = PropsWithChildren<{
  className?: string;
}>;
export const HeroFrame: FunctionComponent<HeroFrameProps> = (props) => {
  return (
    <div
      className={`relative px-2 py-8 md:px-4 md:pt-12 lg:px-8 lg:pt-16 xl:px-16`}
    >
      <HeroBackground secondary />
      {props.children}
    </div>
  );
};
