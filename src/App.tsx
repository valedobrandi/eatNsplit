import './App.css';
import { useState } from "react";
import { initialFriends } from './utils/data';
import List from './components/list';
import Button from './components/button';
import Addperson from './components/addPerson';
import Bill from './components/bill';
import { InitialFriendsType } from './types/types';


function App() {
  const [btnFriend, setBtnFriend] = useState(false)
  const [newFriends, setNewFriends] = useState<InitialFriendsType[]>(initialFriends);
  const [getId, setGetId] = useState<number | undefined>()


  function addFriendList(newFriend: InitialFriendsType) {
    setNewFriends((initialFriends) => [...initialFriends, newFriend])
    setBtnFriend((state: boolean) => !state)
  }

  function handleSubmitBill(event: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>, totalbill: number, bill: number) {
    event.preventDefault();
    if (!bill) return;
    setNewFriends((newFriends) => newFriends.map((friend) => {
      if (friend.id === getId) { return { ...friend, balance: friend.balance + totalbill } }
      return friend
    }))
    setGetId(0)
  }

  return (
    <div className="container">
      <div className="container-list">
        <List
          newFriends={newFriends}
          setGetId={setGetId}
          getId={getId}
          setBtnFriend={setBtnFriend}
        />
        {btnFriend && <Addperson
          onFriendList={addFriendList}
        />}
        <Button
        btnFriend={btnFriend}
          setBtnFriend={setBtnFriend}
        >{btnFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {getId !== 0 && (<Bill
        key={getId}
        getId={getId}
        newFriends={newFriends}
        onBillSubmit={handleSubmitBill}
      />)}
    </div>
  )
}

export default App;

