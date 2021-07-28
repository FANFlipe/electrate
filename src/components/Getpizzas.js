import React, { useEffect, useState } from "react";
import AppMenu from "./Appmenu";
import { api } from "../Services";
const GetPizzas = () => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        if (pizzas.length == 0) {
            api.get('/pizzas').then((response) => {
                setPizzas(response.data);

            })
        }
        console.log(pizzas);
    }, [pizzas])
    return (
        <>
            <AppMenu selectedkey='4' />
            {pizzas.map((pizza)=> <div>
                <img src={pizza.img} style={{width:'100px',margin:'16px'}}/>
                {pizza.name} .<small>{pizza.desc}</small></div>)}
        </>

    )
}
export default GetPizzas;