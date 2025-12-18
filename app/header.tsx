import Image from "next/image";

export default function Header() {
  return (
        <div>
          <a href="/">
            <Image
              className="w-full"
              src="/ACGHeader.png"
              alt="Audio Collective Group"
              width={1543}
              height={809}
              priority
            />
          </a>
        </div>

  );
}
