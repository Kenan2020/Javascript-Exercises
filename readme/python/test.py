import sys
from functions import square
name = input("Enter your name: ")
print(f"Hello, {name}")  # f for formatted
# d=True
# e=None #NoneType
# -------------------------------------------------------------------
# conditions
# -------------------------------------------------------------------
n = int(input("Enter a number: "))
if n > 0:
    print("n is positive")
elif n < 0:
    print("n is negative")
else:
    print("n is zero")
# -------------------------------------------------------------------
# sequences (arrays)
# -------------------------------------------------------------------
print(name[0])
names = ["Harry", "Ron", "Hermione"]
print(names[0])

coordinateX = 10.0
coordinateY = 20.0
coordinate = (10.0, 20.0)
# -------------------------------------------------------------------
# data structure
# -------------------------------------------------------------------
# list - sequence of mutable values (we can modifiy it)
# tuple - sequence of immutable values
# set - collection of uniques values (like Set in javascript)
# dict - collection of key-value pairs (like object in javascript)
# -------------------------------------------------------------------
# list
# -------------------------------------------------------------------
names = ["Harry", "Ron", "Hermione", "Ginny"]  # define a list
print(names)
names.append("Draco")
names.sort()
print(names)
# -------------------------------------------------------------------
# set
# -------------------------------------------------------------------
s = set()  # create an empty set
# add elements to set
s.add(1)
s.add(3)
s.add(2)
s.add(3)
s.add(5)
s.remove(2)
print(s)
print(f"The set has {len(s)} elements.")  # len = length
# -------------------------------------------------------------------
# loops
# -------------------------------------------------------------------
for i in [0, 1, 2, 3, 4, 5]:
    print(i)

for i in range(6):
    print(i)

names = ["Harry", "Ron", "Hermione"]
for name in names:
    print(name)

name = "Harray"
for character in name:
    print(character)

# -------------------------------------------------------------------
# dict (dictionaries)
# -------------------------------------------------------------------
houses = {"Harry": "Gryffindor", "Draco": "Slytherin"}
houses["Hermione"] = "Gryffindor"  # add key value to dictionary
print(houses)
print(houses["Harry"])

# -------------------------------------------------------------------
# functions
# -------------------------------------------------------------------
# def square(x):
#     return x * x
# need from functions import square
# import functions (as modules)
# functions.square

for i in range(10):
    print(f"The square of {i} is {square(i)}")

# -------------------------------------------------------------------
# classes
# -------------------------------------------------------------------


class Point():
    def __init__(self, x, y):
        self.x = x
        self.y = y


p = Point(2, 8)
print(p.x)
print(p.y)


class Flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name):
        if not self.open_seats():
            return False

        self.passengers.append(name)
        return True

    def open_seats(self):
        return self.capacity - len(self.passengers)


flight = Flight(3)
people = ["Harry", "Ron", "Hermione", "Ginny", "kinan"]
for person in people:
    success = flight.add_passenger(person)
    if success:
        print(f"Added {person} to flight successfully.")
    else:
        print(f"No available seats for {person}")

# -------------------------------------------------------------------
# decorators
# -------------------------------------------------------------------


def announce(f):
    def wrapper():
        print("About to run the function ...")
        f()
        print("Done with the function.")
    return wrapper


@announce
def hello():
    print("Hello, world!")


hello()
# -------------------------------------------------------------------
# lambda
# -------------------------------------------------------------------
people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Revenclaw"},
    {"name": "Draco", "house": "Slytherin"},
]


# def f(person):
#     return person["name"]


# people.sort(key=f)
people.sort(key=lambda person: person["name"])  # the same
print(people)
# -------------------------------------------------------------------
# exceptions
# -------------------------------------------------------------------
# need import sys
try:
    x = int(input("x: "))
    y = int(input("y: "))
except ValueError:
    print("Error: Invalid Input.")
    sys.exit(1)
try:
    result = x/y
except ZeroDivisionError:
    print("Error: Cannot divide by zero")
    sys.exit(1)
print(f"{x} / {y} = {result}")
