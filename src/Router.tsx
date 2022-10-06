import { useRouter } from "./hooks/useRouter";

const Router = ({ children }: any) => {
  const { path } = useRouter();

  return (
    <div>{children.filter((child: any) => child.props.path === path)[0]}</div>
  );
};

export default Router;
