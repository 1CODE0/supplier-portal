'use client'

import { useOrderList, useOrders } from '@/hooks/useOrders'

import EditDeleteActions from '@/utilities/EditDeleteActions'
import { ePathVariables } from '@/config/SupplierConfig'
import { useNav } from '@/hooks/useNav'
// import useThemePalette from '@/hooks/useThemePalette'
import {
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material'

export default function OrdersPage() {
  const { remove } = useOrders()
  const { orders, isLoading } = useOrderList()
  const router = useNav()
  // const { custom } = useThemePalette()

  const onDeleteOrder = (id: string) => {
    remove.mutate(id)
  }

  if (isLoading) return <CircularProgress sx={{ display: 'block', margin: 'auto', mt: 5 }} />
  return (
    <Box>
      <Card>
        <div
          title='ORDERS'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 10px'
          }}
        >
          <Typography variant='h4'>ORDERS</Typography>
          <Button
            variant='outlined'
            // sx={{ borderColor: 'secondary.main', color: 'secondary.main' }}
            title='NEW ORDER'
            onClick={() => router.push(ePathVariables.NEW_ORDERS)}
          >
            New Order
          </Button>
        </div>
        <List component={Paper}>
          {orders.length > 0 ? (
            orders.map(o => {
              return (
                <ListItem key={o.id} divider>
                  <ListItemText
                    primary={
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        {`${o.supplier?.name} — $${o.totalAmount?.toFixed(2)}`}
                        <Chip label={o.status} color={'default'} size='small' />
                      </div>
                    }
                    secondary={new Date(Number(o.updatedAt) * 1000).toLocaleString()}
                  />
                  <EditDeleteActions
                    id={o.id as string}
                    updatePath={ePathVariables.EDIT_ORDERS}
                    onDelete={() => onDeleteOrder(o.id as string)}
                    showDelete={true}
                  />
                </ListItem>
              )
            })
          ) : (
            <ListItem>
              <ListItemText primary='No orders yet.' />
            </ListItem>
          )}
        </List>
      </Card>
    </Box>
  )
}

//Using normal useEffect + openApi without any @tanstack/react-query
// 'use client'

// import Link from 'next/link'
// // import { useOrders } from '@/hooks/useOrders'
// import { Paper, Typography, Button, List, ListItem, ListItemText, Box, Card } from '@mui/material'
// import { Order, OrderControllerService } from '@/api'
// import { useEffect, useState } from 'react'

// export default function OrdersPage() {

//   const [orders, setOrders] = useState<Order[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     OrderControllerService.list()
//       .then(setOrders)
//       .catch(err => {
//         console.error(err)
//         setError('Failed to load orders')
//       })
//       .finally(() => setLoading(false))
//   }, [])

//   if (loading) return <Typography>Loading…</Typography>
//   if (error) return <Typography color='error'>Error loading orders.</Typography>

//   return (
//     <Box>
//       <Card>
//         <Box
//           title='ORDERS'
//           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}
//         >
//           <Typography variant='h4'>ORDERS </Typography>
//           <Link href='/orders/new' passHref>
//             <Button variant='contained' color='primary'>
//               New Order
//             </Button>
//           </Link>
//         </Box>
//         <List component={Paper}>
//           {orders.map(o => (
//             <ListItem key={o.id} divider>
//               <ListItemText
//                 primary={`${o.supplier} — $${o.amount?.toFixed(2)}`}
//                 secondary={new Date(o.createdAt!).toLocaleString()}
//               />
//             </ListItem>
//           ))}
//           {!orders.length && (
//             <ListItem>
//               <ListItemText primary='No orders yet.' />
//             </ListItem>
//           )}
//         </List>
//       </Card>
//     </Box>
//   )
// }
