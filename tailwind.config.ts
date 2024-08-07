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
      'light-gray': '#F9F2E8',
    },
    borderRadius: {
      '4xl': '2.8rem',
    },
    extend:{
      minHeight:{
        'with-nav': 'calc(60vh - 114px)',
        'card': '58vh'
      }
    }
  },
  plugins: [],
};
export default config;
