export const RouteData = [
  {
    to: "ref-hook",
    title: "Ref Hooks",
    ifNavDropdownLink: false,
    folderName: "contentPages",
    fileName: "RefHookOverview",
    children: [],
  },
  {
    to: "state-hook",
    title: "State Hooks",
    ifNavDropdownLink: true,
    folderName: "contentPages",
    fileName: "StateHookOverview",
    children: [
      {
        to: "useState",
        title: "useState",
        folderName: "contentPages",
        fileName: "UseStateHookOverview",
        children: [
          {
            to: "counter",
            title: "counter",
            folderName: "stateHooks",
            fileName: "CounterStateHook",
          },
        ],
      },
      {
        to: "useReducer",
        title: "useReducer",
        folderName: "contentPages",
        fileName: "UseReduceHookOverview",
        children: [
          {
            to: "counter",
            title: "counter",
          },
          {
            to: "stopwatch",
            title: "stopwatch",
          },
          {
            to: "todos",
            title: "todos",
          },
          {
            to: "form",
            title: "form",
          },
        ],
      },
    ],
  },
];
