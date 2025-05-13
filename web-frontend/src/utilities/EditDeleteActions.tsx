import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface EditDeleteActionsProps {
  id: string | number;
  updatePath: string;
  onDelete?: (id: string | number) => void;
  showDelete?: boolean;
  editTooltip?: string;
  deleteTooltip?: string;
}

const EditDeleteActions: React.FC<EditDeleteActionsProps> = ({
  id,
  updatePath,
  onDelete,
  showDelete = true,
  editTooltip = "Edit",
  deleteTooltip = "Delete",
}) => {
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleEdit = () => navigate(`${updatePath}/${id}`);
  const handleDeleteClick = () => setConfirmOpen(true);
  const handleConfirmClose = () => setConfirmOpen(false);
  const handleConfirmDelete = () => {
    setConfirmOpen(false);
    onDelete?.(id);
  };

  return (
    <>
      <Box display="flex" gap={1} alignItems="center">
        <Tooltip title={editTooltip} arrow>
          <Button variant="contained" size="small" onClick={handleEdit}>
            Edit
          </Button>
        </Tooltip>

        {showDelete && (
          <Tooltip title={deleteTooltip} arrow>
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Tooltip>
        )}
      </Box>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmOpen}
        onClose={handleConfirmClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            Are you sure you want to delete this item (ID: {id})?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDeleteActions;
