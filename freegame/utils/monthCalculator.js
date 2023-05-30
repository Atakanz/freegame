import moment from "moment";

export const calculateMonthsAgo = (releaseDate) => {
  const now = moment();
  const release = moment(releaseDate);
  const monthsAgo = now.diff(release, "months");
  if (monthsAgo === 0) {
    return "New";
  }
  return monthsAgo;
};
