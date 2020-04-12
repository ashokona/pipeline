export interface NavItem {
  displayName?: String;
  disabled?: Boolean;
  iconName?: String;
  route?: string;
  children?: NavItem[];
  data?: any;
  childRoutes?: String;
  underDev?: Boolean;
}
