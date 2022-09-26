import './stagiaire.css'

function Stagiaire({nom,age, filiere, image}){
    return (
        <div className='stagiaire'>
            <img src={image} alt={nom}/>
            <div>
                <h1>{nom} - {filiere}</h1>
                <h3>Age : {age} ans</h3>
            </div>
        </div>
    );
}

export default Stagiaire