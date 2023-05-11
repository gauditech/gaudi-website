import { MouseEvent } from "react";

export function smoothNavigation(e: MouseEvent<HTMLAnchorElement>) {
  const targetHref = e.currentTarget.href;
  const currentHref = window.location.href;

  // take URLs without the hash part
  const targetUrl = targetHref.split("#")[0];
  const currentUrl = currentHref.split("#")[0];

  if (targetUrl !== currentUrl) {
    // URL bases are different so it's not an internal link, proceed with the default navigation
    return;
  }

  // take the hash
  const targetHash = e.currentTarget.href.split("#")[1];

  // find element by ID and measure it's offset form top so we know where to scroll
  const offsetTop = document.querySelector<HTMLDivElement>(
    `#${targetHash}`
  )?.offsetTop;

  if (offsetTop != null) {
    // prevent default so we can do the nav
    e.preventDefault();

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  // otherwise, just allow default behaviour
}
