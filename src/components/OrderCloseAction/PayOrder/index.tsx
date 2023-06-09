import { currencyFormat } from '../../../helpers/currency-format'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../style'

export function PayOrder() {
  const { cart, payOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='button' onClick={payOrder}>
        Pagar
      </button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
