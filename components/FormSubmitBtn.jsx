const FormSubmitBtn = ({ text, isError }) => {
  return (
    <input
      type="submit"
      value={text}
      className={`${
        isError ? "bg-red-700" : "bg-slate-700"
      } w-full mt-3 p-3 text-white rounded-lg cursor-pointer font-bold`}
    />
  );
};

export default FormSubmitBtn;
