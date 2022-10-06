import { ReactNode } from "react";

export interface RouterInterface {
  children: ReactNode[];
}

export interface RouteInterface {
  path: string;
  component: ReactNode;
}
