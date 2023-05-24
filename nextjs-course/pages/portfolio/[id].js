import { useRouter } from "next/router";

export default function FindPrortFolioPage() {
  const router = useRouter();

  return <h1>Value found {router.query.id}</h1>;
}
