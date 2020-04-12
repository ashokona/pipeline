export interface CustomNavItem {
  displayName?: String;
  disabled?: Boolean;
  iconName?: String;
  route?: String;
  children?: CustomNavItem[];
  data?: any;
  childRoutes?: String;
  underDev?: Boolean;
  value?: Number;
  prefix?: String;
}
