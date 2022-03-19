console.log( 'js' );

$(document).ready(onReady);
    console.log( 'JQ' );

function onReady() {
    console.log('ON READY FUNCTION!');
    clickListeners();
    getTasks();
}

function clickListeners() {
    $( '#addTaskBtnId' ).on( 'click', function(){
      console.log( 'in addButton on click' );
      // get user input and put in an object
      let newTask = {
        task_to_do: $('#taskToDoId').val(),
        task_complete: $('#taskStatusId').val(),
      };
      // call addTask with newTask object
      addTask( newTask );
    }); 
  }

  //GET ROUTE created in tasks.Router.js.
  //Created blah function to get 'tasks' data from the database.
  //Gets Koala data 
function getTasks(){
    console.log( 'in getTasks function!' );
    // ajax call to server to get koalas
      $.ajax({
        type: 'GET',
        url: '/tasks'
      }).then(function(response) {
        console.log(response);
        render(response);
      }).catch(function(err){
        console.log('error in GET', err);
      });
    
  } // end getTasks
  //Call to initiate in onReady function.

//Add new task! 
function addTask( newTask ){
    console.log( 'in addTasks', newTask );
    // ajax call to server to get tasks
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: newTask, 
    }).then(function(response){
      console.log('Response from sever', response);
      getTasks();
    }).catch(function(err){
      console.log('Error in POST', err);
    })
  }

  //renders to the DOM 
function render(tasks){
    $('#viewTasks').empty();
      for(let task of tasks){
  
        let row = $(`
        <tr>
          <td>${task.task_to_do}</td>
          <td class="transfer">${task.task_complete}</td>
        </tr>
        `)
  
        //Create conditional that adds ready to transfer button
  
        if (task.ready_complete === false) {
  
        }
  
  
      row.data('TASK:', task);
      $('#viewTasks').append(row);
      }
  }