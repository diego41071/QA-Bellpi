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
          <Button onClick={() => btnFilms()}>Obtener Películas</Button>
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
                <Card>{item.title}</Card>
              </Grid.Column>
            );
          })}
        </Grid>
        <h2> Personajes</h2>
        {visiblepeople && (
          <Button onClick={() => btnPeople()}>Obtener Personajes</Button>
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
                      <Card> {value.name}</Card>
                    </Grid.Column>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <h2> Naves</h2>
        {visiblevehicle && (
          <Button onClick={() => btnVehicles()}>Obtener Naves</Button>
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
                      <Card> {value.name}</Card>
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
