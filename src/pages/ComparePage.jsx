import { useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import groceryData from '../data/groceryData'
import ItemSearchForm from '../components/ItemSearchForm'
import PriceComparisonTable from '../components/PriceComparisonTable'

function ComparePage() {
  const [selectedItem, setSelectedItem] = useState('')

  const itemData = useMemo(() => {
    return groceryData.find((item) => item.name === selectedItem) || null
  }, [selectedItem])

  return (
    <Container className="py-5">
      <h1 className="mb-3">Compare a Single Item</h1>
      <p className="mb-4">
        Select one grocery item to compare its price across different stores.
      </p>

      <ItemSearchForm
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        items={groceryData}
      />

      <PriceComparisonTable itemData={itemData} />
    </Container>
  )
}

export default ComparePage