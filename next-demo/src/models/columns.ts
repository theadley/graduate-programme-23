import { Item } from "./items"
import { PBRecord } from "./shared"

export interface IColumn extends PBRecord<Item> {
  name: string
}
