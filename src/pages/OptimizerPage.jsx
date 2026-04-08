import { useState } from 'react'
import { Alert, Button, Container, Form, Table } from 'react-bootstrap'
import groceryData from '../data/groceryData'

function OptimizerPage() {
  const [selectedItems, setSelectedItems] = useState([])
  const [results, setResults] = useState([])
  const [mixedTotal, setMixedTotal] = useState(null)
  const [bestStore, setBestStore] = useState(null)

  function handleCheckboxChange(itemName) {
    setSelectedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    )
  }

  function handleOptimize() {
    const chosenItems = groceryData.filter((item) =>
      selectedItems.includes(item.name)
    )

    const cheapestPerItem = chosenItems.map((item) => {
      const entries = Object.entries(item.prices)
      const cheapest = entries.reduce((min, curr) =>
        curr[1] < min[1] ? curr : min
      )

      return {
        name: item.name,
        store: cheapest[0],
        price: cheapest[1],
      }
    })

    const mixedStoreTotal = cheapestPerItem.reduce(
      (sum, item) => sum + item.price,
      0
    )

    const storeTotals = {}
    chosenItems.forEach((item) => {
      Object.entries(item.prices).forEach(([store, price]) => {
        if (!storeTotals[store]) {
          storeTotals[store] = 0
        }
        storeTotals[store] += price
      })
    })

    let cheapestStoreOverall = null
    for (const store in storeTotals) {
      if (
        !cheapestStoreOverall ||
        storeTotals[store] < cheapestStoreOverall.total
      ) {
        cheapestStoreOverall = {
          store,
          total: storeTotals[store],
        }
      }
    }

    setResults(cheapestPerItem)
    setMixedTotal(mixedStoreTotal)
    setBestStore(cheapestStoreOverall)
  }

  return (
    <Container className="py-5">
      <h1 className="mb-3">Grocery List Optimizer</h1>
      <p className="mb-4">
        Choose multiple grocery items and see the cheapest store for each item,
        along with the cheapest mixed-store total and best single-store total.
      </p>

      <Form className="mb-4">
        {groceryData.map((item) => (
          <Form.Check
            key={item.name}
            type="checkbox"
            label={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            checked={selectedItems.includes(item.name)}
            onChange={() => handleCheckboxChange(item.name)}
            className="mb-2"
          />
        ))}
      </Form>

      <Button variant="success" className="mb-4" onClick={handleOptimize}>
        Optimize My List
      </Button>

      {results.length === 0 ? (
        <Alert variant="secondary">
          Select a few items and click the button to see your results.
        </Alert>
      ) : (
        <>
          <Table striped bordered hover responsive className="mb-4">
            <thead>
              <tr>
                <th>Item</th>
                <th>Cheapest Store</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item.name}>
                  <td className="text-capitalize">{item.name}</td>
                  <td>{item.store}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Alert variant="success" className="mb-3">
            Cheapest mixed-store total: <strong>${mixedTotal.toFixed(2)}</strong>
          </Alert>

          {bestStore && (
            <Alert variant="primary">
              Cheapest single-store total: <strong>{bestStore.store}</strong> at{' '}
              <strong>${bestStore.total.toFixed(2)}</strong>
            </Alert>
          )}
        </>
      )}
    </Container>
  )
}

export default OptimizerPage