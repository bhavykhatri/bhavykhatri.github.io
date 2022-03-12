---
title: "Learnings from Fixing Build Failures of a Framework at Microsoft"
author: Bhavy Khatri
date: 2021-11-28 11:33:00 +0800
categories: [Blogging, Work]
tags: [career]
---

> What does not kill me makes me stronger - Nietzsche

I had  to ship a feature which required change in the codebase which no one in my team worked on for last 2 years. Worse they merged the PR without deploying it. Weird huh? Well it was because there was no automatic CI and CD you have to do the changes create a nuget package and upload to a production feed. Then merge the PR. But our geniuses merged the PR without even verifying it and didn’t deploy. These were Microsoft specific framework related errors whose solution is not publicly available. Also, framework team was also not very super helpful so it complicated solving the problem much more. 

#### What were the learnings?

- By talking with people  well a lot of people: stack overflow can only help to an extent. You must do your homework well to explain the kind of issue that you are facing. Then only people can help. In other words, you can get help only when you know exactly what you trying to get help for.
- Being prepared for issues: Bugs and errors are inevitable, they will come in one form or another. Working on xap it was coming one after another. At first I felt panicked “Oh man, how am I going to resolve this?”, but you need to keep going. You need to believe that there is a solution for this bug only that you don’t know it yet but you need to figure out ways to resolve this. The psychological resilience is of paramout importance in software engineering. 
- Read the documentation: Reading documentation is boring and not interesting but this is necessary. You can save hours if you have read documentation and know why things are failing. 
- Read the error message carefully: Error messages are mostly daunting but it is important to read them carefully. Important piece of failures normally lie at the very top or very bottom of the message. Sometimes these error messages give errors for some framework related files which you are not even aware of exists. But when you read it carefully it do give pointer in right direction. 

