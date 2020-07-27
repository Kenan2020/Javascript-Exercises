/*
There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.
Examples
----------------
uniqueStyles([
  "Dub, Dancehall",
  "Industrial, Heavy Metal",
  "Techno, Dubstep",
  "Synth-pop, Euro-Disco",
  "Industrial, Techno, Minimal"
]) ➞ 9

uniqueStyles([
  "Soul",
  "House, Folk",
  "Trance, Downtempo, Big Beat, House",
  "Deep House",
  "Soul"
]) ➞ 7

Notes
----------------
N/A

uniqueStyles([
	"Dub,Dancehall",
	"Industrial,Heavy Metal",
	"Techno,Dubstep",
	"Synth-pop,Euro-Disco",
	"Industrial,Techno,Minimal"
]), 9)

uniqueStyles([
	"Soul",
	"House,Folk",
	"Trance,Downtempo,Big Beat,House",
	"Deep House",
	"Soul"
]), 7)

uniqueStyles([
	"Black Metal,Avantgarde",
	"Funk",
	"Deep House,House",
	"Big Band",
	"Punk"
]), 7)

uniqueStyles([
	"Funk",
	"Funk",
	"Funk",
	"Funk",
	"Funk",
]), 1)
*/
function uniqueStyles(albums) {
  let res=new Set()
  albums.join(",").split(",").map(item => res.add(item))
  return res.size
}
function uniqueStyles(albums) {
   new Set(albums.flatMap(x => x.split(','))).size
}
