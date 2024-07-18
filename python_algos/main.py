
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

def spin_wordsA(sentence):
    words = [word for word in sentence.split(" ")]
    words = [word if len(word) < 5 else word[::-1] for word in words]
    return " ".join(words)

# **************************************************************
# **************************************************************

# Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

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
    print(arr)
    for str in arr:
        if (str == ":)" or str == ";)" or str == ":D" or str == ";D" or str == ":-D" or str == ";-D"  or str == ":~)" or str == ";~)" or str == ';~D'
 ):
            smileCount += 1
    return smileCount

print(smileCounter(smilesArray))

def count_smileys(arr):
	return len(list(filter(lambda x: x in [':D',':~D',':-D',';D',';~D',';-D',':)',':~)',':-)',';)',';~)',';-)'],arr)))
print(count_smileys(smilesArray))

   