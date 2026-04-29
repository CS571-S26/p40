import { Form } from 'react-bootstrap'

//this component lets user pick one item from dropdown
function ItemSearchForm({ selectedItem, setSelectedItem, items }) {
  return (
    <Form className="mb-4">
      
      {/* label */}
      <Form.Label htmlFor="item-select">Select an item</Form.Label>

      {/* dropdown */}
      <Form.Select
        id="item-select"
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        {/* default option */}
        <option value="">-- Choose an item --</option>

        {/* map through items */}
        {items.map((item) => (
          <option key={item.name} value={item.name}>
            {/* capitalize first letter */}
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </option>
        ))}
      </Form.Select>

    </Form>
  )
}

export default ItemSearchForm