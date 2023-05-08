// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isButtonClicked: false}

  plusMinusClicked = () => {
    const {isButtonClicked} = this.state
    this.setState({isButtonClicked: !isButtonClicked})
  }

  render() {
    const {isButtonClicked} = this.state
    const {details} = this.props
    const {id, questionText, answerText} = details
    const imgUrl = isButtonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    const altText = isButtonClicked ? 'minus' : 'plus'

    return (
      <li key={id} className="list-container">
        <div className="container">
          <h1 className="list-heading">{questionText}</h1>
          <button
            type="button"
            className="plus-minus-btn"
            onClick={this.plusMinusClicked}
          >
            <img src={imgUrl} alt={altText} className="plus-minus-img" />
          </button>
        </div>
        {isButtonClicked && <hr className="hr" />}
        {isButtonClicked && <p className="description">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
