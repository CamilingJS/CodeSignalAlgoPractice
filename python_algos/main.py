
# 1) Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
#  "Hey fellow warriors"  --> "Hey wollef sroirraw" 
sentence = "Hey fellow warriors"
def spin_words(sentence):
    arr = sentence.split(" ")
    for index, word in enumerate(arr):
        if len(word) < 5:
            arr[index] = word
        else:
            arr[index] = word[::-1]
    return " ".join(arr)

# def spin_wordsA(sentence):
#     words = [word for word in sentence.split(" ")]
#     words = [word if len(word) < 5 else word[::-1] for word in words]
#     return " ".join(words)

# **************************************************************
# **************************************************************
# **************************************************************

# 2) Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

# Rules for a smiling face:

# Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# Every smiling face must have a smiling mouth that should be marked with either ) or D
# No additional characters are allowed except for those mentioned.

# Valid smiley face examples: :) :D ;-D :~)
# Invalid smiley faces: ;( :> :} :]
# Example
# countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
# countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
# countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

smilesArray = [':D', ':~)', ';~D', ':)']
def smileCounter(arr):
    smileCount = 0
    for str in arr:
        if (str == ":)" or str == ";)" or str == ":D" or str == ";D" or str == ":-D" or str == ";-D"  or str == ":~)" or str == ";~)" or str == ';~D'
 ):
            smileCount += 1
    return smileCount

# print(smileCounter(smilesArray))

# def count_smileys(arr):
# 	return len(list(filter(lambda x: x in [':D',':~D',':-D',';D',';~D',';-D',':)',':~)',':-)',';)',';~)',';-)'],arr)))
# print(count_smileys(smilesArray))


# **************************************************************
# **************************************************************
# **************************************************************

# 3) Quick practice:
# def odd_or_even(num):
#     if num % 2 == 0:
#         return "Even"
#     return "Odd"

# def slugify(str, sep="-"):
#     return str.lower().strip().replace(" ", sep)
# print(slugify("Hello this is to test slugify", "**"))

# def count_vowels(str):
#     count = 0
#     for char in str:
#         if char in "aeiou":
#             count += 1
#     return count
# print(count_vowels("aeiouy"))

# def outer():
#     animal = "Func animal"
#     print(animal)
# animal = "Global animal"
# outer()

# **************************************************************
# **************************************************************
# **************************************************************

# Your job is to write a function which increments a string, to create a new string.

# If the string already ends with a number, the number should be incremented by 1.
# If the string does not end with a number. the number 1 should be appended to the new string.


# phrase = "foobar23"
# def increment_string(phrase):
#     newString = ""
#     tempStrNum = ""
#     numContainer = 0
#     for char in phrase:
#         if char.isdigit() != True:
#             newString += char
#         print(newString)
#     tempStrNum += phrase[len(newString)::1]
#     numContainer = int(tempStrNum) + 1
#     print(numContainer)
#     tempStrNum = str(numContainer)
#     print(tempStrNum)
#     print(newString + tempStrNum)
#     return newString + tempStrNum
   
# increment_string(print(phrase))
def increment_string_simple(arg):
    new_string = ""
    str_int_container = ""
    for char in arg:
        if char.isdigit() != True:
            new_string += char
    if len(new_string) == len(arg):
        return new_string
    else:
        str_int_container = arg[len(new_string)::1]
        for char in str_int_container:
            if char == '0':
                new_string += '0'
    return (new_string + (str(int(str_int_container)+1)))
# print(increment_string_simple("Jonathan0023"))

passcode = "Jon12athan0023"

# Enumerate function

def increment_string(arg):
    rev_arg = arg[::-1]
    num_str_container = ""
    new_str_container = ""
    num_container = 0
    pre_zero_str = ""
    for i, element in enumerate(rev_arg):
        if element.isdigit() == True:
            num_str_container = element + num_str_container
        if element.isdigit() == False:
            break
    num_str_len = len(num_str_container)
    for char in num_str_container:
        if char == '0':
            pre_zero_str = pre_zero_str + char
            print("line 146: ", pre_zero_str)
        else:
            pre_zero_str = ""
    if num_str_container:
        num_container = int(num_str_container) + 1
    print("line 148: ", num_container)
    if len(num_str_container) > 0:
        new_str_container = new_str_container + (arg[:-num_str_len:])
    elif len(num_str_container) == 0:
        new_str_container = arg
        print("here")
    print("line 150: ", new_str_container)

    if num_container == 0:
        return new_str_container
    else:
        return new_str_container + pre_zero_str + str(num_container)

# print(increment_string("fo1o001"))

