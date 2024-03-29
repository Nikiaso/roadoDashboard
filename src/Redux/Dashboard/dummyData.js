//  this should be in general practices

// export const completedActivities = [
//   {
//     Loads: [
//       {
//         Load_no: "I-I-AAA-1325",
//         Actions: [
//           {
//             Status: "Created",
//             Dispatch_team: "Gurpreet Singh",
//           },
//           {
//             Status: "Picked Up",
//             Driver: "Aman",
//             Location_name: "Location_Name",
//           },
//           {
//             Status: "Created",
//             Dispatch_team: "Gurpreet Singh",
//           },
//           {
//             Status: "Added",
//             Performed: "Gurpreet Singh",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const completedActivities = [
  {
    message:
      "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
  },
  {
    message:
      "Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325",
  },
  {
    message:
      "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
  },
  {
    message: "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  },
];

//  this should be in general practices

// export const scheduledActivities = [
//   {
//     Loads: [
//       {
//         Load_no: "I-I-AAA-1325",
//         Actions: [
//           {
//             Status: "Delivered",
//             Driver: "Aman",
//           },
//           {
//             Status: "Picked Up",
//             Driver: "Aman",
//             Location_name: "Location_Name",
//           },
//           {
//             Status: "Added",
//             Performed: "Gurpreet Singh",
//           },
//           {
//             Status: "Added",
//             Performed: "Gurpreet Singh",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const scheduledActivities = [
  {
    message: "Load No. I-I-AAA-1325 will be delivered by Aman (Driver)",
  },
  {
    message:
      "Aman (Driver) will Picked Up goods at Location_Name for Load No. I-I-AAA-1325",
  },
  {
    message: "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  },
  {
    message: "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  },
];

export const highPriorityAlerts = [
  {
    Alert_title: "Driver Raised Concern",
    Load_no: "12454",
    Bill_to: "RoaDo demo Bangalore",
    Date: "13 Feb 24",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    Alert_title: "Reefer Temp. out of range",
    Load_no: "12454",
    Bill_to: "RoaDo demo Bangalore",
    Date: "13 Feb 24",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export const chartAnalysis = [
  {
    Analysis_title: "Orders",
    Total: "123456",
    Upcoming: "50",
    Ongoing: "100",
    Completed: "50",
  },
  {
    Analysis_title: "Trips",
    Total: "123456",
    Upcoming: "50",
    Ongoing: "100",
    Completed: "50",
  },
  {
    Analysis_title: "Revenue",
    Total: "123456",
    Upcoming: "50",
    Ongoing: "100",
    Completed: "50",
  },
  {
    Analysis_title: "Expenses",
    Total: "123456",
    Upcoming: "50",
    Ongoing: "100",
    Completed: "50",
  },
];
