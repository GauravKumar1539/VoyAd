import SectionHeaders from './SectionHeaders';

export default function Contact() {
  return (
    <section className="text-center my-8">
        <SectionHeaders subHeader={"Don't Hesitate!"} mainHeader={'Contact Us Now'}/>
        <div className="mt-8">
          <a href="tel:+919350212730" className="text-4xl underline text-gray-500">+91-9350312730</a>
        </div>
      </section>
  )
}
