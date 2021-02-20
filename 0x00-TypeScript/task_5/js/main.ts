interface MajorCredits {
  credit: number;
  _majorBrand: 'major';
}

interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

const Accounting = { credits: 3 } as MajorCredits;
const Economic = { credits: 3 } as MajorCredits;
const Music = { credits: 1 } as MinorCredits; 
const Theater = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(Accounting, Economic));
console.log(sumMinorCredits(Music, Theater));
