export type MenuType = {
    idProduct: string,
    productDescription: string,
    pax: number,
    canGrow: number,
    subfamilyProductDescription: string,
    languageName: string,
    languageName2: string,
    languageName3: string,
    sellPrice: number
}

export interface allMenuType {
    listado : MenuType[]
}