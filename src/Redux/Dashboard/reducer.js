import * as Types from "./actionTypes";
import {
  completedActivities,
  scheduledActivities,
  highPriorityAlerts,
  chartAnalysis,
} from "./dummyData.js";

const initialState = {
  isLoading: false,
  isError: false,
  data: {
    completedActivities,
    scheduledActivities,
    highPriorityAlerts,
    chartAnalysis,
  },
};

export const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.DATA_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };
    case Types.DATA_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: {
          completedActivities,
          scheduledActivities,
          highPriorityAlerts,
          chartAnalysis,
        },
      };
    case Types.DATA_FAILURE:
      return {
        isLoading: false,
        isError: payload,
      };
    default:
      return state;
  }
};
