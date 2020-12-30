module.exports = {
  purge: [
    // look in all subdirectories of src directory
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: "minmax(150px, 450px) auto",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      minHeight: {
        "1/4": "25%",
        "1/3": "33.33%",
        "1/2": "50%",
        "2/3": "66.67%",
        "3/4": "75%",
        "50vh": "50vh",
      },
      height: {
        "400px": "400px",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "first"],
    display: ["responsive", "hover", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover", "visited"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}
