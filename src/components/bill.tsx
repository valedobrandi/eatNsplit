import { useState } from "react";
import { InitialFriendsType } from "../types/types";


type BillType = {
  getId: number | undefined,
  newFriends: InitialFriendsType[],
   onBillSubmit: (event: React.FormEvent<HTMLFormElement>, totalbill: number, bill: number) => void
}

export default function Bill({getId, newFriends, onBillSubmit}: BillType) {
  const [bill, setBill] = useState(0);
  const [myExp, setMyExp] = useState("");
  const [payer, setPayer] = useState(1);
  const totalbill = payer > 0 ? bill - +myExp : +myExp * -1;
  const filterid = () =>
    newFriends.filter((friend) => friend.id === getId).map(({ name }) => name);

const input = +bill > 0 ? +bill - +myExp : ''

  return (
    <form
      className="bill-container"
      onSubmit={(event) => onBillSubmit(event, totalbill, bill)}
    >
      <h1>Split a bill with {filterid()} </h1>
      <div className="bill-form-container">
        <label htmlFor="">💰 Bill Value</label>
        <input
          className="bill-input"
          type="text"
          value={bill}
          onChange={(event) => setBill(+event.target.value)}
        />
      </div>
      <div className="bill-form-container">
        <label htmlFor="">🧍‍♀️ Your Expense</label>
        <input
          className="bill-input"
          type="text"
          value={myExp}
          onChange={(event) =>
            setMyExp(+event.target.value > bill ? myExp : event.target.value)
          }
        />
      </div>
      <div className="bill-form-container">
        <label htmlFor="">👫 {filterid()}`s Expense</label>
        <input
          className="bill-input"
          type="text"
          placeholder={input.toString()}
          disabled
        />
      </div>
      <div className="bill-form-container">
        <label htmlFor="">🤑 Who is paying the bill</label>
        <select
          className="bill-input"
          name=""
          id=""
          value={payer}
          onChange={(event) => setPayer(+event.target.value)}
        >
          <option value={1}>You</option>
          <option value={-1}>{filterid()}</option>
        </select>
      </div>
      <button className="btnBill">Split Bill</button>
    </form>
  );
}
