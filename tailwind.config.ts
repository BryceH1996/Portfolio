import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#E7CCA2',
      'secondary': '#211C13',
      'text': '#333333',
      'white': '#ffffff',
    },
    borderRadius: {
      '4xl': '2.8rem',
    },
    extend:{
      minHeight:{
        'with-nav': 'calc(35vh - 114px)'
      }
    }
  },
  plugins: [],
};
export default config;
