import React, {Component} from 'react';
// const Component = React.Component; (Syntactic Sugar 문법적 설탕) 이를 줄인말
/*const SearchBar = () => { // 함수형 컴포넌트, 1함수 1컴포넌트
    return <input />; // JSX를 Javascript로 변환시킬 때 React모듈이 포함되어있어야 변환 시킴, 그래서 사용이 없어도 넣어줘야해
}*/

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}; // 함수형 컴포넌트는 state없다. class 컴포넌트만 가짐
    }

    render() {
        return <input onChange={event => console.log(event.target.value)}/>;
    }
}

export default SearchBar;