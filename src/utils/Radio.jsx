const Radio = ({ name, id, value, label }) => {
  return (
    <div className="radio-input-container">
      <input type="radio" name={name} id={id} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
