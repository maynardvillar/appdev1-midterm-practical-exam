import Item from './Item'
import Divider from './Divider'
import './ItemList.css'

function ItemList() {
  return (
    <section className="item-list">
      <Item title="HTML & CSS" description="Structure and style the web" />
      <Divider />
      <Item title="JavaScript" description="Add logic and interactivity" />
      <Divider />
      <Item title="React" description="Build components and UI" />
    </section>
  )
}

export default ItemList