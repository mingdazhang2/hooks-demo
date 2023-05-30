export const RouteData = [
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
  {
    to: "content-hook",
    title: "Content Hooks",
    ifNavDropdownLink: false,
    folderName: "contentPages",
    fileName: "ContentHookOverview",
    children: [],
  },
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
        fileName: "UseRefHookOverview",
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
    to: "effect-hook",
    title: "Effect Hooks",
    ifNavDropdownLink: false,
    folderName: "contentPages",
    fileName: "EffectHookOverview",
    children: [
      {
        to: "useEffect",
        title: "useEffect",
        folderName: "contentPages",
        fileName: "UseEffectHookOverview",
        children: [
          {
            to: "interval-Demo",
            title: "Interval Demo",
            folderName: "effectHooks",
            fileName: "IntervalDemo",
            children: [],
          },
          {
            to: "fetch-api",
            title: "Fetch API Demo",
            folderName: "effectHooks",
            fileName: "FetchAPI",
          },
        ],
      },
      {
        to: "useLayoutEffect",
        title: "useLayoutEffect",
        folderName: "contentPages",
        fileName: "UseLayoutEffectHookOverview",
        children: [],
      },
    ],
  },
];
