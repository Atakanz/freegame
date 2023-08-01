import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  filterTitlesOutline: {
    display: "flex",
    justifyContent: "center",
  },
  directionsContainer: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  leftRightContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
  },
  arrowFilterContainer: {
    display: "flex",
    flexDirection: "row",
  },
  selectedOptionView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 8,
    marginTop: 10,
    paddingVertical: 2,
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
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedOptionText: {
    color: "rgba(53, 141, 230, 1)",
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
