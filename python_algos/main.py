
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
def increment_string(arg):
    new_string = ""
    str_int_container = ""
    for char in arg:
        if char.isdigit() != True:
            new_string += char
    if len(new_string) == len(arg):
        return new_string
    else:
        str_int_container = arg[len(new_string)::1]
    return (new_string + (str(int(str_int_container)+1)))
print(increment_string("foo012"))
