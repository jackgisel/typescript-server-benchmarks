import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ownerNames = [
  "Jack",
  "Joe",
  "Jake",
  "Jill",
  "Jason",
  "Jaquline",
  "Jared",
  "Jim",
  "Jessica",
];
const taskNames = [
  "Buy unicorn food at the magical market.",
  "Practice flying on a broomstick for at least 30 minutes.",
  "Invent a new flavor of ice cream.",
  "Conquer the world, one cupcake at a time.",
  "Train a pet dragon to do tricks.",
  "Unravel the mysteries of the Bermuda Triangle.",
  "Create a secret language and teach it to a friend.",
  "Build a treehouse with a built-in waterslide.",
  "Organize a spontaneous dance party in the park.",
  "Write a love letter to the moon.",
  "Start a collection of invisible objects.",
  "Bake a cake that tastes like happiness.",
  "Learn to juggle flaming torches (safely).",
  "Find a hidden treasure buried in the backyard.",
  "Create a time machine and visit the dinosaurs.",
  "Paint a mural on the side of a skyscraper.",
  "Learn to speak whale.",
  "Design a floating city made of marshmallows.",
  "Solve a Rubik's Cube blindfolded.",
  "Plant a garden of chocolate chip cookies.",
  "Take a class in underwater basket weaving.",
  "Invent a robot that can do all household chores.",
  "Build a castle out of recycled materials.",
  "Write a novel about a talking pencil.",
  "Learn to play the ukulele with your toes.",
  "Host a tea party for woodland creatures.",
  "Start a band with your imaginary friends.",
  "Master the art of levitation.",
  "Create a personalized constellation in the night sky.",
  "Discover a new species of mythical creature.",
  "Organize a superhero-themed costume parade.",
  "Become a professional bubble blower.",
  "Design your own line of fashion-forward hats.",
  "Learn to bake the perfect rainbow-colored macarons.",
  "Build a spaceship and travel to the outer reaches of the galaxy.",
  "Invent a potion that grants temporary superpowers.",
  "Train a squirrel to be your acrobatic sidekick.",
  "Write and perform a one-person play about potato history.",
  "Host a movie marathon featuring all your favorite childhood films.",
  "Create an intricate maze made entirely of candy.",
  "Learn to breakdance like a pro.",
  "Start a pillow fight flash mob.",
  "Design and construct a miniature amusement park.",
  "Write a song and perform it on a street corner.",
  "Learn to hula hoop with fire.",
  "Organize a synchronized swimming performance with rubber ducks.",
  "Write a letter to your future self and open it in 10 years.",
  "Build a sandcastle taller than you.",
  "Choreograph a dance routine for a group of penguins.",
  "Create a time capsule and bury it in the backyard.",
];

async function main() {
  await Promise.all(
    ownerNames.map(async (ownerName) => {
      return await prisma.owner.create({
        data: {
          name: ownerName,
          tasks: {
            createMany: {
              data: taskNames.map((taskName) => ({
                description: taskName,
                status: false,
              })),
            },
          },
        },
      });
    })
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
