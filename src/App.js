import React from 'react';

import AnimatedMessageWindow from './AnimatedMessageWindow-react/AnimatedMessageWindow';

import { CircleAnimationButtonPrimary, CircleAnimationButtonDark } from './CircleAnimationButton-react/CircleAnimationButtons';
import IconFA from './CircleAnimationButton-react/IconFA'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { faTimes, faMouse } from "@fortawesome/free-solid-svg-icons";

const app = {
    textAlign: 'center'
}

const appMainContainer = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto'
}

const textStyle = {
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}

const smallTextStyle = {
    fontSize: 'calc(10px + 1vmin)',
    color: 'white'
}

const code0 = "<AnimatedMessageWindow\n\tshow={ this.state.testShow ? true : false }\n\theadText={ \"Animated message window\" }\n>\n\t{ /* Code here */ }\n</AnimatedMessageWindow>";
const code1 = "<AnimatedMessageWindow\n\tshow={ true }                                                // undefined | [true/false] show/hide component\n\theadText={ \"Test\" }                                          // \"\" | Set header text\n\theadComponent={ <div style={{ margin: 'auto' }}>TEXT</div> } // undefined | Set component to header instead text\n\tcontainerHeight={ '40vh' }                                   // 100px | Content container height\n\theadHeight={ 60 }                                            // 60px | Header height\n\theadWidth={ 600 }                                            // 600px | Component width\n\tstyle={{ top: '10%' }}                                       // {} | Set style for container only (fast styling)\n\tfullStyle={{ style }}                                        // {} | Set full button styling (more info in Example (jsx styling))\n>\n</AnimatedMessageWindow>";
const code2 = "<AnimatedMessageWindow\n\tshow={ true }\n\theadText={ \"Animated message window\" }\n\tstyle={{ top: '30%' }}\n>\n\t{ /* Code here */ }\n</AnimatedMessageWindow>";
const code3 = "const styleTemplate = {\n\tmainContainerStyle: {},\n\theadStyleOff: {},\n\theadStyleOn: {},\n\tcontainerStyleOff: {},\n\tcontainerStyleOn: {},\n\tsubContainerStyle: {},\n\tsubHeadStyle: {}\n}";
const code4 = "let fullStyle = {\n\tmainContainerStyle: {\n\t\ttop: '30%'\n\t},\n\theadStyleOff: {\n\t\tbackgroundColor: \"#000000\"\n\t},\n\theadStyleOn: {\n\t\tbackgroundColor: \"#FFFFFF\"\n\t},\n\tsubHeadStyle: {\n\t\tfontSize: 25\n\t}\n}";
const code5 = "fullStyle={ fullStyle } //Default: {}";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testShow: false
        }
    }

    onChangeValue = (value, hexColor) => {
        this.setState({ colorId: value, hexColor: hexColor });
    }

    onTestShow = () => {
        this.setState({ testShow: !this.state.testShow });
    }

    render() {
        return (
            <div style={ app }>
                <div style={ appMainContainer }>
                    <p style={ textStyle }>
                        Example <code>AnimatedMessageWindow-react</code>
                    </p>

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <p style={ textStyle }>
                        Test
                    </p>

                    <CircleAnimationButtonPrimary
                        icon={ <IconFA icon={ faMouse }/> }
                        text={ "Click here" }
                        alwaysVisibleText={ true }
	                    autoWidth={ true }
                        onClick={ this.onTestShow }
                    />

                    <AnimatedMessageWindow
                        show={ this.state.testShow ? true : false }
                        headText={ "Animated message window" }
                    >
                        <div>
                            Some text with no sense.
                        </div>
                        <CircleAnimationButtonDark
                            icon={ <IconFA icon={ faTimes }/> }
                            text={ "Close" }
                            onClick={ this.onTestShow }
                            style={{ marginTop: 5, marginLeft: 'auto', marginRight: 'auto' }}
                        />
                    </AnimatedMessageWindow>

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code0 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        All options
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code1 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Fast styling
                    </p>

                    <p style={ smallTextStyle }>
                        Stylize like normal HTML element
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code2 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Full styling
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code3 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Example (jsx full styling):
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code4 }
                    </SyntaxHighlighter>

                    <p style={ textStyle }>
                        Put to component:
                    </p>

                    <SyntaxHighlighter language="jsx" style={ atomDark }>
                        { code5 }
                    </SyntaxHighlighter>

                    <div style={{ marginTop: 5, marginBottom: 5 }}></div>

                </div>
            </div>
        );
    }
}

export default App;
