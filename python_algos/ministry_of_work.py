from textblob import TextBlob

print("Enter your employee wellness statemet:  ")
phrase = input(">  ")
blob = TextBlob(phrase)
while blob.sentiment.polarity < 0.5:
    print("Be more positive please: ")
    phrase = input(">  ")
    blob = TextBlob(phrase)

print("Yayy thanks!")
