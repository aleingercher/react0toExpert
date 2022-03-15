import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const url = `https://www.breakingbadapi.com/api/quotes/1`;

  const state = useFetch(url);

  console.log("state", state);

  return (
    <div>
      <h1>Breaking bad quotes</h1>
      <hr />

      <div className="alert alert-info text-center">Loading...</div>

      <blockquote className="blockquote text-right">
        <p>Hola Mundo</p>
        <footer className="blockquote-footer">Alejandro</footer>
      </blockquote>
    </div>
  );
};
