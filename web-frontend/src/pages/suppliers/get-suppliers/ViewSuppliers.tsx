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
import { ePathVariables } from "../../../config/SupplierConfig";
import EditDeleteActions from "../../../utilities/EditDeleteActions";
import { useSupplierList, useSuppliers } from "../../../hooks/useSuppliers";

export default function ViewSuppliers() {
  const navigate = useNavigate();
  const { remove } = useSuppliers();
  const { suppliers, isLoading: isSuppliersLoading } = useSupplierList();

  if (isSuppliersLoading) {
    return (
      <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />
    );
  }

  const onDeleteSupplier = (id: string) => {
    remove.mutate(id);
  };

  return (
    <Box>
      <Card>
        <div
          title="SUPPLIERS"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">Suppliers</Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "secondary.main" }}
            onClick={() => navigate(ePathVariables.NEW_SUPPLIERS)}
          >
            New Supplier
          </Button>
        </div>
        <List component={Paper}>
          {suppliers.length > 0 ? (
            suppliers.map((supplier) => {
              return (
                <ListItem key={supplier.id} divider>
                  <ListItemText
                    primary={`${supplier.name} — $${supplier.address}`}
                    secondary={new Date(
                      Number(supplier.updatedAt) * 1000
                    ).toLocaleString()}
                  />
                  <EditDeleteActions
                    id={supplier.id as string}
                    updatePath={ePathVariables.EDIT_SUPPLIERS}
                    onDelete={() => onDeleteSupplier(supplier.id as string)}
                    showDelete={true}
                  />

                  {/* <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Button
                      onClick={() => navigate(ePathVariables.NEW_SUPPLIERS)}
                      variant="contained"
                      onMouseEnter={() =>
                        qc.prefetchQuery(['supplier', supplier.id], () =>
                          fetchSupplierById(supplier.id)
                        )
                      } 
                    >
                      Update
                    </Button>
                    <Button onClick={() => showConfirmationPopup(supplier)} variant="outlined">Delete</Button>
                  </div> */}
                </ListItem>
              );
            })
          ) : (
            <ListItem>
              <ListItemText primary="No Suppliers available." />
            </ListItem>
          )}
        </List>
      </Card>
    </Box>
  );
}
