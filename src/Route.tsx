//interface
import { RouteInterface } from "./interface/component";

const Route = ({ component }: RouteInterface) => {
  return <div>{component}</div>;
};

export default Route;
