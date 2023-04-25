export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => ({
    params: { uid: ninja.id.toString() },
  }));

  return { paths: paths, fallback: false };
  //   return ({ paths: {} {} { params: {id: 1} } });
};

export const getStaticProps = async (context) => {
  const id = context.params.uid;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const userid = ({ ninjas }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-xl bg-slate-800 w-full text-center text-white ">
        User Details
      </h1>
      <p className="text-xl m-1 text-gray-500 text-center border-solid border-white border-x-2 ">
        {ninjas.name}
      </p>
      <p className="text-xl m-1 text-gray-500  w-full text-center border-solid border-white border-x-2">
        {ninjas.username}
      </p>
      <p className="text-xl m-1 text-gray-500 w-full text-center border-solid border-white border-x-2">
        {ninjas.email}
      </p>
    </div>
  );
};

export default userid;
