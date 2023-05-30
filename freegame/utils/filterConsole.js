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
  setFilterOptions,
  filterOptions
) => {
  const newCategory = filterData[selected].name;
  const newSubtitle = filterData[selected].subTitles[subtitleIndex];

  // Önceki filtrelenen seçeneklerin kontrolü
  const isDuplicate = filterOptions.some(([category, subtitle]) => {
    return category === newCategory;
  });
  if (filterOptions.length === 1 && isDuplicate) {
    setFilterOptions([
      [
        (category = filterData[selected].name),
        (subtitle = filterData[selected].subTitles[subtitleIndex]),
      ],
    ]);
  } else if (subtitleIndex !== -1 && !isDuplicate) {
    setFilterOptions((prevFiltered) => [
      ...prevFiltered,
      [
        (category = filterData[selected].name),
        (subtitle = filterData[selected].subTitles[subtitleIndex]),
      ],
    ]);
  }
};

export const getFilteredGames = (
  selected,
  subtitle,
  filterData,
  setFilter,
  filterOptions
) => {
  if (filterOptions.length === 1) {
    setFilter({ category: filterData[selected].name, subTitle: subtitle });
  } else {
    const newFilters = filterOptions.map((option) => {
      return { category: option[0], subTitle: option[1] };
    });
    setFilter(newFilters);
  }
};
