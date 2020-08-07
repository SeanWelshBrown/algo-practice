/* 
You are given a list of tasks, some of which depend on others. Write a function which takes a subset of those tasks and returns an ordered list of all the tasks to run.
*/

const tasks = [ 
  {
    taskName: "eat a sandwich",
    depends: [ "make a sandwich" ]
  },
  {
    taskName: "make a sandwich",
    depends: [ "buy groceries" ]
  }, 
  {
    taskName: "buy groceries",
    depends: [ "go to the store" ]
  }, 
  {
    taskName: "go to the store",
    depends: [ "get in the car" ]
  },
  {
    taskName: "get in the car",
    depends: []
  }
]


function determineOrder(tasks, chosenTasks) {
  const tasksList = [];

  // recursive function
  function checkTaskForDepends(taskObj, tasksListArr) {
    tasksList.unshift(taskObj.taskName);

    if (taskObj.depends.length === 0) {
      return;
    }

    let nextTaskObj = tasks.find(task => task.taskName === taskObj.depends[0]);
    return checkTaskForDepends(nextTaskObj, tasksList);
  }
  
  // running the recursive function for each task in the subset array
  for (let taskName of chosenTasks) {
    let foundTask = tasks.find(task => task.taskName === taskName)
    checkTaskForDepends(foundTask, tasksList);
  }

  // returning result
  return [...new Set(tasksList)]

}


// determineOrder(tasks, ["make a sandwich"])
// -> [ 'go to the store', 'buy groceries', 'make a sandwich' ]

determineOrder(tasks, ["buy groceries", "eat a sandwich"])
// -> [ 'go to the store', 'buy groceries', 'make a sandwich' ]