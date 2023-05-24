import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return <h1>BlogPostsPage</h1>;
}
