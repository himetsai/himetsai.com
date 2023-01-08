export const fetchPost = async (slug: string | string[] | undefined) => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    }/api/post/${slug}`
  );
  const data = await res.json();
  const post: Post = data.post;
  return post;
};
