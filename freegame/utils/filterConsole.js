export const rightArrow = (setSelected, setSubtitleIndex, setSubtitle) => {
  setSelected((prevSelected) => (prevSelected < 2 ? prevSelected + 1 : 2));
  setSubtitleIndex(-1);
  setSubtitle("");
};

export const leftArrow = (setSelected, setSubtitleIndex, setSubtitle) => {
  setSelected((prevSelected) => (prevSelected > 0 ? prevSelected - 1 : 0));
  setSubtitleIndex(-1);
  setSubtitle("");
};

export const downSubtitle = (
  subtitleIndex,
  filterData,
  selected,
  setSubtitleIndex,
  setSubtitle
) => {
  const newIndex =
    subtitleIndex === -1
      ? filterData[selected].subTitles.length - 1
      : subtitleIndex - 1;
  setSubtitleIndex(newIndex);
  setSubtitle(filterData[selected].subTitles[newIndex]);
};

export const upSubtitle = (
  subtitleIndex,
  filterData,
  selected,
  setSubtitleIndex,
  setSubtitle
) => {
  const newIndex =
    subtitleIndex === filterData[selected].subTitles.length - 1
      ? 0
      : subtitleIndex + 1;
  setSubtitleIndex(newIndex);
  setSubtitle(filterData[selected].subTitles[newIndex]);
};

export const selectFilterOption = (
  selected,
  subtitleIndex,
  filterData,
  setFilterOptions
) => {
  setFilterOptions(filterData[selected].subTitles[subtitleIndex]);
};

export const getFilteredGames = (selected, subtitle, filterData, setFilter) => {
  setFilter({ category: filterData[selected].name, subTitle: subtitle });
};
