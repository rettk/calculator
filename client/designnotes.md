TO DO ---------------------------------
- keyboard rules to match button rules. i.e.: 0,+,/,* buttons can't be first text input by keyboard, but - and . can
- make it look nice (move calc to center of page, add title, stylize it better)
- (optional) final button or function?  ??? button
- (optional) how to catch more complex errors like too many ),) or calcs that will never compute?
- (optional) show previouscalcs answer if calc incomplete

DEV QUESTIONS -------------------------
- how to make it look real nice? Big soft numbers.
- how do you put a picture of a back arrow in the backspace key?
- look over my +/- function, seems really long
- do you leave in commented out console.logs for testing?

ADVANCED TO DO (If Time) --------------
- make the operators selection actually replace the previous one instead of not working, for example pressing + and then - simply changes the + to a - instead of preventing input
- "complex calcs off" toggle makes it so that totals are calculated at each operator press

DONE ----------------------------------
- after button press, return focus to input text field
- 0,+,/,* buttons can't be first press, but - and . can
- .,+,-,*,/ buttons can't be pressed more than once in a row, and only . can go after the others
- 0 cannot follow an operator +,-,*,/
- = button, remember to convert the "total" number into a "calcs" string to match state
- (BUG-FIXED) math doesn't compute totals for 2 digit numbers., Only the first digit computes and affects the total, but not consecutive digits.  
- add parentheses buttons
- (optional) add rounding button to round answer to whole number
- +/- button. - how can you multiply, add, or subtract by a negative number? May need parentheses buttons or +/- to work (implemented into +/- button)


