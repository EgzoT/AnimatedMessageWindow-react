# Animated Message Window

# Demo

https://egzot.github.io/AnimatedMessageWindow-react/

# Example usage

https://github.com/EgzoT/AnimatedMessageWindow-react/tree/example

# Usage

Paste component folder to project and add:

```jsx
import AnimatedMessageWindow from './AnimatedMessageWindow/AnimatedMessageWindow';
```

# JSX Component:

```jsx
<AnimatedMessageWindow
    show={ true }
    containerHeight={ '40vh' }
    headHeight={ 60 }
>
</AnimatedMessageWindow>
```

# Options

```jsx
<AnimatedMessageWindow
    show={ true }                                                // undefined | [true/false] show/hide component
    headText={ "Test" }                                          // "" | Set header text
    headComponent={ <div style={{ margin: 'auto' }}>TEXT</div> } // undefined | Set component to header instead text
    containerHeight={ '40vh' }                                   // 100px | Content container height
    headHeight={ 60 }                                            // 60px | Header height
    headWidth={ 600 }                                            // 600px | Component width
    style={{ top: '10%' }}                                       // {} | Set style for container only (fast styling)
    fullStyle={{ style }}                                        // {} | Set full button styling (more info in Example (jsx styling))
>
</AnimatedMessageWindow>
```

# Styling

```jsx
const styleTemplate = {
    mainContainerStyle: {},
    headStyleOff: {},
    headStyleOn: {},
    containerStyleOff: {},
    containerStyleOn: {},
    subContainerStyle: {},
    subHeadStyle: {}
}
```

Example (jsx styling):

```jsx
let fullStyle = {
    mainContainerStyle: {
        top: '30%'
    },
    headStyleOff: {
        backgroundColor: "#000000"
    },
    headStyleOn: {
        backgroundColor: "#FFFFFF"
    },
    subHeadStyle: {
        fontSize: 25
    }
}
```

Put to component:

```jsx
fullStyle={ fullStyle } //Default: {}
```
