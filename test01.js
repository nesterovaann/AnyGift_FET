//That script automatic login to the HomePage and checks the value of a variable RESPONSE

casper.test.begin('Testing my website', function suite(test) {
  casper.start();
  casper.thenOpen('http://AnyGift.ru', function() {
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
    test.assertExists('div#logo', 'Header link to the homepage is present.');
    test.assertExists('form#user-login-form', 'Login form is present.');
  });
  casper.run(function() {
    test.done();
  });
});
