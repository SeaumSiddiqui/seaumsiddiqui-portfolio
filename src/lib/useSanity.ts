import { useEffect, useState } from "react";
import { sanityClient } from "./sanity";

export function useSanityQuery<T>(query: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let subscription: any;

    // Initial fetch
    sanityClient
      .fetch<T>(query)
      .then((initialData) => {
        setData(initialData);
        setLoading(false);

        // Listen for updates matching the query
        subscription = sanityClient
          .listen(query, {}, { visibility: 'query' })
          .subscribe(() => {
            // Re-fetch the query to get the fresh payload when an event fires
            sanityClient.fetch<T>(query).then(setData).catch(setError);
          });
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [query]);

  return { data, loading, error };
}
