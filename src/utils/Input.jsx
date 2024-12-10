const Input = ({
  type = "text",
  label,
  labelSign,
  id,
  name,
  reversed,
  hasError,
  ...props
}) => {
  if (reversed) {
    return (
      <div
        className={`inputs ${
          hasError && hasError.status ? "error-container" : ""
        }`}
      >
        <label htmlFor={id} className="input-label">
          {label}
        </label>
        <div className="input-container">
          <input type={type} id={id} name={name} pattern="\d*" {...props} />
          <label htmlFor={id}>{labelSign}</label>
        </div>
        {hasError && hasError.status && (
          <p className="error-text">This field is required</p>
        )}
      </div>
    );
  }

  return (
    <div className={hasError && hasError.status ? "error-container" : ""}>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className="input-container">
        <label htmlFor={id}>{labelSign}</label>
        <input type={type} id={id} name={name} pattern="\d*" {...props} />
      </div>
      {hasError && hasError.status && (
        <p className="error-text">This field is required</p>
      )}
    </div>
  );
};

export default Input;
