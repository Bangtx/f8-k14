import {Box} from "@mui/material";
import {PARTS} from "./page";

export default function () {

  return (
    <Box>
      {
        Array.from({length: 20}).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#1976d2',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
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