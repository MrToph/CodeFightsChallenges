function GenerateCode (label, year, model, number) {
  year = ('0' + year).substr(-2);
  model = String.fromCharCode(64 + model);
  number = ('00000000' + number).substr((label + year + model).length - 9);
  console.log(label, year, model, number);
  return label + year + model + number;
}
