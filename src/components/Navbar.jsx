import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo,logo1 } from "../utils/constants";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} width={60} />
      <img src={logo1} alt="logo" height={45} width={60}/>      
    </Link>
    <SearchBar />
  </Stack>
  
);

export default Navbar;
