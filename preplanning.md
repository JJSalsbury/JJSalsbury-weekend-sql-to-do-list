**JJ's Project Preplanning:**

# Weekend Project.
# The Fullstack To-Do App. 
​
## To Do
​
[x] Power on laptop.   
[x] Install npm libraries, as needed needed. 
    [x] express, pg. 
[x] Create Pool. 
​
### Database
​
[x] Setup database with provided data. NAME = tasks_library.  
     
[x] Connect the database to the server w/ pb  
    [x] GET request  
            -get database "tasks_library"  
    [x] POST request  
            -add a task to database  
    [x] PUT request  
            -update 'task complete'   
    [] STRETCH 
​
### Server
​
[x]  express
[x]  body-parser
[x]  router (tasksRouter)


### DOM
[x] Create a front end experience that allows a user to create a Task.  
    [x] Create input fields in index.html.  
    [x] Create button to submit user input.
        => handle data flow on client side, server and database. (See tasks above). 


### Client
1. Setup "getter" FUNCTIONS for inputs on DOM:  
    [x] $(document),ready:  
        [x] Call necessary functions on ready.  
            [x] Create clickListener function.  
            [x] Call to getTasks function. (See functions below).  

    [x] Create getTasks function (function gets data from the database).   
        [x] Ajax GET request to url /tasks_library (from database).    
        [x] Call renderToDom function in .then promise.    

2. When the Task is created, it should be stored inside of a database (SQL).    
    [x] Create addTasks function, write an ajax POST request.  
        [x] Add POST request to url /tasks_library as .then promise.  

3.1. When a Task is complete, its visual representation should change on the front end.  
    (updates "Task Complete" table header in the database.)
    [x] Create taskComplete function, write ajax PUT request.  
        [x] Change background of the task container could change from red to green.  
        [x] Create taskComplete function, write ajax POST request as.then promise.  

3.2. Whether or not a Task is complete should also be stored in the database.  
    [x] Create function for PUT request to update 'ready to transfer'.   

4. [x] Create renderToDom function to render data to DOM.
    [x] Each task should have an option to 'Complete' or 'Delete':  
        [x] Add complete/delete buttons in append code block.   
        



