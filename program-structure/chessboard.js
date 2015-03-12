//Deliberately choose not to use functions here to feel the pain of duplication
//lets see how easy it is to read in the future
for(var i=0; i < 8; i++) {
  if(i % 2 === 0) {
    process.stdout.write(" ");
    for(var j=0; j < 7; j++) {
      if(j % 2 === 0) {
        process.stdout.write("#");
      } else {
        process.stdout.write(" ");
      }
    }
  } else {
    process.stdout.write("#");
    for(var j=0; j < 7; j++) {
      if(j % 2 === 0) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("#");
      }
    }
  }

  console.log();
}
