const testimonials = [
  {
    quote:
      "I really love it! It feels super special and I really do like the physical component of it! I intentionally opened it while at a coffee shop and it felt really nice to read something like this and not be staring at a screen. I feel like I was able to be more reflective and not get distracted.",
    name: "Emily",
    location: "Denver, CO",
  },
  {
    quote: "Had it with my morning coffee and it really spoke to me.",
    name: "Alex",
    location: "Austin, TX",
  },
  {
    quote:
      "I love the conversation prompts. Use them in a group or one-on-one. Either way, you get a better conversation. Adult friendships are easy to coast through with social media, mom life, or work. These questions get you off your phone and into the moment, so you can actually connect. And the cards come in the mail, which makes it feel like you're part of a group.",
    name: "Angie",
    location: "Chicago, IL",
  },
  {
    quote:
      "I loved getting the letter in the mail!! I had really been looking forward to it.",
    name: "Banan",
    location: "Denver, CO",
  },
  {
    quote:
      "Conversation Club opens up so much vulnerability in people which then allows friendships to take that next level. It's a gentle nudge to go so much deeper into topics we're all thinking about in our own personal little worlds but never consider expanding on with those who we talk to almost every day. It's a way to reconnect with people from a place that feels real again.",
    name: "Susy",
    location: "London, UK",
  },
] as const;

const cardStyles = [
  { background: "var(--color-ivory)", color: "var(--color-espresso)" },
  { background: "var(--color-gold)", color: "var(--color-plum)" },
  { background: "var(--color-stone)", color: "var(--color-espresso)" },
] as const;

function TestimonialCard({
  quote,
  name,
  location,
  index,
}: {
  quote: string;
  name: string;
  location: string;
  index: number;
}) {
  const style = cardStyles[index % cardStyles.length];

  return (
    <figure className="testimonial-card" style={style}>
      <blockquote className="testimonial-quote">{`"${quote}"`}</blockquote>
      <figcaption className="testimonial-attr">
        {name}, {location}
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-band section-band-testimonials section-gap text-center"
    >
      <div className="section-inner">
        <p className="eyebrow">Word of mouth</p>
        <h2
          id="testimonials-heading"
          className="section-title mx-auto mt-4 max-w-[40rem]"
        >
          What members are saying.
        </h2>
      </div>

      <div className="marquee mt-12 sm:mt-16">
        <div className="marquee-track">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`a-${i}`} index={i} {...t} />
          ))}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`b-${i}`} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
