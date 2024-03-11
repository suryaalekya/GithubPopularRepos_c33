// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, isActive, changeActiveBtn} = props
  const {id, language} = eachLanguage
  const btnHighLight = isActive ? 'high-light' : ''

  const onClickingLanguageBtn = () => {
    changeActiveBtn(id)
  }

  return (
    <li>
      <button
        type="button"
        className={`each-language ${btnHighLight}`}
        onClick={onClickingLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
