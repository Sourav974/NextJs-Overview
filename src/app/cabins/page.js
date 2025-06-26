import Counter from "../compoents/Counter";
import Navigation from "../compoents/Navigation";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("data", data);

  return (
    <div>
      <h1>Cabins Page</h1>

      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>

      <Counter users={data}/>
    </div>
  );
};

export default page;
