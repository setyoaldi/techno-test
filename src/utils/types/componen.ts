
export type LayoutTypes = {
    children: React.ReactNode;
};
export interface InputTypes {
    text: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export interface CardUserTypes {
    status: string
    greeting: string
    name: string
    saldo: number
    point: number
    qrcode: string
}
export interface CardMenuTypes {
    pict: string
    name: string
    desc: string
    price: string
}