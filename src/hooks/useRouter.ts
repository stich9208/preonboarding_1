import { useEffect, useState } from "react";

export const useRouter = () => {
  const [path, setPath] = useState(window.location.pathname);

  const popStateCallback = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", popStateCallback);
  }, []);

  const push = (location: string) => {
    history.pushState({}, "", location);
    history.go();
  };

  return { path, push };
};
