const DynamicTitle = (props) => {
  // L'ensemble des props données au composant lors de son appel sont réunies dans un objet qui est donné en argument à la fonction

  return <h3 style={{ fontSize: "40px", color: "orange" }}>{props.text}</h3>;
};

export default DynamicTitle;
