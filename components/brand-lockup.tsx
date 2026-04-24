import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative mx-auto w-full max-w-[96rem] pt-0 sm:pt-1 lg:pt-2">
      <div className="relative mx-auto w-full max-w-[96rem] overflow-hidden">
        <div className="relative h-[6.75rem] sm:h-[8.5rem] md:h-[10.5rem] lg:h-[13rem]">
          <Image
            src="/the-letter-room-logo.png"
            alt="The Letter Room. Something worth talking about."
            width={1992}
            height={2300}
            priority
            className="object-cover object-bottom"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 80rem"
          />
        </div>
      </div>
    </div>
  );
}
