import { IColumn } from "@/models/columns";
import { createContext } from "react";

export const ColumnContext = createContext<IColumn[]>([]);