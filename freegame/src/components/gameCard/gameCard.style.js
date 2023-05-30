import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 120,
    padding: 16,
    alignSelf: "center",
    flexDirection: "row",
    marginHorizontal: 10,
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
    width: 230,
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
    alignItems: "center",
    marginLeft: "auto",
  },
  monthText: {
    padding: 5,
  },
});
