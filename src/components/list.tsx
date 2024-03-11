import Person from "./person";
import { InitialFriendsType } from "../types/types";

type ListType = {
  newFriends: InitialFriendsType[];
  setGetId: (data: number) => void
  getId: number | undefined;
  setBtnFriend: (data: boolean) => void;
}

export default function List({ newFriends, setGetId, getId, setBtnFriend } : ListType) {
  return (
    <ul className="list-container">
      {newFriends.map((friend) => (
        <Person
          key={friend.id}
          {...friend}
          setGetId={setGetId}
          getId={getId}
          setBtnFriend={setBtnFriend}
    
        />
      ))}
    </ul>
  );
}
