import inquirer from "inquirer";

inquirer.prompt([
    {
        type: "input",
        name: "paragraph",
        message: "enter your paragraph",
    }
]).then(
    (v) => {
        let count = 0;
        v.paragraph.split(" ").forEach((v: any) => count ++);
        console.log(`There are ${count} words in your paragraph`);
    }
)