import { Outlet, Link } from "react-router-dom";
import '../css/profile.css'


const Layout = () => {
  return (
    <>
      <nav class="main_blue_background">
        <ul>
          <li>
            <Link class="waves-effect waves-light" to="/">Home</Link>
          </li>
          <li>
            <Link class="waves-effect waves-light" to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;