# It's race day and our starting grid is set! Charles sits on pole and Lando brings up the rear.
drivers = ["Charles", "Pierre", "Valterri", "Lewis", "George","Lando"]

# Oh dear, we've misspelled "Valtteri" as "Valterri".  Update the drivers list to include the correct spelling!
drivers[2] = "Valtteri"

# Esteban makes it out of the pits and joins the pack just in time.  Add "Esteban" to the end of the drivers list!
drivers.append("Esteban")

# What's this? There's another group of drivers that comes out of nowhere to join the race! Add each element from the others list to the end of the drivers list.
others = ["Blue", "Elton", "Colt"]
drivers.extend(others)

# Colt looks lost out there! He has a horrible fiery crash.  Remove the last element from the drivers list ("Colt")
drivers.pop()

# Oh dear, there's a huge crash at the front! Remove the first element from the driver's list
drivers.remove("Charles")

# And again the leader of the pack runs into trouble! He's not out of the race, but he's now moved to last place.  Remove the first driver in the list, store it in variable, and then add it to the end of the list.
lost_lead = drivers.pop(0)
drivers.append(lost_lead)

# My idiotic cat, Blue, is in the middle of the pack.  Delete "Blue" from the drivers list using the remove method!
drivers.remove("Blue")

# My dog, Elton, is making a remarkable charge up the leadboard! Remove Elton from his current position in the list and insert him at index 2.
elton = drivers.pop(5)
drivers.insert(2, elton)
# The race is over! It's time for the podium ceremony.  Create a new list called podium that contains the first 3 elements from the drivers list. (use a slice!)
podium = drivers[:3]

# Loop over the drivers list and print out a leadboard that includes a driver's finishing position and their name, like this:
# 1. Valtteri
# 2. Lewis
# 3. Elton
# 4. George
# 5. Lando
# 6. Esteban
# 7. Pierre

# place = 1
# for driver in drivers:
#     print(f"{place}: {driver}")
#     place +=1

# flavors = ["chocolate", "vanilla", "rocky road", "strawberry"]

# evens = [2, 4, 6]
# evens.reverse()

# nums = [4,6,9,10,65,32,-10, -100]
# nums.sort(reverse=True)

# sorted_flavors = sorted(flavors)

# print("hello...there...hi...".split('...'))

test_scores = {
    "student1": 90,
    "student2": 91,
    "student3": 93,
    "student4": 89,
    "student5": 95,
    "student6": 99,
}

# total_score = 0
# for score in test_scores.values():
#     total_score += score
# print(total_score/len(test_scores))

# for key in test_scores.keys():
#     print(key, test_scores[key])

# for item in test_scores.items():
#     print(item)

# top_score = 0
# top_student = ""
# for student, score in test_scores.items():
#     if score > top_score:
#         top_score = score
#         top_student = student
# print(f"{top_student} got the best score with {top_score}")

d1 = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
}
d2 = {
    'a': 9,
    'e': 5,
    'f': 6,
    'g': 7,
}
d1.update(d2)
# print(d1)

d3 = {'h': 10}
d4 = {**d1, **d3}
# print(d4)



# *********************************************************************************************
# The exercise uses the following "peak" dictionary:
peak = {
    "name": "Castle Peak",
    "height": 14264,
    "summit_log": [],
    "cell_reception": {
        "AT&T": "no reception",
        "T-Mobile": "poor"
    }
}

# Without touching the original variable declaration (above)...
# Add a "range" key to peak and set it equal to "Elk Mountains"
peak["range"] = "Elk Mountains"

# Add a "first_climbed" key to peak and set it equal to 1873
peak["first_climbed"] = 1873

# Whoops, there's a mistake with the peak "height".  Update it to 14265
peak["height"] = 14265

# Add a "Verizon" to the "cell_reception" dict and set it equal to "good"
peak["cell_reception"]["Verizon"] = "good"
# You just summited the peak! Add your name to the "summit_log" list
peak["summit_log"].append("Jonathan")
peak["summit_log"].append("Joy-Ann")

# Let's rename "height" to "elevation":
# Remove "height" from the dict and store the result in a variable.
peak["elevation"] = peak.pop("height")

# Use the value for "height" and store it in the dict under they key "elevation"


# Loop over the values in the dictionary and print them all out.  Don't ask why, just do it :) 
# arrVal = peak.values()
# for value in arrVal:
#     print(value)


# Loop over the keys AND values in the dictionary and print them all out in the following format:
# key -> value
# (print an arrow between each pair)

arr = peak.items()
for key, val in arr:
    print(f"{key} --> {val}")


# A huge earthquake/meteor/forestfire/tsunami has destroyed the peak.  Please empty out the entire dictionary.
peak.clear()

print("Post armagaedon", peak)