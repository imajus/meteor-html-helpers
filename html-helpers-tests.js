import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
// import { Spacebars } from 'meteor/spacebars';
import { EJSON } from 'meteor/ejson';

import { TemplateTestCase } from './template-test-case.js';
import './html-helpers-tests.html';

Tinytest.add('majus:html-helpers - dump', (test) => {
  const stringify = (target) => EJSON.stringify(target, { indent: true });
  new TemplateTestCase(test, Template.testHtmlHelpersDump)
    .equal({ a: 1, b: 'Hello', c: null, d: { da: true } }, stringify(1) + stringify([1,'Hello',null,{da:true}]));
});

Tinytest.add('majus:html-helpers - activeClass', (test) => {
  new TemplateTestCase(test, Template.testHtmlHelpersActiveClass)
    .equal({ a: 'first', b: 'first' }, 'active')
    .equal({ a: 'second', b: 'first' }, '')
    .equal({ a: undefined, b: 'first', c: true }, 'active');
});

Tinytest.add('majus:html-helpers - numberClass', (test) => {
  new TemplateTestCase(test, Template.testHtmlHelpersNumberClass)
    .equal({ a: 100 }, 'positive')
    .equal({ a: '100' }, 'positive')
    .equal({ a: 0 }, 'zero')
    .equal({ a: -100 }, 'negative');
});

Tinytest.add('majus:html-helpers - selected & checked', (test) => {
  new TemplateTestCase(test, Template.testHtmlHelpersSelectedChecked)
    .equal({ a: 'first', b: 'first' }, 'selectedchecked')
    .equal({ a: 'second', b: 'first' }, '')
    .equal({ a: undefined, b: 'first', c: true }, 'selectedchecked');
});