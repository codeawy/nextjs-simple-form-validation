const FormInputErrorMsg = ({ errors, name }) => {
  return <span className="text-red-700 text-sm font-bold mb-2 block">{errors[name]}</span>;
};

export default FormInputErrorMsg;
