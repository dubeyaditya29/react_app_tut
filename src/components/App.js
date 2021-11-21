import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contactList = [
    {
      id: "1",
      name: "Aditya",
      email: "dubeyaditya890@gmail.com",
    },
    {
      id: "2",
      name: "KUKU",
      email: "kuku@hotmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contact={contactList} />
    </div>
  );
}

export default App;
