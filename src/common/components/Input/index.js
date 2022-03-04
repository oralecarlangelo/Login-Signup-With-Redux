import React from "react";

const Input = ({
  label = "",
  type = "",
  placeholder = "",
  name,
  onChange = (e) => {},
  value,
  errorMessage,
  isTouched,
}) => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <div className="w-full">
      <label className="ml-3 font-semibold">{label}</label>
      {type === "password" ? (
        <div className="input-container">
          <input
            className="bg-gray-100 input-password"
            type={isShowPassword ? "text" : type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
          />
          <button onClick={() => setIsShowPassword(!isShowPassword)}>
            {isShowPassword ? (
              <i className="fa-solid fa-eye w-9"></i>
            ) : (
              <i className="fa-solid fa-eye-slash w-9"></i>
            )}
          </button>
        </div>
      ) : (
        <input
          className="w-full input"
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      )}
      {errorMessage && isTouched && (
        <div className="text-red-500">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
