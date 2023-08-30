import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h2>Welcome Home</h2>
      <ul>
        <li>
          <Link href="/portfolio"> Portfolio</Link>
        </li>
        <li>
          <Link href="/clients"> Clients</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
