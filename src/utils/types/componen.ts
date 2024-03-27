import { ChangeEvent } from "react";

export type LayoutTypes = {
    title: string;
    children: React.ReactNode;
};
export interface InputTypes {
    text: string;
    type: string;
}