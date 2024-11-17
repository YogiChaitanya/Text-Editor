import {Component} from 'react'

import {ImBold} from 'react-icons/im'
import {FaItalic} from 'react-icons/fa'
import {MdFormatUnderlined} from 'react-icons/md'

import {
  TextEditorContainer,
  TextEditorCard,
  TextEditorImg,
  Heading1,
  TextEditor,
  TextArea,
  ButtonsContainer,
  ListItem,
  Btn,
  HrLine,
  TextAreaInputField,
} from './styledComponents'

class TextEditor2 extends Component {
  state = {
    isBoldButtonClicked: false,
    isItalicButtonClicked: false,
    isUnderlineButtonClicked: false,
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
    const {
      isBoldButtonClicked,
      isItalicButtonClicked,
      isUnderlineButtonClicked,
    } = this.state

    const boldFontBtnColor = isBoldButtonClicked ? '#faff00' : '#f1f5f9'
    const italicFontBtnColor = isItalicButtonClicked ? '#faff00' : '#f1f5f9'
    const underlineFontBtnColor = isUnderlineButtonClicked
      ? '#faff00'
      : '#f1f5f9'

    const fontWeight = isBoldButtonClicked ? 'bold' : 'normal'
    const fontStyle = isItalicButtonClicked ? 'italic' : 'normal'
    const textDecoration = isUnderlineButtonClicked ? 'underline' : 'normal'

    return (
      <TextEditorContainer>
        <TextEditorCard>
          <TextEditorImg>
            <Heading1>Text Editor</Heading1>

            <TextEditor
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="text-editor"
              alt="text editor"
            />
          </TextEditorImg>

          <TextArea>
            <ButtonsContainer>
              <ListItem>
                <Btn
                  onClick={this.onClickBoldFontTypeBtn}
                  color={boldFontBtnColor}
                  data-testid="bold"
                  type="button"
                >
                  <ImBold size={25} />
                </Btn>
              </ListItem>
              <ListItem>
                <Btn
                  onClick={this.onClickItalicFontTypeBtn}
                  color={italicFontBtnColor}
                  data-testid="italic"
                  type="button"
                >
                  <FaItalic size={25} />
                </Btn>
              </ListItem>
              <ListItem>
                <Btn
                  onClick={this.onClickUnderlineFontTypeBtn}
                  color={underlineFontBtnColor}
                  data-testid="underline"
                  type="button"
                >
                  <MdFormatUnderlined size={25} />
                </Btn>
              </ListItem>
            </ButtonsContainer>
            <HrLine />

            <TextAreaInputField
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </TextArea>
        </TextEditorCard>
      </TextEditorContainer>
    )
  }
}

export default TextEditor2
