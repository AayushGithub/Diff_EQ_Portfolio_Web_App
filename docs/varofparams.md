---
id: varofparams
title: Variation of Parameters Method
sidebar_label: Variation of Parameters Method
---

### From Problem Set 7: Exercise 1.1

##### Note: There is a slight correction from BlackBoard Portfolio in the L[y] term

We must first establish the environment of the 2nd order linear homogenous ODE.

Given that ![my equation](https://latex.codecogs.com/gif.download?L%5By%5D%20%3D%20y%27%27%20+%20p%28t%29y%27%20+%20q%28t%29y%20%3Dg%28t%29)

to get the homogenous component of the the solution, we can simply isolate the g(t) term and obtain a solution that has the form of ![my equation](https://latex.codecogs.com/gif.download?c_%7B1%7Dy_%7B1%7D%28t%29+c_%7B2%7Dy_%7B1%7D%28t%29)

To find the nonhomogenous component of the solution, the Variation of Parameters method helps us out since it is a much more general and all encompassing method than the method of undetermined coefficients.

There are 4 notable points to the utility and functionality of this method:

a. This method is another form of the reduction of order method
b. This method works/is applicable with any ODE of the type.
c. The method involves the formulation of an informed guess
d. Relies on two assumptions
    Namely that the non homogenous solution has the form of ![my equation](https://latex.codecogs.com/gif.download?Y%28t%29%3Du_%7B1%7Dy_%7B1%7D%28t%29+u_%7B2%7Dy_%7B2%7D%28t%29) where u1 and u2 are some unknown functions solely in t.
    ![my equation](https://latex.codecogs.com/gif.download?u_%7B1%7D%27y_%7B1%7D%28t%29+u_%7B2%7D%27y_%7B2%7D%28t%29%3D0)
The method will help us arrive at a solution in the form of 

![my equation](https://latex.codecogs.com/gif.download?y%28t%29%3D%20gen%20soln.%20%3D%20c_%7B1%7Dy_%7B1%7D%28t%29+c_%7B2%7Dy_%7B2%7D%28t%29+u_%7B1%7Dy_%7B1%7D%28t%29+u_%7B2%7Dy_%7B2%7D%28t%29)