import Image from "next/image";
import Header from "../header";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <section className="pr-wrap">
          <h1 className="text-center my-5 text-4xl uppercase">Audio Collective Group Launches to Expand Sales & Distribution for Music Industry Brands</h1>
          <p className="text-xl text-center">ACG was formed by the team behind Warm Audio to help music brands expand through acquisition, licensing, or distribution; partnering with RockNRoller® Multi-Carts®, Tegeler Audio, Tokai Guitars, Gotham Audio, Pop Audio, and more.</p>
          <p><strong>AUSTIN, TX - December 18, 2025 -</strong> Today marks the public announcement of <strong>Audio Collective Group (ACG)</strong>, a parent company that has been operating for over a year to support and scale a growing collective of music industry brands. Created by the team behind Warm Audio’s success, ACG provides expanded channel reach, operational strength, marketing expertise, and logistics resources to help brands grow while preserving the quality, identity, and innovation that make them unique. Current brands supported by ACG include <strong>Warm Audio, RockNRoller® Multi-Carts®, Tegeler Audio, Tokai Guitars, Wavebone, Gotham Audio Cable, and Pop Audio</strong>, with additional partnerships on the horizon.</p>
          <p>Warm Audio will continue operating as an independent brand, but the same team that built Warm is now operating as Audio Collective Group—expanding their reach and extending their capabilities to support more music brands.</p>
          <p>“Warm Audio was founded on a simple mission: to give more musicians and creators access to truly great sound. That same commitment now fuels our ability to support other outstanding brands,” said <strong>Bryce Young, President of Warm Audio & Audio Collective Group</strong>. “As this vision expanded, it became clear we needed a broader platform to serve the industry, which led to the formation of Audio Collective Group. Through ACG, we’re able to share our strengths in worldwide sales & channel reach, operations, marketing, fulfillment, customer support, and global logistics—helping more brands thrive while staying true to the craftsmanship and character that earned their place in the music world.”</p>
          <p>Young continued, “We’ve already seen strong success with brands like RockNRoller® Multi-Carts®, where we’ve expanded distribution, stabilized pricing, refreshed branding, and grown the retail footprint. The response from the channel has been overwhelmingly positive regarding our expansion and support of other ACG brands.”</p>
          <p>Through ACG, partner brands gain access to sales, manufacturing, logistics, distribution, and marketing support—allowing them to focus on product excellence while ACG handles the infrastructure needed to scale.</p>
          <h2 className="my-5 text-2xl uppercase">ACG Brands</h2>
          <ul className="list-disc">
            <li><strong><a href="http://www.warmaudio.com">Warm Audio</a></strong> An industry leader in classic-inspired recording products, Warm Audio uses premium components to deliver the tone and performance of elite studio gear at accessible prices.</li>
            <li><strong><a href="https://rocknrollercart.com/">RockNRoller® Multi-Carts®</a></strong> The #1 industry-standard convertible equipment cart used by musicians, studios, live crews, and production teams worldwide. Its 8-in-1 design makes moving gear easier, faster, and more efficient. Licensed & distributed worldwide by ACG.</li>
            <li><strong><a href="https://www.tegeler.com/en-US">Tegeler Audio</a></strong> A German boutique manufacturer specializing in analog processing hardware known for musicality, craftsmanship, and sonic character. Distributed in the U.S. by ACG.</li>
            <li><strong><a href="https://www.tokaiguitars.com/">Tokai Guitars</a></strong> A legendary Japanese guitar maker producing handcrafted electric and acoustic instruments with meticulous build quality and vintage-inspired designs. Distributed in the U.S. by ACG.</li>
            <li><strong><a href="https://wavebone.com/?srsltid=AfmBOophI3w0dFfvwgAc9PtQ_8uZz0hRmoQ4JbdRXTBUYu_KwoAXY3gK">Wavebone Studio Furniture</a></strong> A designer of ergonomic, studio-focused furniture engineered for comfort, workflow, and acoustic awareness. Their desks and accessories help creators build inspiring, functional studio environments. Distributed in the U.S. by ACG.</li>
            <li><strong><a href="https://www.gothamaudiousa.com/">Gotham Audio</a></strong> A world-renowned Swiss cable manufacturer supplying high-end cables trusted across broadcast, studio, Hi-Fi, and live environments for engineering quality and durability. Distributed & sold in the U.S. by ACG.</li>
            <li><strong><a href="https://popaudio.co.uk/">Pop Audio</a></strong> Creator of innovative microphone accessories—most notably adjustable pop filters—designed for clarity, durability, and precise vocal control. Distributed in the U.S. by ACG.</li>
          </ul>
          <p className="">To learn more or explore collaboration opportunities, visit <a href="https://www.audiocollectivegroup.com">www.audiocollectivegroup.com</a></p>
          <h2 className="my-5 text-2xl uppercase">About Audio Collective Group</h2>
          <p><strong>Audio Collective Group (ACG)</strong> is a parent company supporting a curated family of music industry brands. Founded by the team behind Warm Audio, ACG provides expanded channel reach, operational strength, marketing expertise, customer support, and global logistics to help brands grow while preserving their identity and technical innovation. Headquartered in Austin, Texas, ACG currently supports <strong>Warm Audio, RockNRoller® Multi-Carts®, Tegeler, Tokai Guitars, Wavebone, Gotham Audio Cable, and Pop Audio</strong>, with more to come.</p>
        </section>
      </main>
    </div>
  );
}
