
type ButtonType = {
  children: React.ReactNode;
  setBtnFriend: (data: boolean) => void
  btnFriend: boolean
}

export default function Button({ children, setBtnFriend, btnFriend }: ButtonType) {
  return (
    <button className="add" onClick={() => setBtnFriend(!btnFriend)}>
      {children}
    </button>
  );
}
