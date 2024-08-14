import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Function() {
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
}

export default Function;
