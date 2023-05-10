import { MouseEvent } from "react";

export function smoothNavigation(e: MouseEvent<HTMLAnchorElement>) {
  // href looks like this `httpa://domain#href` but we need only the "#..." part
  const href = "#" + e.currentTarget.href.split("#")[1];

  if (!href.includes("/")) {
    e.preventDefault();
  }

  const offsetTop = document.querySelector<HTMLDivElement>(href)?.offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
