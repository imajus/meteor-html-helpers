# Overview

Some Meteor Blaze helpers for HTML manupulations.

# Installation

```sh
meteor add imajus:html-helpers
```

# Related packages

* [imajus:common-helpers](https://github.com/imajus/meteor-common-helpers)
* [imajus:string-helpers](https://github.com/imajus/meteor-string-helpers)
* [imajus:bootstrap-helpers](https://github.com/imajus/meteor-bootstrap-helpers)

# Contents

Package provides following global Blaze helpers:

* `dump(...args)` – Returns JSON-fied `args` as a string.
```html
<pre>{{dump currentUser currentRoute}}</pre>
```
* `activeClass(current, expected, initial)` – When `current` equals `expected`, returns `'active'` string literal. If `initial` value is `true`, helper returns `'active'` for empty `current` value as well. To be used in lists-like interactive UI components, like menus.
For more general helper which you can use to return other string literal rather than `'active'`, see `when` from [imajus:common-helpers](https://github.com/imajus/meteor-common-helpers).
```html
<ul class="menu">
  <li class="{{activeClass currentRoute 'home' true}}">Home</li>
  <li class="{{activeClass currentRoute 'contact'}}">Contact Us</li>
  ...
</ul>
```
* `numberClass(num)` – Returns one of `'positive'`, `'negative'` or `'zero'` literal values depending on `num` value.
* `selected(current, expected, initial)` – Adds `selected` attribute when `current` equals `expected`. If `initial` value is `true`, helpers will also adds attribute in case of `current` is empty.
```html
<select>
  <option {{selected value 'first' true}}>First</select>
  <option {{selected value 'second'}}>Second</select>
</select>
```
* `checked(current, expected, initial)` – Adds `checked` attribute when `current` equals `expected`. If `initial` value is `true`, helpers will also adds attribute in case of `current` is empty.
```html
<input type="radio" {{checked value 'first' true}}> First
<input type="radio" {{checked value 'second'}}> Second
```
* `disabled(current, expected, initial)` – Adds `disabled` attribute when `current` equals `expected`. If `initial` value is `true`, helpers will also adds attribute in case of `current` is empty.
```html
<button {{disabled value 'first' true}}>First</button>
<button {{disabled value 'second'}}>Second</button>
```