'use strict';

const expect = require('chai').expect;
const { go, test, checkbox, click } = require('testim');

test("checkboxes", async () => {
    await alert("checked");

    await click('input[type=checkbox]')
    let isChecked = await checkbox('input[type=checkbox]');
    expect(isChecked).to.equal(true);

    await click('input[type=checkbox]')
    isChecked = await checkbox('input[type=checkbox]');
    expect(isChecked).to.equal(false);
});