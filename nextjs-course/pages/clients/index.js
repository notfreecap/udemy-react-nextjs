import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "1", name: "Manners" },
    { id: "2", name: "Responsability" },
  ];

  return (
    <div>
      <h1>Client page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{ pathname: "clients/[id]", query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
