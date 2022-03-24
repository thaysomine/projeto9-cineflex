import ReactDOM from 'react-dom';
import Header from './Header';
import Movies from './Movies';

function App() {
    return (
        <>
        <Header />
        <Movies />
        </>
    );
}

const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);