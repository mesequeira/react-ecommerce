import { SxProps, Theme } from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface LogoProps {
  path: string;
  alt: string;
  settings: SxProps<Theme>;
}
