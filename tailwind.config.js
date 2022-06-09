module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#644F9C",
          secondary: "#007BFF",
          accent: "#37cdbe",
          cdark: "#1EC08F",
          "base-100": "#F2F2F2",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}



// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#644F9C",
//           secondary: "#FF6F00",
//           accent: "#37cdbe",
//           cdark: "#404040",
//           "base-100": "#F2F2F2",
//         },
//       },
//       "dark",
//       "cupcake",
//     ],
//   },
//   plugins: [require("daisyui")],
// }