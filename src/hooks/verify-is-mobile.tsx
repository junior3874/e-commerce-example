import { useEffect, useState } from "react";

export function VerifyIsMobile(media: string) {
  const [match, setMatch] = useState(false);

  function changeMatch() {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
  }

  useEffect(() => {
    changeMatch();

    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, []);

  return match;
}
