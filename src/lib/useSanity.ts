import { useEffect, useState } from "react";
import { sanityClient } from "./sanity";

export function useSanityQuery<T>(query: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    sanityClient
      .fetch<T>(query)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [query]);

  return { data, loading, error };
}
