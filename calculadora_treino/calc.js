

switch (calc) {
  case calc < 18.5:
    console.log(`Sua classificação é Magreza e o Grau de obesidade é 0`);
  case calc>=18.5 && calc<=24.9:
    console.log(`Sua classificação é Normal e o Grau de obesudade é 0`);
    case calc >= 25 && calc <=29.9:
    console.log(`Sua classificação é Sobrepeso e o Grau de obesidade é I`);
    case calc >= 30 && calc <=39.9:
    console.log(`Sua classificação é Obesidade e o Grau de obesidade é II`);
    default:
    console.log(`Sua classificação é Obesidade Grave e o Grau de obesidade é III`);
  }