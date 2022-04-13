export type CategotyItem = {
    image: string,
    title: string
    category : string
}

export type ProductItem = {
    image: string,
}

export type productType = {
    _id : string,
    id?: string
    name: string,
    description:  string,
    image:  string,
    price:  number,
    size?:  [string],
    color?:  [string],
    categories?:  [string],
    isAvailable: boolean,
    createdAt? : any
  }