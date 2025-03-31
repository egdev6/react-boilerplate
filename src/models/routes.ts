export interface RouteProps {
  key: string;
  path: string;
  name: string;
  component: React.LazyExoticComponent<React.FC>;
  providers?: React.FC<React.PropsWithChildren>[];
  children?: RouteProps[];
}
