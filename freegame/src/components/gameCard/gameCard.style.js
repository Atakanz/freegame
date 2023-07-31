import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    width: "90%",
    padding: 16,
    display: "flex",
    alignSelf: "center",
    marginHorizontal: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
  },
  cardTitle: {
    fontFamily: "sans-serif",
    color: "white",
    letterSpacing: 1.5,
    marginBottom: 10,
    maxWidth: "95%",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
  qualifications: {
    fontFamily: "sans-serif",
    color: "white",
    fontSize: 12,
    textAlign: "auto",
  },
  props: {
    fontSize: 12,
    color: "orange",
    fontFamily: "sans-serif",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginTop: "auto",
  },
  monthText: {
    padding: 5,
  },
});
