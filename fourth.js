import React from 'react';
function Registration(){
    return(
    <div>
         <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input><br></br>
         <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input><br></br>
         <input type="text" class="form-control" placeholder="Mother name" aria-label="Mother name"></input><br></br>
         <input type="text" class="form-control" placeholder="Father name" aria-label="Father name"></input><br></br>
         <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input><br></br>
         <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input><br></br>
         <label>Phone:</label>
         <input type="text" value="+91" size="2"></input>
         <input type="text" size="10"></input><br></br>
         <label>Gender</label>
         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
         <label class="form-check-label" for="gridRadios1">
           Male 
         </label><br></br>
         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"></input>
         <label class="form-check-label" for="gridRadios1">
           Female
         </label>
        <br></br>
        <label>College:</label>
        <select class="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option value="1">AITS</option>
        <option value="2">SRIT</option>
        <option value="3">CBIT</option>
        </select><br></br>
        <label>Branch:</label>
        <select class="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option value="1">CSE</option>
        <option value="2">ECE</option>
        <option value="3">EEE</option>
        <option value="4">Other..</option>
        </select>
        <br></br>
        <label>DOJ:</label>
        <input type="date"></input><br></br>
        <button type="submit">Submit</button>
    </div>
    );
}
export default Registration;