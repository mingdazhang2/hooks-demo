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
    children: [
      {
        to: "useMemo",
        title: "useMemo",
        folderName: "contentPages",
        fileName: "UseMemoHookOverview",
        children: [
          {
            to: "add-todo",
            title: "Add Todo",
            folderName: "performanceHooks",
            fileName: "AddTodoMemo",
            children: [],
          },
        ],
      },
      {
        to: "useCallback",
        title: "useCallback",
        folderName: "contentPages",
        fileName: "UseCallbackHookOverview",
        children: [
          {
            to: "add-todo",
            title: "Add Todo",
            folderName: "performanceHooks",
            fileName: "AddTodoCallback",
            children: [],
          },
        ],
      },
    ],
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
            to: "interval-Demo",
            title: "Interval Demo",
            folderName: "refHooks",
            fileName: "IntervalDemo",
            children: [],
          },
          {
            to: "manipulate-dom",
            title: "Manipulating the DOM",
            folderName: "refHooks",
            fileName: "FocuseInput",
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
            to: "video-player",
            title: "Video Player",
            folderName: "effectHooks",
            fileName: "VideoPlayerDemo",
            children: [],
          },
          {
            to: "chat-room",
            title: "Chat Room",
            folderName: "effectHooks",
            fileName: "ChatRoom",
          },
          {
            to: "fetch-api",
            title: "Fetch API Demo",
            folderName: "effectHooks",
            fileName: "FetchAPI",
          },
          {
            to: "update-title",
            title: "Update Browser Title",
            folderName: "effectHooks",
            fileName: "UpdateBrowserTitle",
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
      {
        to: "useInsertionEffect",
        title: "useInsertionEffect",
        folderName: "contentPages",
        fileName: "UseInsertionEffectHookOverview",
        children: [],
      },
    ],
  },
  {
    to: "own-hook",
    title: "Own Hooks",
    ifNavDropdownLink: false,
    folderName: "contentPages",
    fileName: "OwnHookOverview",
    children: [
      {
        to: "useFetch",
        title: "useFetch Demo",
        folderName: "contentPages",
        fileName: "UseFetchDemo",
        children: [],
      },
      {
        to: "useDebounce",
        title: "useDebounce Demo",
        folderName: "contentPages",
        fileName: "UseDebounceDemo",
        children: [],
      },
      {
        to: "others",
        title: "Other stuff",
        folderName: "contentPages",
        fileName: "OthersOverview",
        children: [
          {
            to: "accordion",
            title: "Accordion Demo",
            folderName: "others",
            fileName: "AccordionDemo",
            children: [],
          },
        ],
      },
    ],
  },
];
