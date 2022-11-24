// #region Global Imports
import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { Theme } from "@mui/material/styles"
// #endregion Global Imports

import { ThemeOptions } from "@mui/material/styles"

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: '#740658',
        },
          secondary: {
            main: '#f50057',
        },
    },
}

export default lightThemeOptions
