---
id: reductionordertheory
title: Reduction of Order Method
sidebar_label: Reduction of Order Method
---

### From Problem Set 6: Exercise 1.1

Consider an ODE of the 2nd order which is linear and homogeneous in nature, in its general form.

![my equation](https://latex.codecogs.com/gif.download?y%27%27%20+%20p%28t%29y%27%20+%20q%28t%29%3D0)

Over here, we see that the g(t) term is trivial.

In this general form, p(t) and q(t) are functions solely in the independent variable, t.

Suppose that it is known that the ![my equation](https://latex.codecogs.com/gif.download?y_%7B1%7D%28t%29) is one solution to this ODE, i.e, ![my equation](https://latex.codecogs.com/gif.download?y_%7B1%7D%28t%29) when substituted in for all of its forms gives us 0, we need to now find the other solution to the ODE, which over here is the second and final solution.

We can take the approach of an informed guess. As a guess, if we can find a second solution independent of y, then we can completely solve the ODE and find out the general solution.

The Reduction of Order method is one such way to find the other solution to the ODE.

We assume this new solution ![my equation](https://latex.codecogs.com/gif.download?y_%7B2%7D%28t%29) to be some multiple of the original ![my equation](https://latex.codecogs.com/gif.download?y_%7B1%7D%28t%29).
Thus we can model our solution currently as ![my equation](https://latex.codecogs.com/gif.download?y%20%3D%20v%28t%29y_%7B1%7D%28t%29) such that we can substitute into the original ODE.

We will thus obtain a new ODE in the terms of ![my equation](https://latex.codecogs.com/gif.download?v) or![my equation](https://latex.codecogs.com/gif.download?v%27), instead of the ![my equation](https://latex.codecogs.com/gif.download?y_%7B1%7D%28t%29).

We find that regardless of the form of the original ODE, we always come to the statement shown below:
![my equation](https://latex.codecogs.com/gif.download?y_%7B1%7D%28t%29v%27%27%20+%20%282y_%7B1%7D%27+py_%7B1%7D%29v%27%20%3D%200).

We see that this is actually a **1st order ODE** in ![my equation](https://latex.codecogs.com/gif.download?v%27), which can be solved as a linear or separable ODE to find ![my equation](https://latex.codecogs.com/gif.download?v%27) and ![my equation](https://latex.codecogs.com/gif.download?v) by integration.

This method is called the reduction of order method as we are finding a solution of the 1st order ODE in ![my equation](https://latex.codecogs.com/gif.download?v%27) , instead of the original second order ODE in y. 