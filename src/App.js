import "./App.css";
import { Button, Card, Grid } from "semantic-ui-react";
import React, { useState } from "react";

export function App() {
  const [films, setFilms] = useState({});
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [visiblefilm, setVisiblefilm] = useState(true);
  const [visiblepeople, setVisiblepeople] = useState(true);
  const [visiblevehicle, setVisiblevehicle] = useState(true);

  const btnFilms = () => {
    fetch(`https://swapi.dev/api/films/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFilms(data));
    setVisiblefilm(false);
  };
  const btnPeople = () => {
    Promise.all([
      fetch(`https://swapi.dev/api/people/?page=1`),

      fetch(`https://swapi.dev/api/people/?page=2`),

      fetch(`https://swapi.dev/api/people/?page=3`),

      fetch(`https://swapi.dev/api/people/?page=4`),
      fetch(`https://swapi.dev/api/people/?page=5`),

      fetch(`https://swapi.dev/api/people/?page=6`),

      fetch(`https://swapi.dev/api/people/?page=7`),

      fetch(`https://swapi.dev/api/people/?page=8`),

      fetch(`https://swapi.dev/api/people/?page=9`),
    ])
      .then(async ([aa, bb, cc, dd, ee, ff, gg, hh, ii]) => {
        const a = await aa.json();
        const b = await bb.json();
        const c = await cc.json();
        const d = await dd.json();
        const e = await ee.json();
        const f = await ff.json();
        const g = await gg.json();
        const h = await hh.json();
        const i = await ii.json();
        return [a, b, c, d, e, f, g, h, i];
      })
      .then((res) => setPeople(res))

      .catch((err) => {
        console.log(err);
      });
    setVisiblepeople(false);
  };

  const btnVehicles = () => {
    Promise.all([
      fetch(`https://swapi.dev/api/vehicles/?page=1`),

      fetch(`https://swapi.dev/api/vehicles/?page=2`),

      fetch(`https://swapi.dev/api/vehicles/?page=3`),

      fetch(`https://swapi.dev/api/vehicles/?page=4`),
    ])
      .then(async ([aa, bb, cc, dd]) => {
        const a = await aa.json();
        const b = await bb.json();
        const c = await cc.json();
        const d = await dd.json();

        return [a, b, c, d];
      })
      .then((res) => setVehicles(res))

      .catch((err) => {
        console.log(err);
      });
    setVisiblevehicle(false);
  };

  return (
    <div className="App">
      <div>
        <h1>Album Star Wars</h1> <h2>Películas</h2>
        {visiblefilm && (
          <Button onClick={() => btnFilms()} className="btn-1">
            Obtener Películas
          </Button>
        )}
        <Grid columns={3} stackable>
          {visiblefilm &&
            [1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Grid.Column key={index}>
                  <Card>{item}</Card>
                </Grid.Column>
              );
            })}
          {films?.results?.map((item, index) => {
            return (
              <Grid.Column>
                <Card>
                  <p>
                    <b>Nombre:</b> {item.title}
                  </p>
                  <p>
                    <b>Episodio:</b> {item.episode_id}
                  </p>
                  <p>
                    <b>Introducción:</b> {item.opening_crawl}
                  </p>
                  <p>
                    <b>Director:</b> {item.director}
                  </p>
                  <p>
                    <b>Productor:</b> {item.producer}
                  </p>
                  <p>
                    <b>Fecha de lanzamiento:</b> {item.release_date}
                  </p>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
        <h2> Personajes</h2>
        {visiblepeople && (
          <Button onClick={() => btnPeople()} className="btn-2">
            Obtener Personajes
          </Button>
        )}
        <Grid columns={3} stackable>
          {visiblepeople &&
            [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              53,
              54,
              55,
              56,
              57,
              58,
              59,
              60,
              61,
              62,
              63,
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79,
              80,
              81,
              82,
            ].map((item, index) => {
              return (
                <Grid.Column key={index}>
                  <Card>{item}</Card>
                </Grid.Column>
              );
            })}
          {people?.map((item, index) => {
            return (
              <>
                {item?.results?.map((value, i) => {
                  return (
                    <Grid.Column>
                      <Card>
                        <p>
                          <b>Nombre:</b> {value.name}
                        </p>
                        <p>
                          <b>Altura:</b> {value.height}
                        </p>
                        <p>
                          <b>Peso:</b> {value.mass}
                        </p>
                        <p>
                          <b>Color de cabello:</b> {value.hair_color}
                        </p>
                        <p>
                          <b>Color de piel:</b> {value.skin_color}
                        </p>
                        <p>
                          <b>Color de ojos:</b> {value.eye_color}
                        </p>
                        <p>
                          <b>Año de nacimiento:</b> {value.birth_year}
                        </p>
                        <p>
                          <b>Sexo:</b>
                          {item.gender}
                        </p>
                      </Card>
                    </Grid.Column>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <h2> Naves</h2>
        {visiblevehicle && (
          <Button onClick={() => btnVehicles()} className="btn-3">
            Obtener Naves
          </Button>
        )}
        <Grid columns={3} stackable>
          {visiblevehicle &&
            [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
            ].map((item, index) => {
              return (
                <Grid.Column key={index}>
                  <Card>{item}</Card>
                </Grid.Column>
              );
            })}
          {vehicles?.map((item, index) => {
            return (
              <>
                {item?.results?.map((value, i) => {
                  return (
                    <Grid.Column>
                      <Card>
                        <p>
                          <b>Nombre: </b>
                          {value.name}
                        </p>
                        <p>
                          <b>Modelo:</b> {value.model}
                        </p>
                        <p>
                          <b>Fabricante:</b> {value.manufacturer}
                        </p>
                        <p>
                          <b>Costo:</b> {value.cost_in_credits}
                        </p>
                        <p>
                          <b>Largo:</b> {value.length}
                        </p>
                        <p>
                          <b>Máxima velocidad:</b>
                          {value.max_atmosphering_speed}
                        </p>
                        <p>
                          <b>Tripulación:</b> {value.crew}
                        </p>
                        <p>
                          <b>Pasajeros:</b> {value.passengers}
                        </p>
                        <p>
                          <b>Capacidad:</b> {value.cargo_capacity}
                        </p>
                        <p>
                          <b>Consumibles:</b> {value.consumables}
                        </p>
                        <p>
                          <b>Clase de vehiculo:</b> {value.vehicle_class}
                        </p>
                      </Card>
                    </Grid.Column>
                  );
                })}
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
