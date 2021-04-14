import "./App.css";
import { Button, Card, Grid } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

export const App = () => {
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
        <Grid columns={3}>
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
        <Grid columns={3}>
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
};
