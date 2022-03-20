# Weekend Assignment
​
## To Do
​
[x] Power on laptop.   
[ ] Install npm libraries, as needed needed. 
    [x] express, pg. 
[ ] Create Pool. 
​
### Database
​
[ ] Setup database with provided data. NAME = tasks_library.  
     
[ ] Connect the database to the server w/ pb  
    [ ] GET request  
            -get database "tasks_library"  
    [ ] POST request  
            -add a task to database  
    [ ] PUT request  
            -update 'task complete'   
    [ ] STRETCH - DELETE  
​
### Server
​
[ ]  express
[ ]  body-parser
[ ]  router (tasksRouter)


### DOM
[ ] Create a front end experience that allows a user to create a Task.  
    [ ] Create input fields in index.html.  
    [ ] Create button to submit user input.
        => handle data flow on client side, server and database. (See tasks above). 


### Client
1. Setup "getter" FUNCTIONS for inputs on DOM:
    [ ] $(document),ready:
        [ ] Call necessary functions on ready.  
            [ ] Create clickListener function.  //?
            [ ] Call to getTasks function. (See functions below). //?

    [ ] Create getTasks function (function gets data from the database).  
        [ ] Ajax GET request to url /tasks_library (from database).  
        [ ] Call renderToDom function in .then promise.  

2. When the Task is created, it should be stored inside of a database (SQL).  
    [ ] Create addTasks function, write an ajax POST request.  
        [ ] Add POST request to url /tasks_library as .then promise.  

3.1. When a Task is complete, its visual representation should change on the front end.  
    (updates "Task Complete" table header in the database.)
    [ ] Create taskComplete function, write ajax PUT request.  //??
        [ ] Change background of the task container could change from red to green.
        [ ] Create taskComplete function, write ajax POST request as.then promise.  //??

3.2. Whether or not a Task is complete should also be stored in the database.  
    [ ] Create function for PUT request to update 'ready to transfer'.   

4. [ ] Create renderToDom function to render data to DOM.
    [ ] Each task should have an option to 'Complete' or 'Delete':
        [ ] Add complete/delete buttons in append code block.   
        

**Here are the specific components for the challenge:**

* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.

### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  - font family and size
  - text color & or background color of tasks *to show whether or not they have been completed*