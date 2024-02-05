import SectionHeaders from "./SectionHeaders";

export default function About() {
  return (
    <>
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus suscipit rem delectus quibusdam labore reiciendis omnis quis libero minima, saepe distinctio provident. Quam deserunt nulla quas cupiditate inventore, at consequuntur cum. Dignissimos alias, porro excepturi maiores quia omnis sapiente cum neque fugit cumque officia minus assumenda dolores nobis quis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellendus suscipit rem delectus quibusdam labore reiciendis omnis quis libero minima, saepe distinctio provident. Quam deserunt nulla quas cupiditate inventore, at consequuntur cum. Dignissimos alias, porro excepturi maiores quia omnis sapiente cum neque fugit cumque officia minus assumenda dolores nobis quis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos optio odio culpa unde fugit velit aut veritatis harum fugiat?</p>
        </div>
      </section>
    </>
  );
}