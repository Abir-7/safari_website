import AccountInformation from "@/components/custom/page/profile/account_info";

import React from "react";

const page = () => {
  return (
    <div>
      <AccountInformation
        initialEmail="abir@gmail.com"
        initialName="Abir"
      ></AccountInformation>
    </div>
  );
};

export default page;
