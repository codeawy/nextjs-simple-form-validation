const FormInput = ({ id, label, type, name, value, onChange, errors }) => {
  return (
    <div className="mb-3 flex flex-col">
      <label htmlFor={id} className="mb-1 font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={`border-2 ${
          !errors[name] ? "border-slate-700" : "border-red-700"
        } py-2 rounded-lg px-3 text-sm`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
