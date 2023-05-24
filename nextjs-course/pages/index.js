import Link from "next/link";

export default function HomePage() {
  return (
    <h1>
      Hello world
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </h1>
  );
}
