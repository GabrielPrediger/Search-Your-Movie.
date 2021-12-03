import { Title, Input, Div, Lista, NotFound, Found } from "./app.style";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card";

function App() {
  const [movies, set_movies] = useState([]);
  const [pesquisa, set_pesquisa] = useState("");
  const [quantityMovie, set_quantityMovie] = useState(0);


  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com?s=${pesquisa}&type=movie&apikey=cfbeb247`)
      .then((response) => {
        set_movies(response.data.Search);
        set_quantityMovie(movies.length);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [pesquisa, movies]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <Div>
            <Title>Search your movie</Title>
            <Input
              type="text"
              value={pesquisa}
              onChange={(event) => set_pesquisa(event.target.value)}
            />
          </Div>
          {pesquisa && !movies && (
            <NotFound>
              Nenhum item foi encontrado com o texto informado
            </NotFound>
          )}
          {movies && (
            <Found>
              Encontrou {quantityMovie} {quantityMovie > 1 ? 'Resultados' : 'Resultado'}
            </Found>
          )}
          {movies && (
            <Lista>
              {movies.map((movie, index) => {
                return (
                  <Card
                    key={`${index}-${movie.imdbID}`}
                    image={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                  ></Card>
                );
              })}
            </Lista>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
