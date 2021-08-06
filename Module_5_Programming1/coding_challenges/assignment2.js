const percentageGrade = parseInt(prompt("Whats your grade?"));

if (percentageGrade > 95) {
  letterGrade = "A+"
} else if (percentageGrade > 88 && percentageGrade <= 90) {
  letterGrade = "A"
} else if (percentageGrade > 84 && percentageGrade <= 88) {
  letterGrade = "B+"
} else if (percentageGrade > 76 && percentageGrade <= 84) {
  letterGrade = "C+"
} else if (percentageGrade > 70 && percentageGrade <= 76) {
  letterGrade = "C"
} else if (percentageGrade > 67 && percentageGrade <= 70) {
  letterGrade = "D+"
} else if (percentageGrade > 64 && percentageGrade <= 67) {
  letterGrade = "D"
} else if (percentageGrade <= 64) {
  letterGrade = "F"
}

alert("Your letter grade is " + letterGrade);
