import _ from "lodash";

export const getSortedAndActiveData = (params) => {
  const {
    list,
    activeFieldName = "IsActive",
    sortFieldName = "DisplayOrder",
    sortDirection = "asc",
  } = params;

  const sortedAndActiveData = _.chain(list)
    .filter((item) => {
      return item[activeFieldName];
    })
    .orderBy([sortFieldName], [sortDirection])
    .value();
  return sortedAndActiveData;
};

export const getSortedDate = (params) => {
  const {
    list,
    sortFieldName = "DisplayOrder",
    sortDirection = "asc",
  } = params;

  const sortedData = _.chain(list)
    .orderBy([sortFieldName], [sortDirection])
    .value();
  return sortedData;
};

export const getActiveDate = (params) => {
  const { list, activeFieldName = "IsActive" } = params;

  const activeDate = _.chain(list)
    .filter((item) => {
      return item[activeFieldName];
    })
    .value();
  return activeDate;
};

export default getSortedAndActiveData;
