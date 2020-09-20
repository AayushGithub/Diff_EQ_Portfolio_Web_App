---
id: if
title: Integrating Factor
sidebar_label: Integrating Factor
---

From Problem Set 2:  Exercise 1.3 

To understand the utility and nature of the integrating factor, we must first define and establish what a first-order linear ODE is.

An ODE is said to be linear if all of the terms concerning y are linear and simply constructed from continuous functions of the independent variable, this case t. The ODE is also said to be first order as the highest degree of the differential in the system is 1.

The Linear, first-order ODE has the form ![my equation](https://latex.codecogs.com/gif.download?y%27%20+%20p%28t%29y%3Dg%28t%29), where p(t) and q(t) are simply continuous functions in the independent variable.

Let's refer to the ODE as *. We see that it is perfectly in the general of the definition.

The Integrating Factor for the given ODE is said to be ![my equation](https://latex.codecogs.com/gif.download?e%5E%7B%5Cint%20p%28t%29dt%7D). 

The Integrating Factor is simply the value of the exponent (e or Euler's Number) raised to the integral of p(t) with respect to t. 

We now discuss the utility of this term.

By solving for this Integrating Factor and producing a term that is relatively benign, we proceed to universally multiply it across *.
The new equality produced is 
![my equation](https://latex.codecogs.com/gif.download?e%5E%7B%5Cint%20p%28t%29dt%7D%5Cfrac%7B%5Cmathrm%7Bd%7D%20y%7D%7B%5Cmathrm%7Bd%7D%20t%7D%20+%20e%5E%7B%5Cint%20p%28t%29dt%7Dp%28t%29y%20%3D%20g%28t%29e%5E%7B%5Cint%20p%28t%29dt%7D)

While the RHS still has to be solved and simplified, the LHS can be written in an alternate form.
 ![my equation](https://latex.codecogs.com/gif.download?%5Cfrac%7B%5Cmathrm%7Bd%7D%20e%5E%7B%5Cint%20p%28t%29dt%7Dy%7D%7B%5Cmathrm%7Bd%7D%20x%7D) as by chain rule, we see the bifurcation into the two terms that are present above.

By taking advantage and using the Fundamental Theorem of Calculus, if we integrate the LHS with respect to t, we are left with just![my equation](https://latex.codecogs.com/gif.download?e%5E%7B%5Cint%20p%28t%29dt%7Dy)

By also integrating the RHS, we are left at a position that is greatly beneficial, as the solution is now directly inferable in the y term, and the exponential value can simply be divided universally.
The Integrating factor helps us to single out the y term, with just the integral of the independent variable terms, which is often not a complicated calculus.
The Integrating factor thus facilitates universal integration.

The integrating factor is also denoted by IF or ![my equation](https://latex.codecogs.com/gif.download?%5Cmu).
