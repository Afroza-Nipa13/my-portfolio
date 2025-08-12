<BlurText
  text={`Hi, I'm Afroza Akter`}
  delay={150} // how fast each part animates
  animateBy="words" // can be "letters" or "words"
  direction="top" // animation entry direction
  onAnimationComplete={() => console.log("Heading animation completed!")}
  className="text-5xl font-bold leading-none sm:text-6xl"
>
</BlurText>