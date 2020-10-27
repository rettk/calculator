TO DO
- (BUG) math doesn't compute totals for 2 digit numbers., something's wrong, but * and / works. Seems to be using second or consecutive digits ruins the +/- math on equals()
- +/- button. Only the first digit computes and affects the total, but not consecutive digits.  
- 0,+,/,* buttons can't be first text input by keyboard, but - and . can
- make it look nice
- (optional) show previouscalcs answer if calc incomplete
- (optional) add rounding button to round answer to whole number

ADVANCED TO DO (If Time)
- make the operators selection actually replace the previous one instead of not working, for example pressing + and then - simply changes the + to a - instead of preventing input
- "complex calcs off" toggle makes it so that totals are calculated at each operator press
- add parentheses buttons


DONE
- after button press, return focus to input text field
- 0,+,/,* buttons can't be first press, but - and . can
- .,+,-,*,/ buttons can't be pressed more than once in a row, and only . can go after the others
- 0 cannot follow an operator +,-,*,/
- = button, remember to convert the "total" number into a "calcs" string to match state



