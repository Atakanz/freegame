import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  directionButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  directionsContainer: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  leftRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
  },
  selectedOptionView: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginVertical: 3,
    marginRight: 3,
    borderRadius: 5,
    display: "flex",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedFilterView: {
    display: "flex",
    width: "93%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedOptionText: {
    color: "black",
    fontWeight: "bold",
  },
  deleteFilterView: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  deleteContainer: {
    marginRight: 13,
  },
});
