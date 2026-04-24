import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative mx-auto w-full max-w-[96rem] pt-2 sm:pt-3 lg:pt-4">
      <div className="relative mx-auto w-full max-w-[92rem] overflow-hidden sm:max-w-[104rem] lg:max-w-[116rem]">
        <div className="relative h-[22rem] sm:h-[27rem] md:h-[31rem] lg:h-[36rem]">
          <Image
            src="/the-letter-room-logo.png"
            alt="The Letter Room. Something worth talking about."
            width={1992}
            height={2300}
            priority
            className="object-contain object-bottom"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 78vw, 72rem"
          />
        </div>
      </div>
    </div>
  );
}
