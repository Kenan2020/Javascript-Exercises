/*
Given a number, return a string of the word "Boom", which varies in the following ways:

    The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
    If n is evenly divisible by 2, add an exclamation mark to the end.
    If n is evenly divisible by 5, return the string in ALL CAPS.
    If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

The example below should help clarify these instructions.
Examples
-----------
boomIntensity(4) ➞ "Boooom!" // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
boomIntensity(1) ➞ "boom" // 1 is lower than 2, so we return "boom"
boomIntensity(5) ➞ "BOOOOOM" // There are 5 "o"s and 5 is divisible by 5 (all caps)
boomIntensity(10) ➞ "BOOOOOOOOOOM!" // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)

Notes
-----------
    A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
    "Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".

boomIntensity(0), "boom")
boomIntensity(1), "boom")
boomIntensity(2), "Boom!")
boomIntensity(3), "Booom")
boomIntensity(4), "Boooom!")
boomIntensity(5), "BOOOOOM")
boomIntensity(6), "Boooooom!")
boomIntensity(7), "Booooooom")
boomIntensity(8), "Boooooooom!")
boomIntensity(9), "Booooooooom")
boomIntensity(10), "BOOOOOOOOOOM!")
boomIntensity(11), "Booooooooooom")
boomIntensity(12), "Boooooooooooom!")
boomIntensity(13), "Booooooooooooom")
boomIntensity(14), "Boooooooooooooom!")
boomIntensity(15), "BOOOOOOOOOOOOOOOM")
boomIntensity(16), "Boooooooooooooooom!")
boomIntensity(17), "Booooooooooooooooom")
boomIntensity(18), "Boooooooooooooooooom!")
boomIntensity(19), "Booooooooooooooooooom")
boomIntensity(20), "BOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(21), "Booooooooooooooooooooom")
boomIntensity(22), "Boooooooooooooooooooooom!")
boomIntensity(23), "Booooooooooooooooooooooom")
boomIntensity(24), "Boooooooooooooooooooooooom!")
boomIntensity(25), "BOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(26), "Boooooooooooooooooooooooooom!")
boomIntensity(27), "Booooooooooooooooooooooooooom")
boomIntensity(28), "Boooooooooooooooooooooooooooom!")
boomIntensity(29), "Booooooooooooooooooooooooooooom")
boomIntensity(30), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(31), "Booooooooooooooooooooooooooooooom")
boomIntensity(32), "Boooooooooooooooooooooooooooooooom!")
boomIntensity(33), "Booooooooooooooooooooooooooooooooom")
boomIntensity(34), "Boooooooooooooooooooooooooooooooooom!")
boomIntensity(35), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(36), "Boooooooooooooooooooooooooooooooooooom!")
boomIntensity(37), "Booooooooooooooooooooooooooooooooooooom")
boomIntensity(38), "Boooooooooooooooooooooooooooooooooooooom!")
boomIntensity(39), "Booooooooooooooooooooooooooooooooooooooom")
boomIntensity(40), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(41), "Booooooooooooooooooooooooooooooooooooooooom")
boomIntensity(42), "Boooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(43), "Booooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(44), "Boooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(45), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(46), "Boooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(47), "Booooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(48), "Boooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(49), "Booooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(50), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(51), "Booooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(52), "Boooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(53), "Booooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(54), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(55), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(56), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(57), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(58), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(59), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(60), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(61), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(62), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(63), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(64), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(65), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(66), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(67), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(68), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(69), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(70), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(71), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(72), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(73), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(74), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(75), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(76), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(77), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(78), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(79), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(80), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(81), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(82), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(83), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(84), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(85), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(86), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(87), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(88), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(89), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(90), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")
boomIntensity(91), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(92), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(93), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(94), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(95), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
boomIntensity(96), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(97), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(98), "Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!")
boomIntensity(99), "Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom")
boomIntensity(100), "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!")

// made by Joshua Señoron
*/
const boomIntensity = n => {
	if (n < 2) return 'boom';
	const boom = 'B' + 'o'.repeat(n) + 'm' + (!(n % 2) ? '!' : '');
	return !(n % 5) ? boom.toUpperCase() : boom;
};
