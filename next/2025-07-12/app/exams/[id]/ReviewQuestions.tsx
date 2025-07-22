import {Box} from "@mui/material";
import {Context, PARTS, ProviderI} from "./page";
import {useContext} from "react";

export default function () {
  const injector: ProviderI = useContext(Context)
  const {question} = injector

  return (
    <Box>
      {
        Array.from({length: 20}).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#fff',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1976d2',
              border: '1px solid #1976d2',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {index + 1}
          </Box>
        ))
      }
    </Box>
  )
}