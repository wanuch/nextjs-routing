import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>The Home Page!!</h1>
      <ul>
        <li>
          {/* replace is used for forcing not to go back*/}
          {/* <Link replace href="/portfolio">Portfolio</Link> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
