import React, {useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Container,
 
  } from "reactstrap";
  import "./formulario.css"


const Formulario = ({lista, Listas}) => {

    useEffect(() => {
         console.log('object')
    })

 
    return ( 
        <>
        <Container>
        <br />
            <h1>Tabla Muestra</h1>
          <br />
          <h3>Lista Resultados</h3>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Liga</th>
                <th>Equipo</th>
                <th>Empate</th>
                <th>Derrota</th>
                <th>Victoria</th>
              </tr>
            </thead>

            
          </Table>
        </Container>
    </>
    )
}

export default Formulario;