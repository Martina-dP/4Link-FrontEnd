export interface AllergenicModel {
    allergenId: number,
    name: string,
    initials: string,
    enterpriseId: number,
    productId: string,
    active: number
}

export interface allMenuAllergenic {
    listado: AllergenicModel[]
}