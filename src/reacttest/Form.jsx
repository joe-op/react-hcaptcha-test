import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const Form = () => {
  const handleVerificationSuccess = (token, ekey) => {
    console.log(`Verification handler. token: ${token} ekey: ${ekey}`);
  };
  return (
    <form>
      <HCaptcha
        sitekey="placeholder"
        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
      />
    </form>
  );
};

export default Form;
