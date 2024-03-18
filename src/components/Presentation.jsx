const Presentation = (props) => {
  console.log(props);
  return (
    // Ici, la className du p return par Presentation dépend de la props color reçue par ce dernier
    <p className={props.color}>
      {/* Le contenu de la balise p dépend des props name et age reçues */}
      Bonjour, je m'appelle {props.name} et j'ai {props.age} ans
    </p>
  );
};

export default Presentation;
