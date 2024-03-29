import { useState } from "react";

const person = { name: "", email: "", tel: "" };

function App() {
  const [basicInfo, setBasicInfo] = useState(person);

  const handleChange = (e) => {
    console.log(basicInfo);
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="">
        <fieldset className="flex flex-col items-center gap-2">
          <legend className="m-2 text-lg font-bold">Basic information:</legend>
          <label htmlFor="name">
            Full name:
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Full Name"
              value={basicInfo.name}
              onChange={handleChange}
            />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="e-Mail"
            value={basicInfo.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            autoComplete="tel"
            placeholder="Telephone"
            value={basicInfo.tel}
            onChange={handleChange}
          />
          <button
            className="rounded-2xl bg-purple-500 px-4 py-1 ring-2 hover:ring-yellow-500 active:bg-yellow-500"
            type="submit"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default App;
