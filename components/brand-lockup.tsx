import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative mx-auto w-full max-w-[96rem] pt-2 sm:pt-3 lg:pt-4">
      <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[24rem] md:max-w-[30rem] lg:max-w-[38rem]">
        <div className="relative aspect-[7/3]">
          <Image
            src="/the-letter-room-lockup.png"
            alt="The Letter Room. Something worth talking about."
            width={3500}
            height={1500}
            priority
            className="object-contain"
            fill
            sizes="(max-width: 640px) 18rem, (max-width: 768px) 24rem, (max-width: 1024px) 30rem, 38rem"
          />
        </div>
      </div>
    </div>
  );
}
