import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";

export interface BulkDeletionActionProps {
  selectedIds: Array<string | number>;
  onBulkDelete: (ids: Array<string | number>) => void;
  deleteTooltip?: string;
}

export const BulkDeletionAction: React.FC<BulkDeletionActionProps> = ({
  selectedIds,
  onBulkDelete,
  deleteTooltip = "Delete Selected",
}) => {
  const [confirmBulkOpen, setConfirmBulkOpen] = useState(false);
  const handleBulkClick = () => setConfirmBulkOpen(true);
  const handleBulkClose = () => setConfirmBulkOpen(false);
  const handleBulkConfirm = () => {
    setConfirmBulkOpen(false);
    onBulkDelete(selectedIds);
  };

  return (
    <>
      <Tooltip title={deleteTooltip} arrow>
        <span>
          <Button
            variant="outlined"
            size="small"
            color="error"
            disabled={selectedIds.length === 0}
            onClick={handleBulkClick}
          >
            Delete ({selectedIds.length})
          </Button>
        </span>
      </Tooltip>

      <Dialog
        open={confirmBulkOpen}
        onClose={handleBulkClose}
        aria-labelledby="confirm-bulk-dialog-title"
        aria-describedby="confirm-bulk-dialog-description"
      >
        <DialogTitle id="confirm-bulk-dialog-title">
          Confirm Bulk Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-bulk-dialog-description">
            Are you sure you want to delete {selectedIds.length} items?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBulkClose}>Cancel</Button>
          <Button onClick={handleBulkConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
