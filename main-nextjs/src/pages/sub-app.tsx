import { Button, Stack } from "@mui/material";
import { useMemoizedFn } from "ahooks";
import router from "next/router";
import { MicroApp, loadMicroApp } from "qiankun";
import { useState } from "react";

type StateType = {
  microAppA?: MicroApp;
  microAppB?: MicroApp;
};

export default function Home() {
  // useEffect(() => {
  //   let microApp: MicroApp | undefined = undefined
  //   if (typeof window !== "undefined") {
  //     microApp = loadMicroApp({
  //       name: 'sub-umi-app',
  //       entry: '//localhost:8000',
  //       container: "#subAppContainer",
  //       // props: { brand: 'qiankun' },
  //     });
  //   }
  //   return () => {
  //     microApp?.unmount()
  //   }
  // }, [])

  const [state, setState] = useState<StateType>({});

  const handleMountMicroApp = useMemoizedFn((key: "A" | "B", port: number) => {
    if (typeof window !== "undefined") {
      const appKey: keyof StateType = `microApp${key}`;

      let microApp = state[appKey];
      if (microApp) {
        microApp.unmount();
        setState({ [appKey]: undefined });
      } else {
        microApp = loadMicroApp(
          {
            name: appKey,
            entry: `//localhost:${port}`,
            container: `#${appKey}Container`,
            // props: { brand: 'qiankun' },
          },
          {
            sandbox: { strictStyleIsolation: true },
          }
        );
        setState({ [appKey]: microApp });
      }
    }
  });

  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={() => router.push("/")}>
        主应用首页
      </Button>
      <Button
        variant="contained"
        color={state.microAppA ? "error":"success"}
        onClick={() => handleMountMicroApp("A", 8000)}
      >
        子应用A{state.microAppA ? "卸载" : "加载"}
      </Button>
      <div id="microAppAContainer"></div>
      <Button
        variant="contained"
        color={state.microAppB ? "error":"success"}
        onClick={() => handleMountMicroApp("B", 8001)}
      >
        子应用B{state.microAppB ? "卸载" : "加载"}
      </Button>
      <div id="microAppBContainer"></div>
    </Stack>
  );
}
