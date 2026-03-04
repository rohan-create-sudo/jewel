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
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }
      
      return res.json();
    }
  });
}
