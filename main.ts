import inquirer from "inquirer";


const answer =await inquirer.prompt([

    {
        type:"number",
        name:"NumberOne",
        message:"Kindly Enter First number"
    },
    {
       type:"number",
       name:"NumberTwo",
       message:"Kindly Enter Second number"
    },
    
    {
      type:"lsit",
      name:"Operator",
      choices:["add","sub","mul","divide","reminder"],
      message:"Select Operator"

    },
    
]);

if (answer.Operator === "add") {
    console.log(answer.NumberOne+answer.NumberTwo);   
} else if (answer.Operator === "sub") {
    console.log(answer.NumberOne+answer.NumberTwo);
} else if (answer.Operator === "mul") {
    console.log(answer.NumberOne*answer.NumberTwo);
} else if (answer.Operator === "divide") {
    console.log(answer.NumberOne/answer.NumberTwo);
} else if (answer.Operator === "reminder") {
    console.log(answer.NumberOne%answer.NumberTwo);
} else {
    console.log("Invalid Input")
}
    
