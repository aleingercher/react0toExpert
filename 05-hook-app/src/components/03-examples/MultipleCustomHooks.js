import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, loading } = useFetch(url);

  const { author, quote } = !!data && data[0];

  console.log("author", author);
  console.log("quote", quote);
  return (
    <div>
      <h1>Breaking bad quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote " style={{ textAlign: "right" }}>
          <p>{quote}</p>
          <footer className="blockquote-footer"> {author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-outline-warning">
        proxima cita
      </button>
    </div>
  );
};
