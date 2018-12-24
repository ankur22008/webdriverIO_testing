const {Given, When, Then} = require('cucumber');


Given(/^the username "([^"]*)" should be present in the header$/, function (aaa)
{
    //  callback.pending();
    console.log('hahahahhah'+aaa);
    browser.url('https://google.com');
});

//

When(/^I login with password$/,  ()=>
{
    //  callback.pending();
    console.log('hahahahhah');
});

//

Given(/^the username should be present in the headerq$/, function ()
{
    //  callback.pending();
  //  console.log('hahahahhah'+aaa);
})