export const RouteData = [
  {
    to: "performane-hook",
    title: "Performance Hooks",
    ifNavDropdownLink: false,
    folderName: "contentPages",
    fileName: "PerformaneHookOverview",
    children: [],
  },
  {
    to: "ref-hook",
    title: "Ref Hooks",
    ifNavDropdownLink: false,
    folderName: "contentPages",
    fileName: "RefHookOverview",
    children: [
      {
        to: "useRef",
        title: "useRef",
        folderName: "contentPages",
        fileName: "UseStateHookOverview",
        children: [
          {
            to: "deleteTest",
            title: "deleteTest",
            folderName: "contentPages",
            fileName: "UseRefHookOverview",
            children: [],
          },
        ],
      },
    ],
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
            folderName: "reducerHooks",
            fileName: "CounterReducerHook",
          },
          {
            to: "stopwatch",
            title: "stopwatch",
            folderName: "reducerHooks",
            fileName: "StopwatchReducerHook",
          },
          {
            to: "todos",
            title: "todos",
            folderName: "reducerHooks",
            fileName: "TodoReducerHook",
          },
          {
            to: "form",
            title: "form",
            folderName: "reducerHooks",
            fileName: "FormReducerHook",
          },
        ],
      },
    ],
  },
];
