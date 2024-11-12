import { useEffect, useState } from "react";

// Definindo os tipos dos estados
interface FetchData {
  [key: string]: any; // Aqui você pode definir a estrutura dos dados que espera retornar
}

interface FetchConfig {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body?: string;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<FetchData | null>(null);
  const [config, setConfig] = useState<FetchConfig | null>(null);
  const [method, setMethod] = useState<"POST" | "DELETE" | null>(null);
  const [callFetch, setCallFetch] = useState<FetchData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [itemId, setItemId] = useState<number | null>(null); // Ajustei para número, pois imagino que seja um ID de item

  const httpConfig = (data: FetchData, method: "POST" | "DELETE") => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod("DELETE");
      setItemId(Number(data)); // Garantindo que o ID é tratado como número
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json: FetchData = await res.json();

        setData(json);
        setMethod(null);
        setError(null);
      } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        setError("Houve um erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST" && config) {
        setLoading(true);

        try {
          const res = await fetch(url, config);
          const json: FetchData = await res.json();
          setCallFetch(json);
        } catch (error) {
          console.log(error instanceof Error ? error.message : error);
          setError("Houve um erro ao fazer a requisição POST!");
        }
      } else if (method === "DELETE" && itemId) {
        const deleteUrl = `${url}/${itemId}`;
        try {
          const res = await fetch(deleteUrl, config!); // Usando config! porque garantimos que existe no DELETE
          const json: FetchData = await res.json();
          setCallFetch(json);
        } catch (error) {
          console.log(error instanceof Error ? error.message : error);
          setError("Houve um erro ao fazer a requisição DELETE!");
        }
      }
    };

    if (method) {
      httpRequest();
    }
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
