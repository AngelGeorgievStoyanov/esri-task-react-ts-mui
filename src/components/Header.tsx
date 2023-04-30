import { FC } from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header: FC = () => {

    return (
        <AppBar position="static" >
            <Toolbar  sx={{ display: 'flex', backgroundImage: `url(https://esribulgaria.com/wp-content/themes/esribulgaria2013/images/logotagline.png)` }} >
                {/* TODO ADD NAV  */}
            </Toolbar>
        </AppBar>
    )


}

export default Header;