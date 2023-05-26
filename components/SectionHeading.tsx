import { FunctionComponent, PropsWithChildren } from "react";

/**
 * Render heading
 */
export type SectionHeadingProps = PropsWithChildren<{
  level: 2 | 3 | 4;
  className?: string;
}>;
export const SectionHeading: FunctionComponent<SectionHeadingProps> = (
  props
) => {
  const level = props.level;
  const className = [
    props.className,
    level === 2
      ? `font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`
      : level === 3
      ? `font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl`
      : level === 4
      ? `font-extrabold text-white text-xl sm:text-2xl lg:text-3xl`
      : undefined,
  ].join(" ");
  const children = props.children;

  return <h2 className={className}>{children}</h2>;
};
