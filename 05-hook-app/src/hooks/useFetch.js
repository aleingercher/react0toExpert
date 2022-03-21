import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const initialData = { data: null, loading: true, error: null };

  const isMounted = useRef(true);

  const [state, setState] = useState(initialData);

  useEffect(() => {
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    setState(initialData);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // esto es para evitar setear un estado cuando esta desmontado el componente
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      });
  }, [url]);

  return state;
};
