---
id: superposition
title: Principle of Superposition
sidebar_label: Principle of Superposition
---

### From Problem Set 5: Exercise 1.2

To explore this Principle and its implications, we must first set up the environment where it is used, thus let us define it.

Let us consider a linear operator embodying the for of the ODE in ![my equation](https://latex.codecogs.com/gif.download?L%5By%5D%3Dy%27%27%20+%20p%28t%29y%27%20+%20q%28t%29y%27)

Let there be two solutions to this form (where ![my equation](https://latex.codecogs.com/gif.download?L%5By%5D%3D0)) in the solutions y1 and y2.

The principle of superposition states that the linear combination of the two solutions of the two is in the form of ![my equation](https://latex.codecogs.com/gif.download?c_%7B1%7Dy_%7B1%7D+c_%7B2%7Dy_%7B2%7D).
Here, c1 and c2 are arbitrary constants.

This solution is also in applicable to ODE for any values of c1 and c2, saying that it is a fundamental set.

We can show this by 

![my equation](https://latex.codecogs.com/gif.download?L%5Bc_%7B1%7Dy_%7B1%7D+c_%7B2%7Dy_%7B2%7D%5D%20%3D%20%5Bc_%7B1%7Dy_%7B1%7D+c_%7B2%7Dy_%7B2%7D%5D%27%27%20+%20p%28t%29%5Bc_%7B1%7Dy_%7B1%7D+c_%7B2%7Dy_%7B2%7D%5D%27+%20q%28t%29%5Bc_%7B1%7Dy_%7B1%7D+c_%7B2%7Dy_%7B2%7D%5D)

This gives us

![my equation](https://latex.codecogs.com/gif.download?%5Bc_%7B1%7Dy_%7B1%7D%5D%27%27%20+%20%5Bc_%7B2%7Dy_%7B2%7D%5D%27%27+%20p%28t%29%5Bc_%7B1%7D%5D%5By_%7B1%7D%5D%27+%20p%28t%29%5Bc_%7B2%7D%5D%5By_%7B2%7D%5D%27+%20q%28t%29%5Bc_%7B1%7D%5D%5By_%7B1%7D%5D+%20q%28t%29%5Bc_%7B2%7D%5D%5By_%7B2%7D%5D)

Taking constants common and constructing an equation

![my equation](https://latex.codecogs.com/gif.download?c_%7B1%7D%5By_%7B1%7D%5D%27%27%20+%20p%28t%29%5By_%7B1%7D%5D%27+%20q%28t%29y_%7B1%7D%5D%20+%20c_%7B2%7D%5By_%7B2%7D%5D%27%27%20+%20p%28t%29%5By_%7B2%7D%5D%27+%20q%28t%29y_%7B2%7D%5D)

L can be substituted here from the above.

![my equation](https://latex.codecogs.com/gif.download?c_%7B1%7DL%5By_%7B1%7D%5D%20+%20c_%7B2%7DL%5By_%7B2%7D%5D)

Thus we can see that the solutions are a linear combination of the two solutions with these scalar multiples of c1 and c2.

If c1 and c2 are not chosen carefully, there may be other solutions.