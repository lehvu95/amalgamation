import { Link } from "react-router-dom"; 
import { URL_ARRAY } from "./constants";

const NavBar = () => {
  return (
    <table>
      <tbody>
      <tr>
        {URL_ARRAY.map((item) => {
          const { label, url, component } = item;
          const key = Math.random();
          return <td key={key}>
            {component && <Link to={url}>{label}</Link>}
            </td>;
        })}
      </tr>
      </tbody>
    </table>
  );
}

export default NavBar;
