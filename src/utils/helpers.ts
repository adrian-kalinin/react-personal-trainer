// eslint-disable-next-line import/prefer-default-export
export function getIdFromUrl(url: string) {
  return url.split("/").pop();
}
