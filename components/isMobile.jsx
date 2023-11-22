import React from "react";

export default function IsMobile(size) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (size < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return isMobile;
}