---
title: "Work that I am really proud of: Rekhta Dictionary Extension"
author: Bhavy Khatri
date: 2022-08-09 17:33:00 +0800
categories: [Blogging]
tags: [Open-Source, Chrome-Extension, Community]
---
![hindi](/assets/img/RekhtaDictionary/hindi-meaning-sample-card.png)

[Chrome extension link](https://chrome.google.com/webstore/detail/rekhta-dictionary-extensi/ohcjbngobnpliofaafihdefgoedjpbgh)
[Git hub repo link](https://github.com/bhavykhatri/RekhtaDictionaryExtension)

I am a big fan of reading urdu poetry from Rekhta. None of my days goes without reading a ghazal from Rekhta before sleeping, it helped in my good days and it helped me during my bad days as well. It is a pacifier for me, the calming agent which makes me more human, more receptive to other people’s emotions, impart more empathy in my behavior. And while reading and understanding the ghazal require an immense vocabulary, since you don’t always know the meaning of all words beforehand, Rekhta has made this task more easier by launching Rekhta Dictionary website. Rekhta Dictionary provides a wonderful access to meaning of the word in English Hindi and Urdu. But the real issue comes when we surf the internet, if there is an urdu word for which we don’t know the meaning then we have to go through this cumbersome process
-	Click the word
-	Copy it
-	Open a new tab, type Rekhta dictionary website
-	Wait for page to load
-	After the page load paste the word to access the meaning.
-	Wait for the word meaning page to load.
Not just it is tiring but if you are reading a web document with lot of urdu words then you loose the context of the document and instead . What if we can automate the whole process, which is user selects the word and gets the meaning right there. Well that’s exactly what this open source project tries to achieve. Let me show you the use case through an example

Saket searches for the query "urdu zabaan ki ibtida" on google but alas he doesn't know the meaning of "ibtida", he selects the word and a suggestion pops up for him whether he wants to search the meaning from rekhta

![Step 1 using extension](/assets/img/RekhtaDictionary/using-extension-step-1.png)

And after clicking it he gets the meaning at the webpage itself, he is very happy now. 
![step 2 using extension](/assets/img/RekhtaDictionary/using-extension-step-2.png)

Also the bottom popup allows him to know the meaning in Hindi, English and Urdu as well. 

![english](/assets/img/RekhtaDictionary/english-meaning-sample.png)

![urdu](/assets/img/RekhtaDictionary/urdu-meaning-sample-card.png)

When the user selects some text we should be able to provide him best result possible for urdu language.
Google results are very generic, urdu is a very rich language but that richness is not captured by the google results. For people interested in poetry other info like origin of word, phrases and idioms related to the word are also immensely helpful which are not provided by google dictionary result. Therefore, to satisfy the user needs of the urdu poetry lovers, my aim was to create an extension which gives them result as fast as possible. 

### Learning experience

-	**Consistency is more important than hard work**: Its not useful if you complete half of the work in one day and next day you feel so exhausted and demotivated that you don’t even want to pick up the work again. Rather doing 1% of work every day and shipping it on the 100th day is way more productive, because well you have at least ship the product. Always remember half work is equal to doing no work at all, because at the end you are not making any impact.

- **Getting out of comfort zone**: I am a developer so other domains like product management, design and marketing are not my cup of tea, also I am not that high on budget. Therefore there are things I have to manage by myself. Which means for sure I have to get out of comfort zone and learn those things. 

- **Joy of driving open source initiative**: The emotions that you feel while driving a community based initiative is top notch. There are so many successful open source projects signifying what humans can achieve when they come and work on a problem together even without capitalistic support. 

### How to contribute

This is an open source project which means a community driven initiative where anyone can contribute. There are plenty of opportunities for anyone who wants to improve the extension requiring knowledge not necessarily about programming and software but UX, design and even about marketing to improve the reach. It can be a great learning opportunity for you as well to improve on your skills. 
 
