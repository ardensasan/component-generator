import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import componentList from "../componentList";
const drawerWidth = 240;
const Menu = ({children}:any) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {componentList.map((text, index) => (
            <Link to={`/${text.toLowerCase()}`}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Menu;
