import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/cv.pdf",
      headers: [
        {
          key: "Content-Disposition",
          value: 'attachment; filename="alessandroiacovelli-cv.pdf"',
        },
      ],
    },
  ],
};

export default nextConfig;
