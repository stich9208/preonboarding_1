import { useRouter } from "./hooks/useRouter";

//interface
import { RouterInterface, RouteInterface } from "./interface/component";

const Router = ({ children }: RouterInterface) => {
  const { path } = useRouter();

  return (
    <div>{children.filter((child: any) => child.props.path === path)[0]}</div>
  );
};

export default Router;
