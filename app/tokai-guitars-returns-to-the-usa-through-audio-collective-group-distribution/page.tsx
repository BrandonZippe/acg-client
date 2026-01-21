import Image from "next/image";
import Header from "../header";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <section className="pr-wrap">
          <h1 className="text-center my-5 text-4xl uppercase">Tokai Guitars Returns to the USA Through Audio Collective Group Distribution</h1>
          <p className="text-xl text-center">Legendary Made-in-Japan Guitars & Bass Reintroduced in the US, with Expanded Retail Availability & Customer Support</p>
          <p><strong>AUSTIN, TX - January 22, 2026 -</strong> <a href="https://tokaiguitars.com">Tokai Guitars</a>, the respected Japanese guitar manufacturer known for meticulous craftsmanship, vintage-inspired design, and time-tested consistency, is officially returning to the United States. The brand’s U.S. relaunch is supported by <strong>Audio Collective Group (ACG)</strong>, whose focus is brand growth, improved availability, and a stronger connection between Tokai and American players.</p>
          <p>For decades, Tokai guitars have been prized by musicians who value boutique feel, consistency, and traditional hand-built quality. Built in Japan by skilled luthiers, Tokai instruments are respected for their balance, playability, and attention to detail, earning a loyal following worldwide among players who value classic designs executed with precision and reliability.</p>
          <p>“We’re genuinely excited to get Tokai Guitars back in the hands of U.S. players,” said Bryce Young, President of Warm Audio & Audio Collective Group. “These are beautifully built, made-in-Japan guitars with Golden-era construction, offering a high-quality alternative to more American guitar players. The big thing for us is making Tokai easy to find again through trusted retailers and backing that up with real U.S. customer support and service. Tokai has a long history, including fans & players like Kirk Hammett from Metallica, Robert Fripp from King Crimson, Tim Farriss from INXS, and Billy Gibbons from ZZ Top, and it’s awesome to help bring that legacy back into today’s guitar shops.”</p>
          <p>As part of this U.S. relaunch, Audio Collective Group is investing in infrastructure designed to better serve both players and retailers. This includes the active development of a dedicated U.S. / English-language Tokai website, along with initiatives aimed at strengthening visibility, product clarity, Texas-based service, and dealer support throughout the American market.</p>
          
          <h2 className="my-5 text-2xl uppercase">Key Product Lines Coming to the U.S.</h2>
          <p><strong>Electric Guitars</strong><br/>Tokai electric guitars are built in Japan using time-honored construction methods, featuring bolt-on necks, vintage-correct neck profiles, and Japanese-made Gotoh hardware and pickups.</p>
          <ul className="list-disc">
            <li><strong>Goldstar (S-Style)</strong> - Tokai’s flagship S-style electric, available in classic SSS or hot-rodded HSS configurations. Known for balance, clarity, and responsiveness, with alder or ash bodies and a wide range of vintage finishes.</li>
            <li><strong>Breezysound (T-Style)</strong> - A traditional T-style design featuring alder or ash bodies, vintage-voiced Gotoh single-coil pickups, and straightforward controls that deliver punch, articulation, and classic snap.</li>
          </ul>
          <p><strong>Bass Guitars</strong><br/>Tokai basses are built with the same attention to detail as their guitars, offering strong fundamentals, articulate low-end response, and dependable performance for both studio and stage.</p>
          <ul className="list-disc">
            <li><strong>Hard Puncher (PB-Style Bass)</strong> - A classic passive 4-string bass featuring a split-coil Gotoh pickup, 34" scale length, and traditional volume and tone controls. Designed for warmth, clarity, and mix-ready tone.</li>
          </ul>
          <h2 className="my-5 text-2xl uppercase">Availability</h2>
          <p>Tokai Guitars will be available in the United States through select authorized dealers supported by Audio Collective Group. Dealers interested in carrying Tokai can contact their ACG sales representative or email <a href="mailto:sales@audiocollectivegroup.com">sales@audiocollectivegroup.com</a>.</p>
          <p>Additional U.S. product information and resources will be available soon via Tokai’s forthcoming dedicated U.S. website: <a href="https://www.tokaiguitars.com">www.tokaiguitars.com</a> </p>
          <h2 className="my-5 text-2xl uppercase">About Tokai Guitars</h2>
          <p>Tokai Guitars is a Japanese guitar manufacturer known for producing high-quality electric guitars and basses built with traditional construction methods and meticulous attention to detail. Crafted in Japan by experienced luthiers, Tokai instruments are respected worldwide for their consistent build quality, comfortable feel, and reliable performance. With designs rooted in classic electric guitar history, Tokai has earned a long-standing reputation among players who value authentic tone, playability, and dependable craftsmanship.</p>
        </section>
      </main>
    </div>
  );
}
