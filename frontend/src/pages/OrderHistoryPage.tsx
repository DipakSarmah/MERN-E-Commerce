import { useNavigate } from 'react-router-dom'
import { useGetOrderHistoryQuery } from '../hooks/orderHooks'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import { Button, Col, Row, Table } from 'react-bootstrap'

export default function OrderHistoryPage() {
  const navigate = useNavigate()
  const { data: orders, isLoading, error } = useGetOrderHistoryQuery()

  return (
    <div>
      <Helmet>
        <title>Order History</title>
      </Helmet>
      <h1>Order History</h1>
      {isLoading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{getError(err as ApiError)}</MessageBox>
      ) : (
        <Table>
          <thead>
            <Row>
              <Col>ID</Col>
              <Col>DATE</Col>
              <Col>TOTAL</Col>
              <Col>PAID</Col>
              <Col>DELIVERED</Col>
              <Col>ACTIONS</Col>
            </Row>
          </thead>
          <tbody>
            {orders!.map((order) => (
              <Row key={order._id}>
                <Col>{order._id}</Col>
                <Col>{order.createdAt.substring(0, 10)}</Col>
                <Col>{order.totalPrice.toFixed(2)}</Col>
                <Col>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</Col>
                <Col>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </Col>
                <Col>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => {
                      navigate(`/order/${order._id}`)
                    }}
                  >
                    Details
                  </Button>
                </Col>
              </Row>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}
