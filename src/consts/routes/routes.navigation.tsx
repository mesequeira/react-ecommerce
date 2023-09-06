import { Route } from "../../models/common/routes/routes";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

export const routes: Route[] = [
  {
    icon: <DashboardIcon />,
    path: "/",
    label: "Dashboard",
  },
  {
    icon: <Inventory2Icon />,
    path: "/products",
    label: "Products",
  },
  {
    icon: <PeopleIcon />,
    path: "/customers",
    label: "Customers",
  },
  {
    icon: <ShoppingCartIcon />,
    path: "/orders",
    label: "Orders",
  },
];
