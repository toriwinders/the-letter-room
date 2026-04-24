import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative ml-0 max-w-[84rem] pt-4 sm:pt-6 lg:pt-8">
      <div className="relative w-full max-w-[76rem]">
        <Image
          src="/the-letter-room-logo.png"
          alt="The Letter Room. Something worth talking about."
          width={1992}
          height={2300}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
