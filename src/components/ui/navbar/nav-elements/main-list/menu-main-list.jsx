import MenuElement from "@/components/ui/navbar/nav-elements/main-list/menu-element"
export default function MenuMainList(props) {
  const menuItems = [
    { link: '/translations', text: 'translations', key: 'main-element', sub_links: [{ link: '/elements/element-1', text: 'element-1', key: 'element-1' }, { link: '/elements/element-2', text: 'element-2', key: 'element-2' }] },
    { link: '/info', text: 'info', key: 'info-nav-element' },
    { link: '/contact', text: 'contac', key: 'contact=nav-element' },
  ]
  return (
    <>
      <ul className="navbar-nav me-auto">
        {menuItems.map((item) => {
          return (
            <MenuElement link={item.link} text={item.text} element_key={item.key} sub_links={item.sub_links} />
          )
        })}
      </ul>
    </>
  )
}