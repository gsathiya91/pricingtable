import React from "react";
import './index.js';
import './index.css';
import {
  Box,
  Paper,
  Button,
  Grid,
  Divider,
  MenuList,
  MenuItem,
  ListItemIcon
}
  from '@mui/material';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';

export default function PricingTable() {
  return (
    <div className="container">
      <Box className="paperbox">
        <Paper className="papers" Id="br">
          <Grid className="grid">FREE</Grid>
          <h1>$0<span>/month</span></h1>

          <Divider />

          <br />

          <MenuList>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Single User
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              5GB Storage
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Unlimited Public Projects
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Community Access
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Close className="wrong" />
              </ListItemIcon>
              <p className="none">Unlimited Private Projects</p>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Close className="wrong" />
              </ListItemIcon>
              <p className="none">Dedicated Phone Support</p>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Close className="wrong" />
              </ListItemIcon>
              <p className="none">Free Subdomain</p>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Close className="wrong" />
              </ListItemIcon>
              <p className="none">Monthly Status Reports</p>
            </MenuItem>

          </MenuList>
          <div className="btn">
          <Button variant="contained" className="rounded-pill">Button</Button>
          </div>
          


        </Paper>

        <Paper className="papers" Id="br">
          <Grid className="grid">PLUS</Grid>
          <h1>$9<span>/month</span></h1>

          <Divider />

          <br />

          <MenuList>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              <span className="users">5 Users</span>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              50GB Storage
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Unlimited Public Projects
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Community Access
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Unlimited Private Projects
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Dedicated Phone Support
            </MenuItem>

            <MenuItem>
              <ListItemIcon >
                <Check className="tick1" />
              </ListItemIcon>
              Free Subdomain
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Close className="wrong" />
              </ListItemIcon>
              <p className="none">Monthly Status Reports</p>
            </MenuItem>

          </MenuList>

          <div className="btn">
          <Button variant="contained" className="rounded-pill">Button</Button>
          </div>

        </Paper>


        <Paper className="papers" Id="br">
          <Grid className="grid">PRO</Grid>
          <h1>$49<span>/month</span></h1>

          <Divider light />

          <br />

          <MenuList>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
             <span className="users"> Unlimited Users</span>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              150GB Storage
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1"/>
              </ListItemIcon>
              Unlimited Public Projects
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Community Access
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Unlimited Private Projects
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Dedicated Phone Support
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              <p className="free"><span className ="unlimited">Unlimited </span> 
              Free Subdomains</p>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Check className="tick1" />
              </ListItemIcon>
              Monthly Status Reports
            </MenuItem>

          </MenuList>

          <div className="btn">
          <Button variant="contained" className="rounded-pill">Button</Button>
          </div>
          
        </Paper>

      </Box>
    </div>
  );
}
