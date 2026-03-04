import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      const res = await fetch(api.newsletter.subscribe.path, {
        method: api.newsletter.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 404 && window.location.hostname.endsWith("github.io")) {
          throw new Error("Newsletter signup needs a backend server and is disabled on GitHub Pages.");
        }

        const isJson = res.headers.get("content-type")?.includes("application/json");
        if (isJson) {
          const error = await res.json();
          throw new Error(error.message || "Failed to subscribe to newsletter");
        }

        const errorText = await res.text();
        throw new Error(errorText || "Failed to subscribe to newsletter");
      }
      
      return res.json();
    }
  });
}
