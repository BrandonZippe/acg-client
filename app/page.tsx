import Image from "next/image";
import Form from "./form";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div>
          <Image
            className="w-full"
            src="/ACGHeader.png"
            alt="Audio Collective Group"
            width={1543}
            height={809}
            priority
          />
        </div>
        <section className="my-5 md:my-16 max-w-5xl mx-auto p-5">
          <h1 className="text-center my-5 text-4xl uppercase">About Us</h1>
          <p className="text-xl">Audio Collective Group is a family of passionate brands united by one mission: to empower the people who make music. As the parent company to a diverse range of musical recording equipment brands - from high-end boutique to budget-friendly - we believe that every musician, producer, engineer, and sound designer deserves access to tools built with integrity and quality. Whether it's in a world-class studio, a home setup, or on stage, our brands are behind the gear that makes musical moments possible.</p>
        </section>
        <section>
          <h2 className="brand-band">Our Brands</h2>
        </section>
        <section>
          <div className="flex flex-col md:flex-row">
            <a href="https://warmaudio.com" target="_blank" className="w-full md:w-1/3">
              <Image
                className="w-full"
                src="/ACG_Logo-Warm.jpg"
                alt="Warm Audio"
                width={500}
                height={600}
                priority
              />
            </a>
          <a href="https://rocknrollercart.com/" target="_blank" className="w-full md:w-1/3">
            <Image
              className="w-full "
              src="/ACG_Logo-RR.jpg"
              alt="Warm Audio"
              width={500}
              height={600}
              priority
            />
          </a>
          <a href="https://www.gothamaudio.us/" target="_blank" className="w-full md:w-1/3">
            <Image
              className="w-full"
              src="/ACG_Logo-Gotham.jpg"
              alt="Warm Audio"
              width={500}
              height={600}
              priority
            />
          </a>
          </div>
        </section>
        <section className="body-bg">
          <div className="md:py-16 max-w-5xl mx-auto p-5">
            <h1 className="text-center my-5 text-4xl uppercase">Our Mission</h1>
            <p className="text-xl">At Audio Collective Group, our mission is to strengthen the music industry by supporting and scaling the brands that fuel it. We provide a shared backbone of operational excellence so that each brand can focus on what matters most: designing exceptional products for musicians, producers, engineers, and creators at every level. When we lift up the brands behind the music, we lift up the music itself.</p>
          </div>
          <h1 className="text-center my-5 text-4xl uppercase">Contact Us</h1>
          <Form />
        </section>
       
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
