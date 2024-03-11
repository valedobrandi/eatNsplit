export type InitialFriendsType = {
    id: number;
    name: string;
    image: string;
    balance: number;
}

export type HandleSubmitBillType = {
    event: React.ChangeEvent<HTMLInputElement>;
    totalbill: number;
    bill: number;
}