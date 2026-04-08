import { Table, Alert } from 'react-bootstrap'

//this component shows price comparison for one item
function PriceComparisonTable({ itemData }) {

  //if no item selected, show message
  if (!itemData) {
    return (
        <Alert variant="info" className="text-center">
            👆 Select an item to compare prices
        </Alert>
    )
  }

  return (
    <Table striped bordered hover responsive>
      
      {/* table header */}
      <thead>
        <tr>
          <th>Store</th>
          <th>Price</th>
        </tr>
      </thead>

      {/* table body */}
      <tbody>
        {/* looping through store-price pairs */}
        {Object.entries(itemData.prices).map(([store, price]) => (
          <tr key={store}>
            <td>{store}</td>
            <td>${price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>

    </Table>
  )
}

export default PriceComparisonTable