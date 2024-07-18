
# Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
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

print(spin_words(sentence))
   