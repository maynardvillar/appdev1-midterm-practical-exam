import Item from './Item'
import Divider from './Divider'

function ItemList() {
  return (
    <section>
      <Item title="HTML & CSS" description="Structure and style the web" />
      <Divider />
      <Item title="JavaScript" description="Add logic and interactivity" />
      <Divider />
      <Item title="React" description="Build components and UIs" />
    </section>
  )
}

export default ItemList