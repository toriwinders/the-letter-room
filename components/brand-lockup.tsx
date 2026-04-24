import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative ml-0 max-w-[56rem] pt-3 sm:pt-4 lg:pt-5">
      <div className="relative w-full max-w-[46rem] md:max-w-[50rem] lg:max-w-[54rem]">
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
