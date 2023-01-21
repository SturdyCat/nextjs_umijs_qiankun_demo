import { Button, Stack } from "@mui/material";
import router from "next/router";

const PageA = () => {
  return (
    <Stack spacing={2}>
      <h2>NEXTJS 主应用页面A</h2>
      <Button variant="contained" onClick={() => router.push('/')} >主应用首页</Button>
      <Button variant="contained" onClick={() => router.push('/sub-app')} >子应用管理</Button>
    </Stack>
  );
};

export default PageA;