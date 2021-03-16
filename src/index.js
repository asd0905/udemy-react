import React from 'react'; // 컴포넌트의 기능 (모으고 합체하고)
import ReactDOM from 'react-dom'; // 모아온 컴포넌트를 dom에 랜더링할 때 필요, 그래서 랜더할때도 ReactDOM

// Create a new component. this component should produce
// some HTML
// HTML을 제공하는 컴포넌트를 생성한다
const App = () => {
    return <div>HI!</div>
}

// 생성한 HTML(컴포넌트가 return한)를 DOM에 넣어준다.
// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));