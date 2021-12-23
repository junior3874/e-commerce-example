import { useState } from "react";
import "./_styles.scss";

function getClassesFactories() {
  function getUserAreaClassNames(isLoading: boolean) {
    return isLoading ? " " : "loading";
  }
  return { getUserAreaClassNames };
}

export function UserBasketArea() {
  const { getUserAreaClassNames } = getClassesFactories();
  const [userImageUrl, setUserImageUrl] = useState("");

  return (
    <section className={`user-area ${getUserAreaClassNames(!!userImageUrl)}`}>
      <figure></figure>
    </section>
  );
}
