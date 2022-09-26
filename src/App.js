import "./App.css";
import Etablissement from "./components/Etablissement";
import Stagiaire from "./components/Stagiaire";

let data = [
  {
    id: 1,
    nom: "Bertie Yates",
    age:29,
    filiere: "TDI",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    nom: "Hester Hogan",
    age:30,
    filiere: "TDI",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    nom: "Larry Little",
    age:25,
    filiere: "TRI",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    nom: "Sean Walsh",
    age:19,
    filiere: "TDI",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    nom: "Lola Gardner",
    age:33,
    filiere: "TRI",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

function App() {
  return <div className="container">
    <Etablissement stagiaires={data} />
  </div>;
}

export default App;
