import React from 'react'; 
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../hooks/index'
import Nav from '../nav/nav';
import { getItemsApi, selectors } from '../../reducer/menuSlice';
import { getAllergenicApi, aSelectors } from '../../reducer/menuAllergenic';
import { useParams } from 'react-router-dom';
// import style from "./home.module.css";

const { selectListado } = selectors
const { allergenicsListado } = aSelectors

export function Home() {

    const listadoMenu = useAppSelector(selectListado)
    const listadoAllergenic = useAppSelector(allergenicsListado)

    const dispatch = useAppDispatch()
    const { productId }= useParams();

    useEffect (()=> {
        dispatch(getItemsApi("esp"))
    },[])

    useEffect (()=> {
        dispatch(getAllergenicApi(3))
    },[])
    // useEffect (()=> {
    //     dispatch(getAllergenicApi(listadoAllergenic.productId))
    // },[])

    return(
        <div>
            <Nav/>
            <h1> BIENVENIDOS AL INICIO </h1>
            <div >
                <button> Ver platos sin allergenic </button>
            </div>
        </div>
    )
  
};

export default Home;