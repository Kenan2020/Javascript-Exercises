/*
One cause for speeding is the desire to shorten the time spent traveling. While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.

Create a function that calculates the amount of time saved (in minutes) were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.
Examples
----------------
// The paramater's format is as follows:
// (speed limit, avg speed, distance traveled at avg speed)

timeSaved(80, 90, 40) ➞ 3.3
timeSaved(80, 90, 4000) ➞ 333.3
timeSaved(80, 100, 40 ) ➞ 6.0
timeSaved(80, 100, 10) ➞ 1.5

Notes
----------------
    Speed = distance/time
    The time returned should be in minutes, not hours.
    The unit of speed is assumed to be miles per hour (mph).

timeSaved(80, 90, 40) ➞ 3.3
timeSaved(80, 90, 4000) ➞ 333.3
timeSaved(80, 100, 40) ➞ 6.0
timeSaved(80, 100, 10) ➞ 1.5
timeSaved(60, 65, 25) ➞ 1.9
timeSaved(60, 60, 20) ➞ 0
timeSaved(80, 95, 200) ➞ 23.7
timeSaved(70, 92, 50) ➞ 10.2
timeSaved(70, 92, 20) ➞ 4.1
timeSaved(70, 100, 12) ➞ 3.1
*/
function timeSaved(lim, avg, d) {
	return Number(((d/lim - d/avg)*60).toFixed(1))
}
function timeSaved(lim, avg, d) {
	return +((d / lim - d / avg) * 60).toFixed(1);
}
