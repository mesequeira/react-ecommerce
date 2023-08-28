import { Route } from "../../models/common/routes/routes";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

export const routes: Route[] = [
  {
    icon: <HomeOutlinedIcon />,
    path: "/",
    label: "Home",
  },
  // {
  //   icon: <GridViewOutlinedIcon />,
  //   path: "/dashboard",
  //   label: "Dashboard",
  // },
  {
    icon: <Inventory2OutlinedIcon />,
    path: "/products",
    label: "Products",
  },
  // {
  //   icon: <PeopleAltOutlinedIcon />,
  //   path: "/customers",
  //   label: "Customers",
  // },
];
