const config = {
    plugins: {
      "@tailwindcss/postcss": {
        content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"  // ← This is the new path
        ],
      },
    },
  };
  export default config;