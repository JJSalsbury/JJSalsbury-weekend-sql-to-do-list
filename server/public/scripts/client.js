console.log('Js Ready');

$(document).ready(onReady);
console.log('Jquery Ready');

function onReady() {
    console.log('onReady Function initiated');
    $('#viewTasksId').on('click', '.taskCompleteBtnCls', handleTaskStatus);
    $('#viewTasksId').on('click', '.deleteBtnCls', handleDeleteTask);
    clickListeners();
    getTasks();
}

function clickListeners() {
    $('#addTaskBtnId').on('click', function () {
        console.log('addTask button clicked');

        // get user input and put in an object
        let newTask = {
            task_to_do: $('#taskToDoId').val(),
            task_complete: $('#taskStatusId').val(),
        };
        // call addTask with newTask object
        addTask(newTask);
    });
}

//GET ROUTE created in tasks.Router.js.
//Created blah function to get 'tasks' data from the database.
//Gets Koala data 
function getTasks() {
    console.log('getTasks Function: GET task data from database');
    // ajax call to server to get koalas
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
    }).catch(function (err) {
        console.log('Error in POST', err);
    })
}//End addTask function.
//Call to initiate clickListener function.

//renders to the DOM 
function render(tasks) {
    $('#viewTasksId').empty();
    let row;
    for (let task of tasks) {
        if (task.task_complete === false) {
            row = $(`
            <tr>
              <td>${task.id}</td>
              <td class="taskStatusCls">${task.task_to_do}</td>
              <td class="taskUpdateCls"><button class="taskCompleteBtnCls">Task Completed</button></td>
            </tr>
            `)

        } else {
        row = $(`
        <tr>
          <td>${task.id}</td>
          <td class="taskCompleteCls">${task.task_to_do}</td>
          <td class="taskUpdateCls"><button class="taskCompleteBtnCls">Task Completed</button><button class="deleteBtnCls">Delete Task</button></td>
        </tr>
        `)}

        row.data('task', task);
        $('#viewTasksId').append(row);
        $('#taskColorCls').append(row);
    }
}//End of render function.
//Call to initiate in getTask function.

function handleTaskStatus() {
    console.log('In handleTaskStatus function');
    let task = $(this).closest('tr').data('task');
    let taskUpdate = $(this).data('task_complete');
    //   let taskCompleted = $(this).text();
    console.log('clicked Task Completed Button');

    $.ajax({
        method: 'PUT',
        url: `/tasks/${task.id}`,//just like delete 
        data: { task: !taskUpdate }//just like post

    }).then(function (response) {
        console.log('updated!');
        //must call function here to take delete info off the dom on button click, and not after you refresh the page
        getTasks();

    }).catch(function (err) {
        console.log(err)
    })
}//End of handleTaskStatus function.
//Call to initiate on button click.

function handleDeleteTask() {
    console.log('Task Deleted!');
    let task = $(this).closest('tr').data('task');
    //assigns a useable variable to that specific
      let id = task.id;
        //*adding delete... ajax req
        $.ajax({
          url: `/tasks/${task.id}`,
          method: 'DELETE',
          //this wont work... need the id, not a part of rec.body
          // data: {id: id}
  
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