import Image from "next/image";

export function BrandLockup() {
  return (
    <div className="relative mx-auto w-full max-w-[96rem] pt-2 sm:pt-3 lg:pt-4">
      <div className="relative mx-auto w-full max-w-[21.5rem] sm:max-w-[28rem] md:max-w-[36rem] lg:max-w-[42rem]">
        <div className="relative aspect-[7/3]">
          <Image
            src="/conversation-club-lockup.png"
            alt="Conversation Club. Something worth talking about."
            priority
            className="object-contain"
            fill
            sizes="(max-width: 640px) 24rem, (max-width: 768px) 34rem, (max-width: 1024px) 46rem, 60rem"
          />
        </div>
      </div>
    </div>
  );
}
