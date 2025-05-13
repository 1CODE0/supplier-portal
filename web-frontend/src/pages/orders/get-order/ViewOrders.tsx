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
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ePathVariables } from "../../../config/SupplierConfig";
import EditDeleteActions from "../../../utilities/EditDeleteActions";
import customToast from "../../../utilities/customToast";
import { useOrderList, useOrders } from "../../../hooks/useOrders";

export default function OrdersPage() {
  const { remove } = useOrders();
  const { orders, isLoading } = useOrderList();
  const navigate = useNavigate();

  if (isLoading)
    return (
      <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />
    );

  const onDeleteOrder = async (id: string) => {
    try {
      await remove.mutate(id);
    } catch {
      customToast("error", "Failed to create order.");
    }
  };

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
            onClick={() => navigate(ePathVariables.NEW_ORDERS)}
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
                    primary={
                      <div style={{ display: "flex", gap: "1rem" }}>
                        {`${o.supplier?.name} — $${o.totalAmount?.toFixed(2)}`}
                        <Chip label={o.status} color={"default"} size="small" />
                      </div>
                    }
                    secondary={new Date(
                      Number(o.updatedAt) * 1000
                    ).toLocaleString()}
                  />
                  <EditDeleteActions
                    id={o.id as string}
                    updatePath={ePathVariables.EDIT_ORDERS}
                    onDelete={() => onDeleteOrder(o.id as string)}
                    showDelete={true}
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
