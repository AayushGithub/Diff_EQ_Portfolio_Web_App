---
id: conversiontofirstorder
title: Conversion Of A n-th order ODE Into A First-Order System of ODEs
sidebar_label: Conversion Of A n-th order ODE Into A First-Order System of ODEs
---

### *From Problem Set 8: Exercise 1.3*

Considering an nth-order ODE given as,

![my equation](https://latex.codecogs.com/gif.download?y%5E%7B%28n%29%7D%20+%20p_%7B1%7Dy%5E%7B%28n-1%29%7D+%20p_%7B2%7Dy%5E%7B%28n-2%29%7D...p_%7Bn%7Dy%20+%20q%28t%29%20%3D%20g%28t%29)

Here the parenthesis denotes the derivative and not the solution

By taking successive terms to be derivatives as

![my equation](https://latex.codecogs.com/gif.download?y%3Dx_%7B1%7D)

![my equation](https://latex.codecogs.com/gif.download?y%27%3Dx_%7B2%7D)

![my equation](https://latex.codecogs.com/gif.download?y%27%27%3Dx_%7B3%7D)

.... ![my equation](https://latex.codecogs.com/gif.download?y%5E%7Bn%7D%3Dx_%7Bn%7D). We can plug there in to get an ODE in the first order ODE.

Thus ![my equation](https://latex.codecogs.com/gif.download?x%5E%7Bn%7D%3Df%28t%2Cx%27%2Cx%27%27..x%5E%7B%28n-1%29%7D%29)

We can come to the system of 

![my equation](https://latex.codecogs.com/gif.download?x_%7B1%7D%3Dx)

![my equation](https://latex.codecogs.com/gif.download?x_%7B1%7D%27%3Dx%27%3Dx_%7B2%7D)

![my equation](https://latex.codecogs.com/gif.download?x_%7B2%7D%27%3Dx%27%27%3Dx_%7B3%7D)

Thus we get 
![my equation](https://latex.codecogs.com/gif.download?x_%7Bn%7D%27%3Dx_%7Bn%7D%3Df%28t%2Cx_%7B1%7D%2Cx_%7B2%7D%2Cx_%7B%28n-1%29%7D%29)

Thus we can get a system of successive derivatives and the system of ODEs. These are all in the first order from the nth order.

For example, if we have the equation of ![my equation](https://latex.codecogs.com/gif.download?y%27%27%20-5y+6%3D0), we can set u = y and v = y'

to get the equations of ![my equation](https://latex.codecogs.com/gif.download?u%27%3D0u+1v) and ![my equation](https://latex.codecogs.com/gif.download?v%27%3D-6u+5v).