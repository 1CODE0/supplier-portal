'use client'

import Link from 'next/link'
import { useOrders } from '@/hooks/useOrders'
import { Paper, Typography, Button, List, ListItem, ListItemText, Box, Card } from '@mui/material'

export default function OrdersPage() {
  const { orders, isLoading, error } = useOrders()

  if (isLoading) return <Typography>Loading…</Typography>
  if (error) return <Typography color='error'>Error loading orders.</Typography>

  return (
    <Box>
      <Card>
        <div
          title='ORDERS'
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}
        >
          <Typography variant='h4'>ORDERS </Typography>
          <Link href='/orders/new' passHref>
            <Button variant='contained' color='primary'>
              New Order
            </Button>
          </Link>
        </div>
        <List component={Paper}>
          {orders.map(o => (
            <ListItem key={o.id} divider>
              <ListItemText
                primary={`${o.supplier} — $${o.amount?.toFixed(2)}`}
                secondary={new Date(o.createdAt!).toLocaleString()}
              />
            </ListItem>
          ))}
          {!orders.length && (
            <ListItem>
              <ListItemText primary='No orders yet.' />
            </ListItem>
          )}
        </List>
      </Card>
    </Box>
  )
}
