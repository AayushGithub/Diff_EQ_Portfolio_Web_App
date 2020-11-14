---
id: matrixexponential
title: Matrix Exponential (As a Fundamental Matrix)
sidebar_label: Matrix Exponential
---

## *From Problem Set 10: Exercise 1.1*

Considering a general system of 1st order ODEs, we set up the system and environment to give us 

![my equation](https://latex.codecogs.com/gif.download?x%27%3DAx), where A is some n x n coefficient matrix with the initial data of ![my equation](https://latex.codecogs.com/gif.download?x%280%29%3D%20x%5E%7B0%7D).

To consider the fundamental exponential matrix, we get a solution that has the form/looks like

![my equation](https://latex.codecogs.com/gif.download?x%20%3D%20%5Cphi%20%28t%29x%5E%7B0%7D)

The fundamental matrix is given to us as the solution, as a fundamental set that solves ![my equation](https://latex.codecogs.com/gif.download?x%27%20%3D%20P%28t%29x). The P(t) gives us the solution (coefficient only matrix).

The fundamental matrix X(t) given as a matrix with the columns as vectors ![my equation](https://latex.codecogs.com/gif.download?x%5E%7B%281%29%7D%28t%29%2Cx%5E%7B%282%29%7D%28t%29%2C...x%5E%7B%28n%29%7D%28t%29) where the columns are linearly independent. 

The solutions in terms of **only** the fundamental matrix look like ![my equation](https://latex.codecogs.com/gif.download?x%3DX%28t%29C), where the C term is the vectors given by the constants c1,c2,c3...

Manipulating the system for the initial condition of some t (such that we have sufficient information to solve for c), we get ![my equation](https://latex.codecogs.com/gif.download?C%20%3D%20X%5E%7B-1%7D%28t%29x%5E%7B0%7D).

Combining all of these, we get the general solution as some function of the fundamental matrix.

![my equation](https://latex.codecogs.com/gif.download?x%20%3D%20X%28t%29X%5E%7B-1%7D%28t_%7B0%7D%29x%5E%7B0%7D). The ![my equation](https://latex.codecogs.com/gif.download?X%28t%29X%5E%7B-1%7D%28t_%7B0%7D%29) is the ![my equation](https://latex.codecogs.com/gif.download?%5Cphi%20%28t%29) term and is known as the **matrix exponential**.

We see the similarity to the x' = Ax solution. We also know that ![my equation](https://latex.codecogs.com/gif.download?%5Cphi%20%280%29%20%3D%20%5Cboldsymbol%7BI%7D), where I is the identity matrix for the given order.

This is because the matrix and inverse cancel each other out.

In the exponential form, we see that the ![my equation](https://latex.codecogs.com/gif.download?e%5E%7BAt%7D) looks like the term = ![my equation](https://latex.codecogs.com/gif.download?%5Cboldsymbol%7BI%7D+%20%5Csum_%7Bn%20%5Cto%201%7D%5E%7B%5Cinfty%7D%5Cfrac%7BA%5E%7Bn%7Dt%5E%7Bn%7D%7D%7Bn%21%7D). Its differential gives us the ![my equation](https://latex.codecogs.com/gif.download?Ae%5E%7BAt%7D), since it is a Taylor expansion. This satisfies the 0 condition of the IVP.