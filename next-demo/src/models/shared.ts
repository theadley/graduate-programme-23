
export interface PBAPIResponse<T> {
  page: number
  perPage: number
  totalItems: number
  totalPages: number
  items: T[]
}

export interface PBRecord<S> {
  collectionId: string
  collectionName: string
  created: string
  id: string
  updated: string
  expand?: Expand<S>
}

export interface Expand<T> {
  [key: string]: T[]
}
