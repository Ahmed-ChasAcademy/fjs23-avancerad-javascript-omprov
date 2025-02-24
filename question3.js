// 3 (4p) Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
// Använd fetch och async/await, samt felhantering medd try/catch.

// Din kod här
const todoListUL = document.getElementById("todo-list")
const todoItemEL = document.createElement("li")

const fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/"); // Invalid URL
      let data = await response.json();
      console.log(data)

      data.array.forEach(element => {
        todoItemEL.innerText = element
        todoListUL.append(todoItemEL)
      });
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };
  
  fetchData();


  
  