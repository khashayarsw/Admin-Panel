import Accounts from "./pages/Accounts";
import SignUp from "./pages/SignUp";
import Index from "./pages/Index";

const routes = [
  {
    path: `/signup`,
    component: SignUp
  },
  {
    path: `/accounts`,
    // exact: true,
    component: Accounts,
  },
  {
    path: `/`,
    component: Index,
  },
];

export default routes;
