"use client";

import {
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  CircularProgress,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useListOrders } from "../../../hooks/useOrders";

export default function OrdersPage() {
  const { orders, isLoading } = useListOrders();
  const navigate = useNavigate();

  if (isLoading)
    return (
      <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />
    );

  return (
    <Box>
      <Card>
        <div
          title="ORDERS"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">ORDERS</Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "secondary.main" }}
            onClick={() => navigate("/orders/new")}
          >
            New Order
          </Button>
        </div>
        <List component={Paper}>
          {orders.length > 0 ? (
            orders.map((o) => {
              return (
                <ListItem key={o.id} divider>
                  <ListItemText
                    primary={`${o.supplier?.name} — $${o.totalAmount?.toFixed(
                      2
                    )}`}
                    secondary={new Date(
                      Number(o.createdAt) * 1000
                    ).toLocaleString()}
                  />
                </ListItem>
              );
            })
          ) : (
            <ListItem>
              <ListItemText primary="No orders yet." />
            </ListItem>
          )}
        </List>
      </Card>
    </Box>
  );
}
