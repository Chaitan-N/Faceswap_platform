import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <Image
        src="/Modal.png"
        width={900}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}

export default page;
