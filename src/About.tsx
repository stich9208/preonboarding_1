import { useRouter } from "./hooks/useRouter";

const About = () => {
  const { push } = useRouter();

  const onClickGoMain = () => {
    push("/");
  };

  return (
    <div>
      <span>about</span>
      <button onClick={onClickGoMain}>go main</button>
    </div>
  );
};

export default About;
