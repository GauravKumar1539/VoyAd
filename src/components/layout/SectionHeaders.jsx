export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="text-gray-500 text-xl font-semibold uppercase leading-4">
        {subHeader}
      </h3>
      <h2 className="text-4xl text-primary font-bold italic">{mainHeader}</h2>
    </>
  );
}
