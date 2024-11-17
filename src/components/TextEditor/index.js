import {Component} from 'react'
import './index.css'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBoldButtonClicked: false,
    isItalicButtonClicked: false,
    isUnderlineButtonClicked: false,
  }

  onChangeTextInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  // mistake1 instead of isBoldButtonClicked i wrote isButtonClicked
  onClickBoldFontTypeBtn = () => {
    this.setState(prevState => ({
      isBoldButtonClicked: !prevState.isBoldButtonClicked,
    }))
  }

  onClickItalicFontTypeBtn = () => {
    this.setState(prevState => ({
      isItalicButtonClicked: !prevState.isItalicButtonClicked,
    }))
  }

  onClickUnderlineFontTypeBtn = () => {
    this.setState(prevState => ({
      isUnderlineButtonClicked: !prevState.isUnderlineButtonClicked,
    }))
  }

  render() {
    const {textInput} = this.state
    console.log(textInput)
    const {
      isBoldButtonClicked,
      isItalicButtonClicked,
      isUnderlineButtonClicked,
    } = this.state
    const boldFontBtnStatus = isBoldButtonClicked ? 'bold-active-btn' : ''
    const italicFontBtnStatus = isItalicButtonClicked ? 'italic-active-btn' : ''
    const underlineFontBtnStatus = isUnderlineButtonClicked
      ? 'underline-active-btn'
      : ''

    return (
      <div className="text-editor-container">
        <div className="text-editor-card">
          <div className="text-editor-img">
            <h1 className="heading1">Text Editor</h1>

            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="text-editor"
              alt="text editor"
            />
          </div>

          <div className="text-area">
            <ul className="buttons-container">
              <li>
                <button
                  onClick={this.onClickBoldFontTypeBtn}
                  className={`btn ${boldFontBtnStatus}`}
                  data-testid="bold"
                  type="button"
                >
                  B
                </button>
              </li>
              <li>
                <button
                  onClick={this.onClickItalicFontTypeBtn}
                  className={`btn  italic-icon ${italicFontBtnStatus}`}
                  data-testid="italic"
                  type="button"
                >
                  i
                </button>
              </li>
              <li>
                <button
                  onClick={this.onClickUnderlineFontTypeBtn}
                  className={`btn underline-icon ${underlineFontBtnStatus}`}
                  data-testid="underline"
                  type="button"
                >
                  U
                </button>
              </li>
            </ul>

            <textarea
              className={`text-area-input-field ${boldFontBtnStatus} ${italicFontBtnStatus} ${underlineFontBtnStatus}`}
              cols="60"
              rows="25"
              value={textInput}
              onChange={this.onChangeTextInput}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
