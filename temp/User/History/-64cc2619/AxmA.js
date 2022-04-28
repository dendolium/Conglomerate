//always make the UI first
//then implement the logic
//makes you not lose your sanity

import { ethers } from "ethers";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const MakeABet = (props) => {
  const contract = props.contract;
  const [ethValue, setEthValue] = useState("");

  const dispatch = useDispatch();

  const onChangeEthValue = (e) => {
    setEthValue(e.target.value);
  };

  const placeBet = async () => {
    const overrides = { value: ethers.utils.parseEther("0.2") };
    // const overrides = { value: 0.001 };
    // const ethValuee = ethers.utils.formatEther(10000);

    console.log(overrides.value.toString())

    contract.depositForBet(0, overrides)
    // contract.changeMinValueToBeDeposited(10000)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log("Err: ", err)
    });
    // console.log(awa);


  };

  return (
    <div>
      <button onClick={() => placeBet()}> Higher </button>
      <br />
      <button onClick={() => placeBet()}> Lower </button>
      <br />
      <input
        value={ethValue}
        type="number"
        placeholder="value in eth"
        onChange={onChangeEthValue}
      />
    </div>
  );
};
