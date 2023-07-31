import moment from "moment";

export const calculateMonthsAgo = (releaseDate) => {
  const now = moment();
  const release = moment(releaseDate);
  const monthsAgo = now.diff(release, "months");
  if (monthsAgo === 0) {
    return "New";
  } else if (monthsAgo > 11) {
    return Math.round(monthsAgo / 12) + " yr.";
  }
  return monthsAgo + " mos.";
};
