---
id: existunique
title: Existence and Uniqueness of solutions
sidebar_label: Existence and Uniqueness of solutions
---

### From Problem Set 3: Exercise 1.2

We must first establish the environment of the Ordinary Differential Equation. We are dealing with a 1st order ODE, implying that the degree of the highest differential in the ODE is 1.

We consider the ODE to be in the general form of ![my equation](https://latex.codecogs.com/gif.download?y%27%3D%20f%28t%2Cy%29), showing that ![my equation](https://latex.codecogs.com/gif.download?%5Cfrac%7B%5Cmathrm%7Bd%7D%20y%7D%7B%5Cmathrm%7Bd%7D%20x%7D) is some function of t and y.

The existence of the solutions says that there is at least one solution, or one correct parametrization of the ODE that shows the equality to be true.

We assume the function f to be continuous in some rectangle ![my equation](https://latex.codecogs.com/gif.download?%5Calpha%20%3C%20t%20%3C%20%5Cbeta) and ![my equation](https://latex.codecogs.com/gif.download?%5Cgamma%20%3C%20y%20%3C%20%5Cdelta) which contains the point of the condition of the IVP being true, such as ![my equation](https://latex.codecogs.com/gif.download?%28t_%7Bo%7D%2Cy_%7Bo%7D%29). Then in the neighborhood of t contained in ![my equation](https://latex.codecogs.com/gif.download?%5Calpha%20%3C%20t%20%3C%20%5Cbeta), there is some close interval or epsilon neighborhood, given ![my equation](https://latex.codecogs.com/gif.download?t_%7Bo%7D%20-%20h%3C%20t%3Ct_%7Bo%7D%20+%20h).

If function f proves to be continuous under these conditions, we can say that there exists at least one solution to the ODE and the IVP.

The uniqueness of the solutions implies that there is only one solution for the IVP under the given directions of the rectangle and the neighborhood. The uniqueness shows the slope field of the solutions found from the ![my equation](https://latex.codecogs.com/gif.download?y%20%3D%20%5Cphi%20%28t%29) does not cross or intersect any of the other slope field lines. 

The uniqueness can be verified if the ![my equation](https://latex.codecogs.com/gif.download?%5Cfrac%7B%5Cpartial%20f%7D%7B%5Cpartial%20y%7D), or the partial differential of the function with respect to y, is continuous in the same specified conditions set by the neighborhood and region.

To summaries, the existence of the solutions shows us that there exists some ![my equation](https://latex.codecogs.com/gif.download?y%20%3D%20%5Cphi%20%28t%29) that is true and verifies the ODE, whereas the uniqueness of solution shows us that this solution is the only 1 that verifies the ODE for a particular set of given conditions, shown by the IVP.

The importance of the existence and uniqueness of the solutions in mathematical modeling is relevant by showing us that for a given system and IVP, there will be some phase line that uniquely defines the solution. Thus from a set of conditions, the model will be precisely bound here. Also, since the phase lines do not intersect, we can know that the model is true for the IVP.

When we consider that the continuity of f is not true, we cannot guarantees the existence of solutions. This means that it may be true that solutions exist, but it does not show us with any certainty. The same can be said about the continuity of the partial derivative, where the uniqueness of solutions is only guaranteed when continuous, but any discontinuity does not invalidate this claim, only shows that it is not a certainty.

For models, this is again pertinent, as solutions can be show to exist by the simplicity of this theorem.

