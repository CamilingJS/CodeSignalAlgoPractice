from textblob import TextBlob
import pyttsx3

engine = pyttsx3.init()
engine.say("Hello Employee Number 45621. We hpe you had a great day of work.")
engine.runAndWait()

engine.say("Enter your employee wellness statement:  ")
engine.runAndWait()
phrase = input(">  ")
blob = TextBlob(phrase)
engine.say({phrase})
engine.runAndWait()
while blob.sentiment.polarity < 0.5:
    engine.say("Be more positive please: ")
    phrase = input(">  ")
    blob = TextBlob(phrase)

engine.say("Yayy thanks! You can now go home!")
engine.runAndWait()
