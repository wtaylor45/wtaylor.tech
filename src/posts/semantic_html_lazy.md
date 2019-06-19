---
title: Be Lazier With Semantic HTML
path: /be-lazier-with-semantic-html
published: true
date: '2019-06-19'
---
_I know semantic HTML is old news, but here's me shouting from the rooftops that it's literally easier to use it than to not. Show this to haters should you come across them_
***

You may have heard of the term "Div Soup" before. That's when a website is built mostly out of hundreds of divs, often deeply nested within one another. If you want a good example, look at Twitter's source.

What's wrong with div soup? Well, there are three main problems.

1. Web crawlers will have a worse time indexing and ranking your site
2. Your code base is harder to read through and understand
3. Harder to account for and implement accessibility

Now, I'm not trying to attack Twitter. They clearly don't have SEO problems, the site works well from an accessibility standpoint, and I'll just assume they have a well-maintained code base. That's a credit to everyone who worked hard on the redesign and got it out the door.

However, I'm here to advocate for a different approach to the hard work Twitter put in. That approach is... **Laziness**.

## Semantic HTML

For those who aren't totally familiar with what I mean when I say "Semantic HTML", let me give a brief overview.

Semantic HTML elements released in HTML5 (and also some from 4) give meaning to the content on the page, agnostic to any style decisions. For example, the `section` element could technically be used everywhere you use a `div`. That's not the point of the `section` element, though. It serves as a way to group together thematically related content. The element itself has no impact on the way your site is visually displayed.

There are plenty of other elements, and I strongly encourage you to check out [this article]("https://guide.freecodecamp.org/html/html5-semantic-elements/") which gives you a bit of detail on each.

So how does this all relate to being lazy? 

It's lazy because creating or updating a site to use semantic elements doesn't require you to migrate to a new library or framework. It doesn't require some highly specialized knowledge or a total refactoring of your CSS on top of it. It's lazy because it can take a lot of the burden away off the developer when trying to make your site accessible for people using screen readers. 

It's lazy, and yet still comes with so many big advantages. Let's look at that list of pain points about div soup from earlier again.

### SEO

When a web crawler comes through to decide how it should rank your site, it uses a host of different strategies to understand what's happening on the page. One of the most basic strategies is using HTML tag names. 

For example, having your header, nav bar, and footer clearly marked with their corresponding HTML elements and your main site content under the `main` tag allows a crawler to quickly identify where it should look for the actual meat of your site. This is the same idea as using more well-known SEO tags like `title` and all of the `meta` variations.

SEO is kind of a black box. There's no concrete way to say, "Yes! Using HTML5 elements will shoot you up in the rankings!". It's well known, however, that web crawlers do use HTML tags to try and find out where to look. If you can make their lives easier, that has a good chance of helping your site out.

### Harder to read code base

A maintainable code base is a really, really hard to thing to achieve. That's why tools like ESLint and Prettier are so important. Format your code all you want, but if everything and its dog is a `div`, you'll probably have a headache before you understand what you're looking at.

Take a look at this beauty.

```html
<div class="header">
	<h1>Hello There</h1>
</div>
<div class="container">
	This is some of the more important content. This is a basic intro to it.
	<div>
		Now let's get into the content
		<div>
			<p>This is an example piece of content</p>
		</div>
		<div>
			<p>This is an example piece of content too</p>
		</div>
	</div>
</div>
<div>
	This is my footer.
	Here's some legal info.
</div>
```

This isn't very complicated to parse once you take a beat. At first glance, however, it can be really tough to understand. Almost everything is segmented off with a `div`, and our only other clues to what's going are the class names and the content itself.

So let's fix this in the laziest way possible. Let's just change the tag names on the elements to be semantic.

```html
<header class="header">
	<h1>Hello There</h1>
	<h2>This is the header!</h2>
</header>
<main class="container">
	This is some of the more important content. This is a basic intro to it.
	<section>
		Now let's get into the content
		<article>
			<p>This is an example piece of content</p>
		</article>
		<article>
			<p>This is an example piece of content too</p>
		</article>
	</section>
</main>
<footer>
	This is my footer.
	<small>Here's some legal info.</small>
</footer>
```

With just a few minor changes, this page becomes just a little bit easier to read. No libraries, no weird out of place comments, just pure HTML. Another benefit is that the page looks exactly the same as it did before (except the `small` element, that one changes font-size 😬).

Keep in mind this might not matter for an example on this small of a scale, but as your site grows, so will the value gained from leveraging semantic elements. This holds true even when you have your site well broken up into smaller components.

### Accessibility

Accessibility is something every developer needs to be aware of. A significant portion of users have disabilities and use some sort of assistive tech when browsing the web. 

There's a lot to consider when it comes to making your site accessible, (too much to cover here). Luckily, you can get away with a _little_ laziness just by using semantic HTML.

_DISCLAIMER: I'm not saying this is all you need to do for accessibility. It just helps._

To illustrate one of the big wins from using semantic HTML, let's look at the code from earlier's [accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree). The accessibility tree is a representation of the DOM that screen readers use to read to its users.

Here's the tree for one part of the non-semantic HTML:

![accessibility tree showing only a paragraph tag and some text within it](https://thepracticaldev.s3.amazonaws.com/i/e58v5q8roqakfwar8p5o.png)

Okay, that makes enough sense. It's a paragraph with some text in it. Now, what about the accessibility tree that uses semantic elements? Here's that tree for the exact same portion as above:

![accessibility tree showing main, section, article and paragraph tags](https://thepracticaldev.s3.amazonaws.com/i/enjvk4h6t3z466r1mnhb.png)
<figcaption>No, that's not just an un-cropped version of the first picture.</figcaption>

There's actually a lot more there! There's more context about what is present on the screen and what exactly the user is reading. 

Why the difference? 

The accessibility tree will leave out most divs since their purpose is usually stylistic rather than semantic. Therefore, there's no reason a screen reader should care about them.

You can, and **should**, add aria-label's to both examples to help the screen reader out. Doing so will include the div in the accessibility tree along with the label. We're talking about laziest wins we can get here, though. 

## Conclusion

Semantic HTML is not the holy elixir that will magically solve all your problems and cure all that ails you. Nor are `div` tags the devil. They have their use, and they should continue to be used in the proper way. Semantic HTML is, however, a super easy, almost-no-risk way to gain some easy wins for your site.

So whether you're starting up a new project or continuing to work on a monolithic legacy codebase, you can leverage semantic HTML with ease. 

So please do. Seriously. It's been official for like 5 years guys.
