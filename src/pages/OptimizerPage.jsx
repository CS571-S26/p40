import { useMemo, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import groceryData from '../data/groceryData'
import CategoryFilter from '../components/CategoryFilter'

function OptimizerPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [quantities, setQuantities] = useState({})
  const [results, setResults] = useState([])
  const [mixedTotal, setMixedTotal] = useState(null)
  const [bestStore, setBestStore] = useState(null)

  const filteredItems = useMemo(() => {
    return activeCategory === 'all'
      ? groceryData
      : groceryData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  function handleQuantityChange(itemName, value) {
    const qty = Math.max(0, parseInt(value) || 0)
    setQuantities((prev) => ({ ...prev, [itemName]: qty }))
  }

  function handleOptimize() {
    const chosenItems = groceryData.filter(
      (item) => quantities[item.name] && quantities[item.name] > 0
    )

    const cheapestPerItem = chosenItems.map((item) => {
      const qty = quantities[item.name]
      const entries = Object.entries(item.prices)
      const cheapest = entries.reduce((min, curr) =>
        curr[1] < min[1] ? curr : min
      )

      return {
        name: item.name,
        qty,
        store: cheapest[0],
        unitPrice: cheapest[1],
        total: cheapest[1] * qty,
      }
    })

    const mixedStoreTotal = cheapestPerItem.reduce((sum, item) => sum + item.total, 0)

    const storeTotals = {}
    chosenItems.forEach((item) => {
      const qty = quantities[item.name]
      Object.entries(item.prices).forEach(([store, price]) => {
        if (!storeTotals[store]) storeTotals[store] = 0
        storeTotals[store] += price * qty
      })
    })

    let cheapestStoreOverall = null
    for (const store in storeTotals) {
      if (!cheapestStoreOverall || storeTotals[store] < cheapestStoreOverall.total) {
        cheapestStoreOverall = { store, total: storeTotals[store] }
      }
    }

    setResults(cheapestPerItem)
    setMixedTotal(mixedStoreTotal)
    setBestStore(cheapestStoreOverall)
  }

  const hasItems = groceryData.some((item) => quantities[item.name] > 0)

  return (
    <Container className="py-5">
      <h1 className="mb-3">Grocery List Optimizer</h1>
      <p className="mb-4">
        Enter quantities for the items you need and we'll find the cheapest store for each,
        plus the best single-store total.
      </p>

      <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <Row className="mb-4">
        {filteredItems.map((item) => (
          <Col xs={6} md={4} key={item.name} className="mb-3">
            <Form.Label className="mb-1 text-capitalize fw-semibold">
              {item.name}
            </Form.Label>
            <Form.Control
              type="number"
              min={0}
              value={quantities[item.name] || ''}
              placeholder="0"
              onChange={(e) => handleQuantityChange(item.name, e.target.value)}
            />
          </Col>
        ))}
      </Row>

      <div className="d-flex gap-3 mb-4">
        <Button
          variant="success"
          size="lg"
          onClick={handleOptimize}
          disabled={!hasItems}
        >
          Optimize My List
        </Button>

        <Button
          variant="outline-danger"
          size="lg"
          onClick={() => { setQuantities({}); setResults([]); setMixedTotal(null); setBestStore(null) }}
          disabled={!hasItems}
        >
          Clear
        </Button>
      </div>

      {results.length === 0 ? (
        <Alert variant="secondary">
          Enter quantities above and click the button to see your results.
        </Alert>
      ) : (
        <>
          <Table striped bordered hover responsive className="mb-4">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Cheapest Store</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item.name}>
                  <td className="text-capitalize">{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.store}</td>
                  <td>${item.unitPrice.toFixed(2)}</td>
                  <td>${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Alert variant="success" className="mb-3 text-center">
            💰 Cheapest mixed-store total: <strong>${mixedTotal.toFixed(2)}</strong>
          </Alert>

          {bestStore && (
            <Alert variant="primary" className="text-center">
              🏪 Best single store: <strong>{bestStore.store}</strong>
              <br />
              Total: <strong>${bestStore.total.toFixed(2)}</strong>
            </Alert>
          )}
        </>
      )}
    </Container>
  )
}

export default OptimizerPage
