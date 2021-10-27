import './App.css';
import Card from "./Card";
import contacts from "./data";
function App() {
    function creadCard(contact){
        return(
            <Card
                key={contact.id}
                img={contact.img}
                name={contact.name}
                age={contact.Age}
                phone={contact.Phone}
            />
        )
    }
    return (
        <div className="App">
            {contacts.map(creadCard)}
        </div>
    );
}

export default App;