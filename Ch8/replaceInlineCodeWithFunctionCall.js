// ASIS
let appliesToMass = false;
for(const s of states) {
    if (s === "MA") appliesToMass = true;
}
// TOBE
appliesToMass = states.include("MA");

