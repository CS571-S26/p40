import { useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import groceryData from '../data/groceryData'
import CategoryFilter from '../components/CategoryFilter'
import ItemSearchForm from '../components/ItemSearchForm'
import PriceComparisonTable from '../components/PriceComparisonTable'

function ComparePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState('')

  const filteredItems = useMemo(() => {
    return activeCategory === 'all'
      ? groceryData
      : groceryData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const itemData = useMemo(() => {
    return groceryData.find((item) => item.name === selectedItem) || null
  }, [selectedItem])

  function handleCategoryChange(cat) {
    setActiveCategory(cat)
    setSelectedItem('')
  }

  return (
    <Container className="py-5">
      <h1 className="mb-3">Compare a Single Item</h1>
      <p className="mb-4">
        Select one grocery item to compare its price across different stores.
      </p>

      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <ItemSearchForm
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        items={filteredItems}
      />

      <PriceComparisonTable itemData={itemData} />
    </Container>
  )
}

export default ComparePage
