console.log('Js Ready');

$(document).ready(onReady);
console.log('Jquery Ready');

//Created function to handle on ready items.
//created click listeners for task status and delete tasks.
function onReady() {
    console.log('onReady Function initiated');
    $('#viewTasksId').on('click', '.taskCompleteBtnCls', handleTaskStatus);
    $('#viewTasksId').on('click', '.deleteBtnCls', handleDeleteTask);
    enterTask();
    getTasks();
}

//Created function to add tasks to database.
function enterTask() {
    $('#addTaskBtnId').on('click', function () {
        console.log('addTask button clicked');

        // get user input and put in an object
        let newTask = {
            task_to_do: $('#taskToDoId').val(),
            task_complete: $('#taskStatusCls').val(),
        };
        // call addTask with newTask object
        addTask(newTask);
    });
}

//GET ROUTE created in tasks.Router.js.
//Created blah function to get 'tasks' data from the database.
//Gets tasks data from database. 
function getTasks() {
    console.log('getTasks Function: GET task data from database');
    // ajax call to server to get tasks.
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        render(response);
    }).catch(function (err) {
        console.log('error in GET', err);
    });

} // end getTasks function.
//Call to initiate in onReady function.

//Add new task! 
function addTask(newTask) {
    console.log('in addTasks', newTask);
    // ajax call to server to get tasks
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: newTask,
    }).then(function (response) {
        console.log('Response from sever', response);
        getTasks();
        $('input').val('');
    }).catch(function (err) {
        console.log('Error in POST', err);
    })
}//End addTask function.
//Call to initiate addTask function.


//Created function to render to the DOM.
//Used for of loop to loop through tasks and used a conditional to evaluate if a tasks status is complete or not.
//If a task is complete, it will display to the DOM in red, if it is not complete, it will display in green.
function render(tasks) {
    $('#viewTasksId').empty();
    let row;
    for (let task of tasks) {
        if (task.task_complete === false) {
            row = $(`
            <tr>
              <td>${task.id}</td>
              <td class="taskStatusCls">${task.task_to_do}</td>
              <td class="taskUpdateCls"><button class="taskCompleteBtnCls">Change Task Status</button></td>
              <td><button class="deleteBtnCls">Delete</button></td>
            </tr>
            `)

        } else {
        row = $(`
        <tr>
          <td>${task.id}</td>
          <td class="taskCompleteCls">${task.task_to_do}</td>
          <td class="taskUpdateCls"><button class="taskCompleteBtnCls">Change Task Status</button></td>
          <td><button class="deleteBtnCls">Delete</button></td>
        </tr>
        `)}

        row.data('task', task);
        $('#viewTasksId').append(row);
        $('#taskColorCls').append(row);
    }
}//End of render function.
//Call to initiate in getTask function.


//Created a function to update tasks as complete on button click and send to the database.
function handleTaskStatus() {
    console.log('In handleTaskStatus function');
    let task = $(this).closest('tr').data('task');
    let taskUpdate = $(this).data('task_complete');
    //   let taskCompleted = $(this).text();
    console.log('clicked Task Completed Button');

    //Created ajax PUT request, to request tasks status data.
    $.ajax({
        method: 'PUT',
        url: `/tasks/${task.id}`,
        data: { task: !taskUpdate }

    }).then(function (response) {
        console.log('updated!');
        //must call function here to take delete info off the dom on button click, and not after you refresh the page
        getTasks();

    }).catch(function (err) {
        console.log(err)
    })
}//End of handleTaskStatus function.
//Call to initiate on button click.


//Created function to handle deleted tasks on click
function handleDeleteTask() {
    console.log('Task Deleted!');
    //On click targeting closest tr and task data
    let task = $(this).closest('tr').data('task');
    let id = task.id;
        //Created ajax DELETE req to remove data from the database.
        $.ajax({
          url: `/tasks/${task.id}`,
          method: 'DELETE',
  
      }).then(function(response) {
          console.log('deleted!');
          //must call function here to take delete info off the dom on button click, and not after you refresh the page
          getTasks();
      }).catch(function(err) {
          console.log(err)
      })//end of ajax req adding delete....
      console.log(id);
  }//End of handleDeleteTask function.
  //Call to initiate on button click.