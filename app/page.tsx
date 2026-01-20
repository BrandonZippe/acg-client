import Image from "next/image";
import Form from "./form";
import Header from "./header";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <section className="my-5 md:my-16 max-w-5xl mx-auto p-5">
          <h1 className="text-center my-5 text-4xl uppercase">About Us</h1>
          <p className="text-xl">Audio Collective Group is a family of passionate brands united by one mission: to empower the people who make music. As the parent company to a diverse range of musical recording equipment brands - from high-end boutique to budget-friendly - we believe that every musician, producer, engineer, and sound designer deserves access to tools built with integrity and quality. Whether it's in a world-class studio, a home setup, or on stage, our brands are behind the gear that makes musical moments possible.</p>
        </section>
        <section>
          <h2 className="brand-band">Our Brands</h2>
        </section>
        <section>
          <div className="acgBackground">
            <div className="acgBackgroundInner">
              <a href="https://warmaudio.com" target="_blank" className="w-full md:w-1/4">
              <Image
                className="w-full"
                src="/WarmLogo.png"
                alt="Warm Audio"
                width={500}
                height={600}
                priority
              />
            </a>
          <a href="https://rocknrollercart.com/" target="_blank" className="w-full md:w-1/4">
            <Image
              className="w-full "
              src="/RNRLogo.png"
              alt="RockNRoller"
              width={500}
              height={600}
              priority
            />
          </a>
          <a href="https://www.gothamaudiousa.com/" target="_blank" className="w-full md:w-1/4">
            <Image
              className="w-full"
              src="/GothamLogo.png"
              alt="Gotham Audio"
              width={500}
              height={600}
              priority
            />
          </a>
          
          <a href="https://wavebone.com/" target="_blank" className="w-full md:w-1/4">
            <Image
              className="w-full"
              src="/WaveboneLogo.png"
              alt="Wavebone"
              width={500}
              height={600}
              priority
            />
          </a>
          <a href="https://www.tegeler.com/en-US/Home/Index" target="_blank" className="w-full md:w-1/4">
            <Image
              className="w-full"
              src="/TegelerLogo.png"
              alt="Tegeler"
              width={500}
              height={600}
              priority
            />
          </a>
          <a href="https://tokaiguitars.com/" target="_blank" className="w-full md:w-1/4">
            <Image
              className="w-full"
              src="/TokaiLogo.png"
              alt="Tokai Guitars"
              width={500}
              height={600}
              priority
            />
          </a>
          <a href="https://popaudio.co.uk/" target="_blank" className="w-full md:w-1/4">
            <Image
              className="w-full"
              src="/PopAudioLogo.png"
              alt="Pop Audio"
              width={500}
              height={600}
              priority
            />
          </a>
            </div>
          </div>
        </section>
        <section className="body-bg">
          <div className="md:py-16 max-w-5xl mx-auto p-5">
            <h1 className="text-center my-5 text-4xl uppercase">Our Mission</h1>
            <p className="text-xl">At Audio Collective Group, our mission is to strengthen the music industry by supporting and scaling the brands that fuel it. We provide a shared backbone of operational excellence so that each brand can focus on what matters most: designing exceptional products for musicians, producers, engineers, and creators at every level. When we lift up the brands behind the music, we lift up the music itself.</p>
          </div>
          <h1 className="text-center my-5 text-4xl uppercase">Contact Us</h1>
          <Form />
          <div className="md:py-16 max-w-5xl mx-auto p-5">
            <h1 id="PressReleases" className="text-center my-5 text-4xl uppercase">Press Releases</h1>
            <ul className="pr-links">
              <li>
                <div>January 21, 2026</div>
                <a href="/warm-audio-announces-retro-64-dynamic-live-microphone-for-vocals-and-instruments">
                  Warm Audio Announces the Retro 64 Dynamic Live Microphone for Vocals & Instruments
                </a>
              </li>
              <li>
                <div>January 20, 2026</div>
                <a href="/warm-audio-announces-the-fluff-drive-the-first-ever-signature-pedal-from-ryan-fluff-bruce-of-riffs-beards-and-gear">
                  Warm Audio Announces the Fluff Drive, The First-Ever Signature Pedal from Ryan “Fluff” Bruce of Riffs, Beards & Gear
                </a>
              </li>
              <li>
                <div>January 13, 2026</div>
                <a href="/audio-collective-group-launches-to-expand-sales-and-distribution-for-music-industry-brands">
                  Audio Collective Group Launches to Expand Sales & Distribution for Music Industry Brands
                </a>
              </li>
              <li>
                <div>October 8, 2025</div>
                <a href="/warm-audio-unleashes-dual-overdrive-powerhouses-throne-of-tone-and-tube-squealer">
                  Warm Audio Unleashes Dual Overdrive Powerhouses: Throne of Tone & Tube Squealer
                </a>
              </li>
              <li>
                <div>September 4, 2025</div>
                <a href="/warm-audio-expands-access-to-true-studio-sound-with-new-junior-and-junior-studio-essentials-series-of-microphones">
                  Warm Audio Expands Access to True Studio Sound with New “Junior” and “Junior Studio Essentials” Series of Microphones
                </a>
              </li>
              <li>
                <div>September 2, 2025</div>
                <a href="/swiss-based-gotham-audio-custom-cables-and-cable-stock-now-available-in-north-and-south-america-through-new-distribution">
                  Swiss-Based Gotham Audio Custom Cables & Cable Stock Now Available In North & South America Through New Distribution
                </a>
              </li>
              
              <li>
                <div>July 16, 2025</div>
                <a href="/the-number-1-utility-equipment-cart-just-got-better-rocknroller-unveils-next-generation-r9-and-r9xlhd-for-ultimate-gear-transport">
                The #1 Utility Equipment Cart Just Got Better: RockNRoller® Unveils Next-Generation R9 and R9XLHD for Ultimate Gear Transport
                </a>
              </li>
              <li>
                <div>January 16, 2025</div>
                <a href="/rocknroller-announces-the-compact-keystand-the-ultimate-travel-keyboard-stand">
                 RockNRoller® Announces the Compact Keystand – The Ultimate Travel Keyboard Stand
                </a>
              </li>
              <li>
                <div>March 18, 2024</div>
                <a href="/rocknroller-multi-cart-announces-worldwide-licensing-agreement-with-audio-collective-group">
                RockNRoller® Multi-Cart® Announces WorldWide Licensing Agreement with Audio Collective Group
                </a>
              </li>
            </ul>
          </div>
        </section>
       
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
