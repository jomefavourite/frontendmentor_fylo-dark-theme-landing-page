module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        color1: "#1c2431",
        color2: "#181f2a",
        color3: "#0b1523",
        color4: "#202a3c",
        color5: "#65e2d9",
        color6: "#339ecc",
      },
      fontFamily: {
        raleway: "Raleway",
        openSans: "Open Sans",
      },
      backgroundImage: {
        btn: "linear-gradient(to right, #65e2d9,#339ecc)",
        heroMob: "url('./images/bg-curvy-mobile.svg')",
        heroDesk: "url('./images/bg-curvy-desktop.svg')",
      },
      borderRadius: {
        20: "20rem",
        10: "10px",
      },
      spacing: {
        "23rem": "23rem",
      },
      maxWidth: {
        "12rem": "13rem",
        "26rem": "26rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
