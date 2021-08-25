import React from "react";
import Image from "next/image";

// import SignupSection from "sections/signupSection/SignupSection";
const Signup = () => {
  return (
    <div className={"d-flex justify-content-center align-items-center w-100"}>
      <Image
        src={"/worldMap.png"}
        objectFit="contain"
        layout="fill"
        alt="Japanese samourai sun"
        unoptimized={process.env.NODE_ENV === "development"}
      />
      {/* <SignupSection /> */}
    </div>
  );
};

export default Signup;
