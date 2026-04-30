import Image from "next/image";
import Header from "../header";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <section className="pr-wrap">
          <h1 className="text-center my-5 text-4xl uppercase">Warm Audio Introduces the Reamper: A Creative Routing Hub for Amps, Pedals, Synth, and Studio Gear</h1>
          <p className="italic">Warm Audio unveils one of its first proprietary studio tools, bridging the gap between guitar rigs and professional recording environments, making it easy to re-amp dry tracks, run pedals across studio chains, and capture fully driven tube amp tone without disturbing the room.</p>
          <p><strong>AUSTIN, TX - April 30, 2026 -</strong> <a href="https://warmaudio.com">Warm Audio</a>, the leading manufacturer of faithful recreations of legendary recording gear and guitar pedals, today announces the release of the Reamper (WA-RA), a creative routing hub built to connect guitar rigs, studio processors, pedals, and DAW workflows in ways previously reserved for complex setups. Building on Warm Audio’s commitment to premium analog gear with one of its first proprietary studio designs, the Reamper allows engineers and players to re-amp dry tracks through real tube amps, capture a safety dry signal while recording for tweaking or layering in post, integrate guitar pedals into line-level studio chains or studio processing into guitar signals, and record cranked tube amps silently using a built-in power soak.</p>
          <p>The Reamper (MSRP $499 | 539 € incl. VAT | 469 £ incl. VAT) lets guitar amps, pedals, synths, and studio gear work together seamlessly while offering flexible signal control for modern recording environments.</p>
          <p>“Warm Audio has built its reputation on premium analog gear inspired by the most beloved studio classics, and the Reamper represents an exciting step forward as we apply that same design philosophy to original tools that solve real problems for today’s music makers,” said Bryce Young, Founder & President of Warm Audio. “With Reamper, you can track a performance through your favorite tube amp while simultaneously capturing a dry signal as a safety. You can send DAW tracks back through real amplifiers, run guitar pedals across vocal chains or drum busses, or drive a 50-watt tube amp into its sweet spot without making a sound. It’s a creative tool designed to easily route signals between instruments, gear, and the studio.”</p>
          <p>The Reamper is an all-analog studio re-amping device with independent instrument preamp and re-amp signal paths, allowing guitar signals, studio processors, and DAW tracks to move freely between recording environments. At its core, Reamper enables engineers to send dry recordings from a DAW back through real tube amplifiers and pedals, capturing authentic analog tone long after the original performance has been recorded. The flexible I/O also makes it easy to integrate keyboards and synths, while the variable impedance circuitry supports both passive and active instruments.</p>
          <p>Beyond traditional re-amping workflows, the Reamper serves as a flexible routing hub for modern studios. Guitar pedals can easily be inserted into balanced line-level signal chains, allowing engineers to run effects like fuzz, chorus, phasers, or ring modulators on vocals, synths, and drum busses. Conversely, studio rack processors such as compressors, EQs, and digital effects can be seamlessly integrated into guitar signal paths.</p>
          <p>For silent recording applications, the Reamper includes a built-in 50W / 8Ω power soak, allowing users to capture the sound of a fully driven tube amp, including the power section, without connecting a speaker cabinet. This makes it possible to record authentic cranked-amp tones quietly in home studios or professional recording environments.</p>
          <p>To preserve tone integrity across every signal path, the Reamper features USA-made CineMag transformers on both input and output stages, along with premium electronic components throughout the circuit design. The fully active circuitry offers ultra-low noise performance, while variable impedance control ensures optimal interaction with passive instruments, active pickups, pedals, and line-level sources.</p>
          
          <p>Like all Warm Audio gear, every Reamper unit is meticulously hand-tested and inspected by trained technicians in Austin, Texas, and includes Warm Audio’s 5-year warranty.</p>
          <p>The Reamper (MSRP $499 | 539 € incl. VAT | 469 £ incl. VAT) will be available at authorized retailers worldwide in April. For more information, visit <a href="www.warmaudio.com/reamper">Reamper</a>.</p>

          <h2 className="my-5 text-2xl uppercase">About Warm Audio:</h2>
          <p>Warm Audio began in 2011 in founder Bryce Young’s garage upon the simple principle of building high-end recording products that were sonically equal to renowned products of the past, but to also make them affordable. Warm Audio is now an Inc. 5000 company and industry-leading manufacturer of classic-inspired preamps, compressors, limiters, equalizers, microphones, guitar pedals, and more. Headquartered in Austin, TX, Warm Audio houses state-of-the-art recording facilities with two world-class recording studios where the team applies the “Warm Formula” of design to every product by ensuring that they deliver the very best in legendary sound at unprecedented value. For more information, visit <a href="www.warmaudio.com">Warm Audio</a>. </p>
        </section>
      </main>
    </div>
  );
}
