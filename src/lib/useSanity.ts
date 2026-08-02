import { useEffect } from "react";
import { sanityClient } from "./sanity";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useSanityQuery<T>(query: string, params: Record<string, any> = {}) {
  const queryClient = useQueryClient();
  const queryKey = ["sanity", query, params];

  const queryResult = useQuery({
    queryKey,
    queryFn: async () => {
      return await sanityClient.fetch<T>(query, params);
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes for instant navigation
    refetchOnWindowFocus: false, // Prevent unnecessary refetches if data hasn't changed
  });

  useEffect(() => {
    // Listen for updates matching the query for real-time CMS edits
    const subscription = sanityClient
      .listen(query, params, { visibility: 'query' })
      .subscribe(() => {
        // When an event fires, invalidate the cache to fetch the fresh payload
        queryClient.invalidateQueries({ queryKey });
      });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [query, JSON.stringify(params), queryClient]); // Use JSON.stringify for deep equality on params object

  return { 
    data: queryResult.data as T | null, 
    loading: queryResult.isPending, 
    error: queryResult.error 
  };
}
