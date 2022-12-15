import { Link } from "./types";

export function getIdFromHref(url: string): number {
  return Number(url.split("/").pop());
}

export function getHrefByRel(links: Link[], rel: string): string {
  const filtered = links.filter((link) => link.rel === rel);
  return filtered[0].href;
}

export function getIdByRel(links: Link[] | undefined, rel: string): number {
  if (links) {
    const href = getHrefByRel(links, rel);
    return getIdFromHref(href);
  }
  return 0;
}
