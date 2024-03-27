
export type LayoutTypes = {
    title: string;
    children: React.ReactNode;
};
export interface InputTypes {
    text: string;
    type: string;
}
export interface CardUserTypes {
    status: string
    greeting: string
    name: string
    saldo: number
    point: number
    qrcode: string
}