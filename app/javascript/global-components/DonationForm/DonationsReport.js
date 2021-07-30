import React, { useState } from "react";

import DonationsSubscriber from "./DonationsSubscriber";

const DonationsReport = () => {
  const [total, setTotal] = useState(null);
  const [lastDonation, setLastDonation] = useState({});

  const updateDonations = (data) => {
    setTotal(data.total);
    setLastDonation(data.lastDonation);
  };

  return (
    <DonationsSubscriber onReceive={data => updateDonations(data)}>
      {total && lastDonation?.amount ? (
        <>
          <div>we have {total} of the things</div>
          <div>we got {lastDonation.amount} from {lastDonation.donor}</div>
        </>
      ) : (
        <div>we got nothing</div>
      )}
    </DonationsSubscriber>
  );
};

export default DonationsReport;
