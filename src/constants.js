import Home from "./Home";
import Checkbook from "./checkbook-register/Checkbook";

export const URL_ARRAY = [
  {
    label: 'Home',
    url: '/',
    component: <Home />,
  },
  {
    label: 'Medication List',
    url: '/medication-list',
  },
  {
    label: 'Checkbook Register',
    url: '/checkbook-register',
    component: <Checkbook/>,
  },
  {
    label: 'Minesweeper',
    url: '/minesweeper',
  },
];
