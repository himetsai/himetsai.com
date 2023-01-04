export const slugify = (str: string) =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ +/g, "_")
    .replace(/_+/g, "-")
    .replace(/(，|。|、|（|）|！|？).*$/g, "");