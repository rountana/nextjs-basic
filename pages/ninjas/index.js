import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  //passes data as props to the component below
  return { props: { ninjas: data } };
};

//component waits for the async data to be fetched before it is rendered
const Ninjas = ({ ninjas }) => {
  console.log(ninjas);

  return (
    <div className="flex flex-col">
      <h1> All Ninjas </h1>
      {ninjas.map((ninja) => (
        <Link
          href={`/ninjas/${ninja.id}`}
          className=" m-2 border-blue-200 border-double border-2 bg-slate-100 hover:bg-blue-100"
          key={ninja.id}
        >
          {ninja.name}
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
