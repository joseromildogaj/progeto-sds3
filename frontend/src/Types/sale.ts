import { type } from "node:os";

export type Salesum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}