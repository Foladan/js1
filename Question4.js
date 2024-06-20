// QUESTION 4 -SOLUTION
function movieTicket(age){
    if (age <= 12){
      return "$5"
    }else if (age <=65) {
      return "$10"
    }else if (age >65) {
      return "$7"
    }
  }
  console.log(movieTicket(75))
  
  let age = [5, 10, 12, 16, 25, 35, 45, 55, 65, 75, 85, 95, 100]
