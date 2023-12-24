
import React from "react"
import happyPic from '/public/happy.jpg'
import sadPic from '/public/sad.jpg'
import angryPic from '/public/angry.webp'
import confusedPic from '/public/confused.webp'
import excitedPic from '/public/excited.png'

export const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'How I Feel',
        path: '/how-i-feel'
    },
]

export const emotions = [
    {
        name: 'happy',
        content: 'Happiness is a positive and pleasant emotion, ranging from contentment to intense joy. Moments of happiness may be triggered by positive life experiences or thoughts, but sometimes it may arise from no obvious cause. The level of happiness for longer periods of time is more strongly correlated with levels of life satisfaction, subjective well-being, flourishing and eudaimonia. In common usage, the word happy can be an appraisal of those measures themselves or as a shorthand for a "source" of happiness (for example, "find happiness in life" as in finding the meaning in life). As with any emotion, the precise definition of happiness has been a perennial debate in philosophy.',
        imagePath: happyPic,
        imageAlt: 'happy'
    },
    {
        name: 'sad',
        content: 'Sadness is an emotional pain associated with, or characterized by, feelings of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow. An individual experiencing sadness may become quiet or lethargic, and withdraw themselves from others. An example of severe sadness is depression, a mood which can be brought on by major depressive disorder or persistent depressive disorder. Crying can be an indication of sadness.',
        imagePath: sadPic,
        imageAlt: 'sad'
    },
    {
        name: 'angry',
        content: 'Anger, also known as wrath or rage, is an intense emotional state involving a strong uncomfortable and non-cooperative response to a perceived provocation, hurt or threat. A person experiencing anger will often experience physical effects, such as increased heart rate, elevated blood pressure, and increased levels of adrenaline and noradrenaline. Some view anger as an emotion which triggers part of the fight or flight response. Anger becomes the predominant feeling behaviorally, cognitively, and physiologically when a person makes the conscious choice to take action to immediately stop the threatening behavior of another outside force.',
        imagePath: angryPic,
        imageAlt: 'angry'
    },
    {
        name: 'confused',
        content: 'In medicine, confusion is the quality or state of being bewildered or unclear. The term "acute mental confusion"[1] is often used interchangeably with delirium[2] in the International Statistical Classification of Diseases and Related Health Problems and the Medical Subject Headings publications to describe the pathology. These refer to the loss of orientation, or the ability to place oneself correctly in the world by time, location and personal identity. Mental confusion is sometimes accompanied by disordered consciousness (the loss of linear thinking) and memory loss (the inability to correctly recall previous events or learn new material).[3]',
        imagePath: confusedPic,
        imageAlt: 'confused'
    },
    {
        name: 'excited',
        content: 'Excitement is an emotion characterized by an elevated state of arousal, one that is elicited by a positive or desirable stimulus. It can be accompanied by behaviors, such as increased heart rate and blood pressure, sometimes with increased levels of respiration or perspiration. Excitement is the opposite of boredom, and is similar to thrill, though the latter may be more intense and difficult to contain.',
        imagePath: excitedPic,
        imageAlt: 'excited'
    }
]