import Link from "./atoms/Link";

const Nav = () => (
  <nav>
    <h1>Nav</h1>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/some-page">Some page</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
