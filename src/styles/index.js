import { StyleSheet } from "react-native";

const tw = StyleSheet.create({
  /* Layout */
  flex1: { flex: 1 },
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  justifyCenter: { justifyContent: "center" },
  itemsCenter: { alignItems: "center" },
  absolute:{position:"absolute"},

  /* Spacing - margin */
  mt1: { marginTop: 4 },
  mt2: { marginTop: 8 },
  mt3: { marginTop: 12 },
  mt4: { marginTop: 16 },
  mt5: { marginTop: 20 },

  mb1: { marginBottom: 4 },
  mb2: { marginBottom: 8 },
  mb3: { marginBottom: 12 },

  /* Padding */
  p1: { padding: 4 },
  p2: { padding: 8 },
  p3: { padding: 12 },
  p4: { padding: 16 },

  px2: { paddingHorizontal: 8 },
  py2: { paddingVertical: 8 },

  b4:{bottom:16},
  r4:{right:16},


  /* Text */
  textSm: { fontSize: 12 },
  textMd: { fontSize: 16 },
  textLg: { fontSize: 20 },
  textXl: { fontSize: 28 },

  textWhite: { color: "#fff" },
  textRed: { color: "#f00" },
  textGray: { color: "#aaa" },

  textCenter: { textAlign: "center" },
  textBold: { fontWeight: "bold" },

  /* Background */
  bgDark: { backgroundColor: "#222" },
  bgRed: { backgroundColor: "#f00" },
  bgGreen: { backgroundColor: "#0f0" },

  /* Buttons / shapes */
  rounded: { borderRadius: 8 },
  roundedFull: { borderRadius: 999 },

  /* Sizes */
  wFull: { width: "100%" },
  hFull: { height: "100%" },
});

export default tw;
