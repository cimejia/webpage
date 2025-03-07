import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function VisitCounter({ page }: { page: string }) {
  useEffect(() => {
    apiRequest("POST", `/api/visits/${page}`);
  }, [page]);

  const { data } = useQuery({
    queryKey: ['/api/visits', page],
    queryFn: async () => {
      const res = await fetch(`/api/visits/${page}`);
      const data = await res.json();
      return data.count;
    },
    refetchInterval: 30000 // Refetch every 30 seconds
  });

  return (
    <div className="text-sm text-muted-foreground text-center mt-8">
      {data !== undefined && (
        <p>Views: {data}</p>
      )}
    </div>
  );
}
