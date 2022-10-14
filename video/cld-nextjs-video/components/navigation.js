import Link from 'next/link'
import { useRouter } from 'next/router';


function Navigation() {
    const router = useRouter();
    // console.log(router.pathname)
  return (
    <ul className="nav-list">
      <li>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>Element and Player</a>
        </Link>
      </li>
      <li>
        <Link href="/element" >
          <a className={router.pathname == "/element" ? "active" : ""}>Element</a>
        </Link>
      </li>
      <li>
        <Link href="/player" >
          <a className={router.pathname == "/player" ? "active" : ""}>Player</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navigation