import React from 'react';

import './transitionStyle.css';

const styleTemplate = {
    mainContainerStyle: {},
    headStyleOff: {},
    headStyleOn: {},
    containerStyleOff: {},
    containerStyleOn: {},
    subContainerStyle: {},
    subHeadStyle: {}
}

class AnimatedMessageWindow extends React.Component {
    constructor(props) {
        super(props);

        this.fullStyle = this.assignStyle(this.props.fullStyle);

        this.animationTimeout = null;

        this.headHeightStyle = this.props.headHeight ? this.props.headHeight : 60;
        this.widthStyle = this.props.width ? this.props.width : 600;
        this.containerHeightStyle = this.props.containerHeight ? this.props.containerHeight : 100;

        this.state = {
            animationStart: false,
            animationEnd: false
        };
    }

    assignStyle = (newStyle) => {
        let style = Object.assign({}, styleTemplate);
        Object.assign(style, newStyle);

        return style;
    }

    getMainContainerStyle = () => {
        let style =  {
            position: 'absolute',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%'
        }

        style = { ...style, ...this.fullStyle['mainContainerStyle'] }

        if (this.props.style) {
            style = { ...style, ...this.props.style }
        }

        return style;
    }

    getHeadStyleOff = () => {
        let style = {
            width: this.widthStyle,
            height: this.headHeightStyle,
            margin: 'auto',
            borderRadius: '2em',
            boxShadow: '0px 0px 4px #424241',
            backgroundColor: '#000',
            color: '#fff',
        
            opacity: 0,
            transform: 'rotateY(-90deg)',
        
            display: 'flex',
        
            transitionDelay: '0.5s'
        }

        style = { ...style, ...this.fullStyle['headStyleOff'] }

        return style;
    }

    getHeadStyleOn = () => {
        let style = {
            width: this.widthStyle,
            height: this.headHeightStyle,
            margin: 'auto',
            borderRadius: '2em',
            boxShadow: '0px 0px 4px #424241',
            backgroundColor: '#000',
            color: '#fff',
        
            opacity: 1,
            transform: 'none',
        
            display: 'flex'
        }

        style = { ...style, ...this.fullStyle['headStyleOn'] }

        return style;
    }

    getContainerStyleOff = () => {
        let style = {
            width: this.widthStyle,
            height: 0,
            opacity: 0,
            borderBottomLeftRadius: '2em',
            borderBottomRightRadius: '2em',
            borderStyle: 'solid',
            borderColor: '#333332',
            borderwidth: 1,
            backgroundColor: '#FFF',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',

            marginTop: 'calc(' + (Number.isInteger(this.headHeightStyle) ? this.headHeightStyle + 'px' : this.headHeightStyle) + ' / -2)',
            zIndex: -1
        }

        style = { ...style, ...this.fullStyle['containerStyleOff'] }

        return style;
    }

    getContainerStyleOn = () => {
        let style = {
            width: this.widthStyle,
            height: this.containerHeightStyle,
            opacity: 1,
            borderBottomLeftRadius: '2em',
            borderBottomRightRadius: '2em',
            borderStyle: 'solid',
            borderColor: '#333332',
            borderwidth: 1,
            backgroundColor: '#FFF',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
            transitionDelay: '0.5s',

            marginTop: 'calc(' + (Number.isInteger(this.headHeightStyle) ? this.headHeightStyle + 'px' : this.headHeightStyle) + ' / -2)',
            zIndex: -1
        }

        style = { ...style, ...this.fullStyle['containerStyleOn'] }

        return style;
    }

    getSubContainerStyle = () => {
        let style = {
            marginTop: 'calc(' + (Number.isInteger(this.headHeightStyle) ? this.headHeightStyle + 'px' : this.headHeightStyle) + ' / 2)',
            marginBottom: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        style = { ...style, ...this.fullStyle['subContainerStyle'] }

        return style;
    }

    getSubHeadStyle = () => {
        let style = {
            margin: 'auto'
        }

        style = { ...style, ...this.fullStyle['subHeadStyle'] }

        return style;
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.animationEnd) {
            if (prevState.animationStart === false) {
                clearTimeout(this.animationTimeout);
                this.animationTimeout = setTimeout(() => {
                    this.setState({ animationStart: true, animationEnd: true });
                }, 50 );
            } else {
                this.state.animationStart = false;
            }
        } else if (prevProps.show === true && this.props.show === false) {
            clearTimeout(this.animationTimeout);
            this.animationTimeout = setTimeout(() => {
                this.setState({ animationStart: false, animationEnd: false });
            }, 1000 );
        }
    }

    render() {
        return (
            this.props.show ?
                <div style={ this.getMainContainerStyle() }>
                    <div className='transition_all_AnimatedMessageWindow' style={ this.state.animationStart ? this.getHeadStyleOn() : this.getHeadStyleOff() }>
                        { !this.props.headComponent ?
                            <div style={ this.getSubHeadStyle() }>{ this.props.headText }</div>
                        :
                            this.props.headComponent
                        }
                    </div>

                    <div className='transition_all_AnimatedMessageWindow' style={ this.state.animationStart ? this.getContainerStyleOn() : this.getContainerStyleOff() }>
                        <div style={ this.getSubContainerStyle() }>
                            { this.props.children }
                        </div>
                    </div>
                </div>
            : this.state.animationEnd ?
                <div style={ this.getMainContainerStyle() }>
                    <div className='transition_all_AnimatedMessageWindow' style={ this.state.animationStart ? this.getHeadStyleOff() : this.getHeadStyleOn() }>
                        { !this.props.headComponent ?
                            <div style={ this.getSubHeadStyle() }>{ this.props.headText }</div>
                        :
                            this.props.headComponent
                        }
                    </div>

                    <div className='transition_all_AnimatedMessageWindow' style={ this.state.animationStart ? this.getContainerStyleOff() : this.getContainerStyleOn() }>
                        <div style={ this.getSubContainerStyle() }>
                            { this.props.children }
                        </div>
                    </div>
                </div>
            : null
        );
    }
}

export default AnimatedMessageWindow;
