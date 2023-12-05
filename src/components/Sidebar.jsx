import { Stack } from '@mui/material'
import React from 'react'
import { categories } from './utils/constants'

const Sidebar = () => 
  (
    <Stack direction='row'
           sx={{
            overflowY: 'auto', 
            height:  {xs: 'auto',md: "95%"},
            flexDirection: {md: "column"}
           }}
    >
        {
            categories.map(category => (
                <button>
                    <span>
                        {category.icon}
                    </span>
                    <span>
                        {category.name}
                    </span>
                </button>
            ))
        }

    </Stack>
  )


export default Sidebar