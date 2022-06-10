##Due to unforseen issues, we had to delete the repository and start over again, which is why we do not have commits in here dating back to the beginning of the project.

# ICBINP

The idea is to model RPG games and have the ability to create new characters with traits, weapons, names and so forth. The characters live in a pineapple-farming village which is the setting for the story. Once created, each character can be sent out on a choose-your-own-adventure-style story quest that will have an effect on the character’s attributes..
Our backend database will contain each user’s character information and details, and the frontend will be the place that the user can access CRUD functionalities.

#Motivation

We all enjoy the fantasy world of Dungeons & Dragons, along with the Choose Your Own Adventure stories that date back to books in the 80s. We decided to make our adventure based on Pineapples & Potatoes as a tip of the hat to instructors Mike and Stack and their use of them in class.

##Wireframe

https://drive.google.com/drive/folders/1IgO2T9y0CgJNYYzFIIrxh1lNy1WTJ5bK

##MVP and Schedule

https://docs.google.com/document/d/1JT_PdoFY4G1tsSps2wzIeTHLrOhA8kWtL5MaBhpKRFo/edit

##Are you ready for an adventure?

<img width="563" alt="Screen Shot 2022-06-09 at 7 29 57 PM" src="https://user-images.githubusercontent.com/102939918/172979669-7faeec37-aa0e-4349-a4b2-a622cc701015.png">

<img width="504" alt="Screen Shot 2022-06-09 at 7 29 32 PM" src="https://user-images.githubusercontent.com/102939918/172979809-785f3f2e-c8b2-4908-b16c-7b2bbd1eb623.png">

<img width="646" alt="Screen Shot 2022-06-09 at 7 32 03 PM" src="https://user-images.githubusercontent.com/102939918/172979554-8d96d312-be92-4168-b6f9-ed5ed3927223.png">

##Languages and Frameworks Used

Node.js, Express, React, JavaScript, HTML, CSS, Axios

##Code Example

This is a particular favorite piece of code of David's because it allows Characters to be organized better and be assigned to the desired User.

```
router.post('/', (req, res) => {
    console.log(req.body)
    Character.create({
        "characterName": req.body.newCharacter.characterName,
        "class": req.body.newCharacter.characterClass,
        "alignment": req.body.newCharacter.alignment,
        "weapon": req.body.newCharacter.weapon,
    })
    .then(newCharacter => {
        console.log(newCharacter)
        User.findByIdAndUpdate(req.body.id, {$push: {characters: newCharacter._id }}, {new: true}).populate({path: 'characters'})
        .then(user => {
            console.log(user)
            res.json(user)
        })
    })
    })
```

##How to Use

You'll start off creating a User Name. Once you have a User Name, you'll be directed to Create a Character, to which you'll add a Class, an Alignment and a Weapon. From there, you'll head on to your first Adventure. Each screen will offer two choices, with each choice taking you to two more choices. Enjoy your travels!

##Credit

Background image found on https://pixabay.com/images/search/fantasy/, posted by Mysticartdesign. (Pixaby license allows free use: https://pixabay.com/service/license/)