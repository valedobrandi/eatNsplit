
type PersonType = {
  id: number;
  name: string;
  image: string;
  balance: number;
  setGetId: (data: number) => void;
  getId: number | undefined;
  setBtnFriend: (data: boolean) => void;
}


export default function Person({
  id,
  name,
  image,
  balance,
  setGetId,
  getId,
  setBtnFriend,
}: PersonType) {
  const oweString =
    balance > 0 ? (
      <p style={{ color: "green" }}>
        {name} owe you ${balance}
      </p>
    ) : (
      <p style={{ color: "red" }}>
        You owe {name} ${balance * -1}
      </p>
    );
  const isId = getId === id;

  function handleClick() {
    setGetId(id);
    setBtnFriend(false);
    if (isId) setGetId(0);
  }

  return (
    <li className={`person-container ${isId ? "toggleColor" : ""}`}>
      <img src={image} alt="" />
      <div>
        <p className="name">{name}</p>
        {balance === 0 ? <p>You and {name} are even</p> : oweString}
      </div>
      <button onClick={() => handleClick()}>{isId ? "Close" : "Select"}</button>
    </li>
  );
}
