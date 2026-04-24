import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative mx-auto w-full max-w-[56rem] pt-2 sm:pt-3 lg:pt-4">
      <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden sm:max-w-[44rem] lg:max-w-[50rem]">
        <div className="relative h-[10.5rem] sm:h-[13rem] md:h-[15rem] lg:h-[17rem]">
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
