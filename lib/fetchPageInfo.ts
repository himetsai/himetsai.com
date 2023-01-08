export const fetchPageInfo = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
