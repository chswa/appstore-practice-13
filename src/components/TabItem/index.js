// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-items-container">
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
