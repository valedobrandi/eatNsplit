import { useState } from "react";
import genId from "../utils/idGen";
import { InitialFriendsType } from "../types/types";


type AddpersonType = {
  onFriendList: (data: InitialFriendsType) => void 
}

export default function Addperson({onFriendList}: AddpersonType) {
  const [AddName, setAddName] = useState("");
  const [AddImg, setAddImg] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!AddName || !AddImg) return;

    const newFriend = {
      id: genId(),
      name: AddName,
      image: "https://i.pravatar.cc/48",
      balance: 0,
    };
    onFriendList(newFriend);
  }

  return (
    <form
      className="addPerson-container"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div>
        <label htmlFor="">👫 Friend name</label>
        <input
          type="text"
          value={AddName}
          onChange={(event) => setAddName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">🌄 Image URL</label>
        <input
          type="text"
          value={AddImg}
          placeholder="https://i.pravatar.cc/48"
          onChange={(event) => setAddImg(event.target.value)}
        />
      </div>
      <button className="btnAddPerson">Add</button>
    </form>
  );
}
