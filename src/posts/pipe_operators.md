---
title: "What are JavaScript Pipeline Operators?"
date: '2019-03-21'
path: /what-are-js-pipeline-operators
published: true
---

_Update: View live examples of the pipe operator on [CodePen](https://codepen.io/wtaylor45/pen/jJKXzv)_

JavaScript is a constantly evolving language as I'm sure you've already experienced. TC39, the technical committee that determines what features become a part of the JavaScript standard, is constantly receiving proposals that aim to further improve the language.

One such proposal is the **Pipeline Operator**. This operator is still in the early stages of the process that brings proposals from ideas to reality, but its availability in [Babel 7.3](https://github.com/babel/babel/releases/tag/v7.3.0) has allowed it to gain some notoriety. So let's dive into what the pipeline operator actually does.

Let me preface this all by saying I'm covering one of the [several proposals](https://github.com/tc39/proposal-pipeline-operator/wiki) that pertain to the pipeline operator. This falls under the fourth, the "smart pipeline operator".

_Disclaimer: None of the functionally outlined below is officially slated for an ECMAScript edition, as of March 2018_

## The Smart Pipeline Operator

Let's say you wanted to be able to perform a series of different string manipulations on a given string. Being an awesome functional programmer, you made each distinct manipulation its own function.

```javascript
function repeat(str) { return str+', '+str; }

function exclaim(str) { return str+'!'; }

function capitalize(str) { return str[0].toUpperCase(); }
```

Now all you have to do is pass a string to all of these functions and watch the magic happen.

```javascript
// Expected result: Hello World! Hello World!
let noPipe = repeat(exclaim(capitalize("hello world")));
// 🤮
```

That's not bad, but stuff like this can get really ugly and difficult to understand as it grows larger. 

Enter piping.

Using the pipeline operator (|>), we can rewrite the above code to achieve the same result.

```javascript
// Expected result: Hello World! Hello World!
let withPipe = "hello world"
    |> repeat
    |> exclaim
    |> capitalize;
// Pipe it up 🥰
```

With the pipe operator, you simply continue to call functions using `|>`, and whatever you use the pipeline operator on will be passed in as an argument.

This can make your code a lot easier to read as you know up front what is being acted upon, and the actions being taken on it read more like a story.

You may be asking now about using the pipeline operator with functions that have multiple arguments. Well, we can take care of those too! Let's take this function as an example.

```javascript
function add(x, y) { return x + y; }
```

And now let's use the pipeline operator to put it to work.

```javascript
// Expected result: 6
let sum = 2 |> add(#, 4);
```

The `#` character here serves as a reference to the value we are piping through to each function.

Okay, cool. So we can use this with single and multi-parameter functions and it makes us look _really_ cool too. But what if I don't want to write a function just to do whatever modification I'm trying to do? Why can't I just do some logic inline?

You can! Let's do the same addition again, but this time without calling the `add` function.

```javascript
// Expected result: 6
let sum = 2 |> # + 4;
```

Now obviously this seems a little silly to do with an example as simple as this, but as it grows in size and complexity this operator can really help your code stay readable.

The proposal, which you can [view on github](https://github.com/js-choi/proposal-smart-pipelines/) includes a lot of these examples and more. Some of the functionality outlined there, however, is not in the latest release of Babel. For instace, the use of `await` and `yield` in your pipeline. 

Hopefully you found this brief introduction to pipeline operators useful, and make sure to check out some of the other TC39 proposals that made it into Babel 7+! Also, CodePen now has Babel 7 support, so feel free to try this out on there.