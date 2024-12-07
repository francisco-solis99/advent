type Shoe = {
  type: string
  size: number
}

type ShoePair = {
  I: number,
  R: number
}

function organizeShoes(shoes: Shoe[]): number[] {
  const shoesPairs: Record<string, ShoePair> = {}
  const boots: number[] = []
  for(const {type, size} of shoes) {
    if(!shoesPairs[size]) {
      shoesPairs[size] = {I: 0, R: 0}
    }
    shoesPairs[size][type] += 1;
    if(shoesPairs[size]['I'] > 0 && shoesPairs[size]['R'] > 0) {
      boots.push(size)
      shoesPairs[size]['R'] -= 1
      shoesPairs[size]['I'] -= 1
    }
  }
  return boots
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]
const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
organizeShoes(shoes) // [38, 42]
organizeShoes(shoes2) // [38, 38]

// Anotehr solution
// function organizeShoes(shoes) {
//   const result = [];
//   const organized = {};

//   shoes.forEach(({type, size}) => {
//     organized[size] ??= {R: 0, I: 0};
//     organized[size][type] = (organized[size][type] ?? 0) + 1;
//   });

//   for (const [size, {I, R}] of Object.entries(organized)) {
//     const numPairs = Math.min(R, I);
//     result.push(...Array(numPairs).fill(Number(size)));
//   }

//   return result;
// }