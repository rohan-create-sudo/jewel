import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 404 && window.location.hostname.endsWith("github.io")) {
          throw new Error("Contact form needs a backend server and is disabled on GitHub Pages.");
        }

        const isJson = res.headers.get("content-type")?.includes("application/json");
        if (isJson) {
          const error = await res.json();
          throw new Error(error.message || "Failed to send message");
        }

        const errorText = await res.text();
        throw new Error(errorText || "Failed to send message");
      }
      
      return res.json();
    }
  });
}
