// src/components/ErrorPage.tsx
import { Button } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong 😵";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} – ${error.statusText}`;
    message = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="max-w-xl mx-auto mt-24 p-6 bg-red-50 border border-red-300 rounded-xl text-red-800 shadow-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2">{message}</p>
      <Button
        onClick={() => location.reload()}
        className="mt-4 bg-blue text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Reload Page
      </Button>
    </div>
  );
}
