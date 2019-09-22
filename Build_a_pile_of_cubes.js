/*
The task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3,
the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
Function findNb is given an integer m and it returns the integer n
such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
 */
function findNb(m) {
    var i = 1, a=0;
    while(a<m) {
        a+= Math.pow(i, 3);
        i++;
    }
    return m==a ? i-1:-1;
}