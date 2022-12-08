import React from "react";
import { Link } from "react-router-dom";
import style from "./CardPais.module.css"

function CardPais(
    idProduct: string,
    productDescription: string,
    pax: number,
    canGrow: number,
    subfamilyProductDescription: string,
    languageName: string,
    languageName2: string,
    languageName3: string,
    sellPrice: number
    ){

    return(
    <div className = {style.container}>
            <h2 >{idProduct}</h2>
            <h3 >{productDescription}</h3>
        </div>
    )} 

export default CardPais;