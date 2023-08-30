import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    //navigating away
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>Client "X"'s Projects </h1>
      <button onClick={loadProjectHandler}>Load Project X</button>
    </div>
  );
}

export default ClientProjectsPage;
