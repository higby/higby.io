---
title: CSS Bed
description: Classless CSS snippet gallery. A less ugly way to start a web page.
---

This is a collection of [classless](https://medium.com/@ubershmekel/the-next-css-frontier-classless-5e66f3f25fddcss) themes to use as starting points in web development.

[Source behind this one.](https://github.com/ubershmekel/cssbed)

## Why use classless themes?
- Responsive
- Good browser support
- Beautiful
- Small size ==(< a few kb)== - you don't waste bytes on every widget imaginable[^1]
- No learning curve - use HTML as you would normally instead of going to the docs to learn which class does what and having to fight the framework otherwise.
- [Original Hacker News Thread](https://news.ycombinator.com/item?id=19593866)

[^1]: I do have a few classed things though, but the main theme is classless

## Is it responsive?

*Heck yeah!* It doesn't include any fancy styles so it's easily mobile responsive. Just add the famous [responsive viewport tag](https://www.w3schools.com/css/css_rwd_viewport.asp) and you'll be good to go!

In fact, try resizing this page. Everything flows super nicely as you'll see.

## Element demos

This is supposed to be a demo page so we need more elements![^2]

[^2]: It works pretty well TBH

### Code

Below is some code, you can copy it with <kbd>Ctrl-C</kbd>. Did you know, `alert(1)` can show an alert in JavaScript!

```
// This logs a message to the console
console.log('Hello, world!')
```

### Other

Here's a horizontal rule and image because I don't know where else to put them.

![Example Kitten](https://www.shera.gay/gay.jpg "Caption as well!")

---

This is a <button>button</button> or a more formal <button>OK</button>
> This is a blockquote
> -- Alador Blight

```
  Good old preformatted text, no code at all

   |\_/|        ****************************    (\_/)
  / @ @ \       *  "Purrrfectly pleasant"  *   (='.'=)
 ( > º < )      *       Poppy Prinz        *   (")_(")
  `ddxbb´       *   (pprinz@example.com)   *
  /  O  \       ****************************
```

And here's a nicely marked up table!

|    Name    | Quantity |    Price    |
|:----------:|:--------:|:-----------:|
| Godzilla   | 2        | $299.99     |
| Mozilla    | 10       | $100,000.00 |
| Quesadilla | 1        | $2.22       |

### Typography

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum hendrerit velit, quis ullamcorper sem congue ac. Quisque id magna rhoncus, sodales massa vel, vestibulum elit. Duis ornare accumsan egestas. Proin maximus lacus interdum leo molestie convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut iaculis risus eu felis feugiat, eu mollis neque elementum. Donec interdum, nisl id dignissim iaculis, felis dui aliquet dui, non fermentum velit lectus ac quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. **This is strong,** this is normal, **this is just bold,** *and this is emphasized!* And heck, [here](#)

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

Links with `mailto:`, `tel:`, `sms:` addresses might be styled...

# Heading 1

A paragraph `<p>` of lorem ipsum after the heading. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

## Heading 2

A paragraph `<p>` of lorem ipsum after the heading. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

### Heading 3

A paragraph `<p>` of lorem ipsum after the heading. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

#### Heading 4

A paragraph `<p>` of lorem ipsum after the heading. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

##### Heading 5

A paragraph `<p>` of lorem ipsum after the heading. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

###### Heading 6

A paragraph `<p>` of lorem ipsum after the heading. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

### Form elements

<div>
<form onsubmit="return false;">
  <legend>Legend</legend>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <label for='email'>Email<input type='email' name='email' id='email' placeholder='john.doe@gmail.com'></label>
  <label for='id'>User id (read only)<input readonly type="text" name='id' id='id' value='04D6H89Z'></label>
  <label for='disabled'>Random disabled input<input disabled type="text" name='disabled' id='disabled' placeholder='Because why not?'></label>
  <fieldset>
    <label for='about'>About me<textarea name='about' id='about' placeholder='I am a textarea...'></textarea></label>
  </fieldset>
  <label for="name">
    Your Name
    <p><i>Or nickname</i></p>
    <input name="Name" id="name" type="text" placeholder="Branden" />
  </label>
  <label for="animal">Favorite Animal<input name="Animal" id="animal" type="text" placeholder="Puppy" /></label>
  <label for="color">Favorite Color<input name="Color" id="color" type="text" placeholder="#965ee5" /></label>
  <label for="url">Do you have your own website? Blah blah blah<input name="Site" id="url" type="url" placeholder="https://skeletor.gay" /></label>
  <fieldset>
    <legend>Radio Boxes</legend>
    <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <div>
      <input type='radio' id='john' name='drone' value='john' checked>
      <label for='john'>John Doe</label>
    </div>
    <div>
      <input type='radio' id='jane' name='drone' value='jane' checked>
      <label for='jane'>Jane Doe</label>
    </div>
    <div>
      <input type='radio' id='johnny' name='drone' value='johnny' checked>
      <label for='johnny'>Johnny Doe</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>Checkboxes</legend>
    <div>
      <input type='checkbox' name='unchecked' id='unchecked'>
      <label for='unchecked'>Unchecked</label>
    </div>
    <div>
      <input type='checkbox' name='remember' id='remember' checked>
      <label for='remember'>Remember me</label>
    </div>
  </fieldset>
  <input type='submit'>
  <input type='submit' value="Disabled" disabled>
</form>
</div>
