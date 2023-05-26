import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientproject]",
      query: { id: "demo", clientproject: "heyyy" },
    });
  }

  return (
    <div>
      <h1>The clients of a given project</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
      <button onClick={loadProjectHandler}>Load project B</button>
    </div>
  );
}
