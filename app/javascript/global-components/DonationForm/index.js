import React, { useState, useContext } from "react";
import axios from "axios";

import ConnectionContext from "../ChatApp/ConnectionContext";
import StyledDonationForm from "./DonationForm.styled";
import DonationsReport from "./DonationsReport";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const { user, chat } = useContext(ConnectionContext);

  const updateAmount = (event) => {
    setAmount(event.target.value);
  };

  const submitDonation = (event) => {
    if (Number(amount) <= 0) return;

    setAmount("");
    axios.post(`/chats/${chat}/donations`, {
      amount: Number(amount),
      donor: user
    });
  };

  return (
    <StyledDonationForm>
      <input type="number" value={amount} onChange={updateAmount} />
      <button onClick={submitDonation}>give things to {chat}</button>
      <DonationsReport />
    </StyledDonationForm>
  )
};

export default DonationForm;
