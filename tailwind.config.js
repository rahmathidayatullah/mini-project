module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "5px": "5px",
        "10px": "10px",
        "99px": "99px",
        "10%": "10%",
        "90%": "90%",
        "70%": "70%",
        "30%": "30%",
        205: "205px",
        "6px": "6px",
        68: "68px",
        50: "50px",
        "10px": "10px",
      },
      maxWidth: {
        400: "400px",
        "50%": "50%",
      },
      minWidth: {
        145: "145px",
      },
      lineHeight: {
        22: "22px",
      },
      backgroundColor: {
        pink: "#FFF9FB",
        ungu: "#FCFAFD",
        biru: "#F7FAFF",
        biruPrimary: "#1890FF",
        greenPrimary: "#52C41A",
        hijau: "#F8FEF1",
        dark: "#2F3136",
        unguSecondary: "#F5F0FC",
        red: "#EB5757",
        "red-6": "#F5222D",
        greenSecondary: "#27AE60",
        gray: "#F5F5F5",
        "gray-5": "#F2F2F2",
        // tagColor
        magenta: "#FFF0F6",
        redDust: "#FFF1F0",
        volcano: "#FFF2E8",
        orange: "#FFF7E6",
        gold: "#FFFBE6",
        lime: "#FCFFE6",
        green: "#F6FFED",
        cyan: "#E6FFFB",
        blue: "#E6F7FF",
        geekBlue: "#F0F5FF",
        purple: "#F9F0FF",
      },
      textColor: {
        // tag
        pink: "#EB2F96",
        red: "#F5222D",
        volcano: "#FA541C",
        orange: "#FA8C16",
        gold: "#FAAD14",
        lime: "#A0D911",
        green: "#52C41A",
        cyan: "#13C2C2",
        blue: "#1890FF",
        geekBlue: "#2F54EB",
        purple: "#722ED1",

        ungu: "#7B61FF",
        biru: "#2F54EB",
        hijau: "#52C41A",
        dark: "#E4E4E8",
        darkSecondary: "#262626",
        darkPrimary: "#E4E4E8",
        "dark-2": "#2F3136",
        gray: "#B7BDC9",
        "gray-7": "#B7BDC9",
        unguPrimary: "#5E20B3",
      },
      borderColor: {
        pink: "#EB2F96",
        red: "#FFA39E",
        volcano: "#FFBB96",
        orange: "#FFD591",
        gold: "#FFE58F",
        lime: "#EAFF8F",
        green: "#B7EB8F",
        cyan: "#E6FFFB",
        blue: "#91D5FF",
        geekBlue: "#ADC6FF",
        purple: "#D3ADF7",

        pinkSecondary: "#FFADD2",
        ungu: "#7B61FF",
        unguSecondary: "#D3ADF7",
        biru: "#2F54EB",
        biruSecondary: "#ADC6FF",
        hijau: "#52C41A",
        hijauSecondary: "#B7EB8F",
        gray: "#E4E4E8",
        graySecondary: "#D9D9D9",
      },
      fontFamily: {
        rubik: "Rubik",
        openSans: "Open Sans",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};