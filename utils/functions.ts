export const loadImgUrl = (url?: string): string => {
  if (!url) {
    return "";
  }
  return process.env.NEXT_PUBLIC_BUCKET + url;
};
