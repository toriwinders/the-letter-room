import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative mx-auto w-full max-w-[56rem] pt-2 sm:pt-3 lg:pt-4">
      <div className="relative mx-auto w-full max-w-[48rem] overflow-hidden sm:max-w-[54rem] lg:max-w-[62rem]">
        <div className="relative h-[12.5rem] sm:h-[15rem] md:h-[18rem] lg:h-[21rem]">
        <Image
          src="/the-letter-room-logo.png"
          alt="The Letter Room. Something worth talking about."
          width={1992}
          height={2300}
          priority
          className="object-contain object-bottom"
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44rem, 50rem"
        />
        </div>
      </div>
    </div>
  );
}
