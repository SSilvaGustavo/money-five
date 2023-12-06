"use client";
import { Toaster } from "react-hot-toast";

export default function ClientProvider() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#5CFF5C",
              color: "white"
            },
          },
          error: {
            style: {
              background: "#FF4747",
              color: 'white'
            },
          },
        }}
      />
    </>
  );
}
