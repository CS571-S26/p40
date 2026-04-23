import { Button, ButtonGroup } from 'react-bootstrap'

const CATEGORY_FILTERS = ['dairy', 'produce', 'meat', 'pantry', 'beverages', 'snacks', 'frozen']

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="mb-4">
      <Button
        variant={activeCategory === 'all' ? 'success' : 'outline-secondary'}
        onClick={() => onCategoryChange('all')}
        className="w-100 mb-2"
      >
        All
      </Button>
      <ButtonGroup className="w-100 flex-wrap gap-1">
        {CATEGORY_FILTERS.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? 'success' : 'outline-secondary'}
            onClick={() => onCategoryChange(cat)}
            className="text-capitalize flex-grow-1"
          >
            {cat}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

export default CategoryFilter
