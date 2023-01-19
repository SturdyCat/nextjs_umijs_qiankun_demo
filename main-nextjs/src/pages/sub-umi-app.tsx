
import { Box, CircularProgress } from '@mui/material'
import { MicroApp, loadMicroApp } from 'qiankun'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let microApp: MicroApp | undefined = undefined
    if (typeof window !== "undefined") {
      microApp = loadMicroApp({
        name: 'sub-umi-app',
        entry: '//localhost:8000',
        container: "#subAppContainer",
        // props: { brand: 'qiankun' },
      });
    }
    return () => {
      microApp?.unmount()
    }
  }, [])

  return (
    <div id="subAppContainer">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )
}

