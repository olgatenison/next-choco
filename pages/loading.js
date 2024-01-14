import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <>
      <Image
        src="../spinner177px.svg"
        width={177}
        height={177}
        alt="loading image"
      ></Image>
    </>
  );
};

export default Loading;
