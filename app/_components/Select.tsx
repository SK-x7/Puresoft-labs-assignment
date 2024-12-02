
// Let's imagine your colleague already built this component 😃

function Select() {
const options=["Month","Year","Weak",]
  return (
    <select
      name={"graphOption"}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`Lifetime`}
      className=""
    >
      {options.map((c) => (
        <option className="" key={c} value={`${c}`}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default Select;
