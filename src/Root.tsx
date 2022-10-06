import { useRouter } from "./hooks/useRouter";

const Root = () => {
  const { push } = useRouter();

  const onClickGoAbout = () => {
    push("/about");
  };
  return (
    <div>
      <span>root</span>
      <button onClick={onClickGoAbout}>about</button>
    </div>
  );
};

export default Root;
