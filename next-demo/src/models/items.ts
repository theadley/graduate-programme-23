import { PBRecord } from "./shared"

export interface Item extends PBRecord<unknown> {
  column: string
  name: string
}
