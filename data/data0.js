jgivenReport.addScenarios([{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","name":"Order","scenarios":[{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"ordering_a_book_reduces_the_stock","description":"ordering a book reduces the stock","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"the following books are on stock","words":[{"value":"Given","isIntroWord":true},{"value":"the following books are on stock"},{"value":"id, name, author, stock, 1, The Hitchhiker\u0027s Guide to the Galaxy, Douglas Adams, 5, 2, Lord of the Rings, John Tolkien, 3","argumentInfo":{"argumentName":"books","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","stock"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","5"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":32569884},{"name":"a customer orders book","words":[{"value":"When","isIntroWord":true},{"value":"a customer orders book"},{"value":"1","argumentInfo":{"argumentName":"id","formattedValue":"1"}}],"status":"PASSED","durationInNanos":11092204},{"name":"the stock looks as follows","words":[{"value":"Then","isIntroWord":true},{"value":"the stock looks as follows"},{"value":"id, name, author, stock, 1, The Hitchhiker\u0027s Guide to the Galaxy, Douglas Adams, 4, 2, Lord of the Rings, John Tolkien, 3","argumentInfo":{"argumentName":"stock","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","stock"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","4"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":29526761}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":81050241}],"durationInNanos":81050241,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"ordering_a_book_reduces_the_stock_with_POJO","description":"ordering a book reduces the stock with POJO","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"the following books are on stock","words":[{"value":"Given","isIntroWord":true},{"value":"the following books are on stock"},{"value":"[com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@644cd580, com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@7054f9f1]","argumentInfo":{"argumentName":"books","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","count"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","5"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":6286155},{"name":"a customer orders book","words":[{"value":"When","isIntroWord":true},{"value":"a customer orders book"},{"value":"1","argumentInfo":{"argumentName":"id","formattedValue":"1"}}],"status":"PASSED","durationInNanos":1511483},{"name":"the stock looks as follows","words":[{"value":"Then","isIntroWord":true},{"value":"the stock looks as follows"},{"value":"[com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@4a57ea52, com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@51d8d39f]","argumentInfo":{"argumentName":"stock","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","count"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","4"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":1240681}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":10888818}],"durationInNanos":10888818,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_stock_is_only_reduced_when_possible","description":"the stock is only reduced when possible","tagIds":["FeatureOrder-Order","Story-3"],"explicitParameters":["initial","left","orderIsDone"],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":8239844,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":90013,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"3","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"3"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":364637},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1180740},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"2","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"2"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":87747},{"name":"a corresponding order exists for the customer","words":[{"value":"and","isIntroWord":true},{"value":"a corresponding order exists for the customer"}],"status":"PASSED","durationInNanos":7238800}],"explicitArguments":["3","2","true"],"derivedArguments":[],"success":true,"durationInNanos":22404539},{"caseNr":2,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":22665,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":20751,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"0","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":218011},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1112930},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":20811},{"name":"no corresponding order exists for the customer","words":[{"value":"and","isIntroWord":true},{"value":"no corresponding order exists for the customer"}],"status":"PASSED","durationInNanos":85798}],"explicitArguments":["0","0","false"],"derivedArguments":[],"success":true,"durationInNanos":6542137}],"durationInNanos":28946676,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_stock_is_reduced_when_a_book_is_ordered_derived","description":"the stock is reduced when a book is ordered derived","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":["initial"],"derivedParameters":["initial","numberOfItems"],"casesAsTable":true,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":20294,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":17975,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"1","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"1"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":249087},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1122428},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"parameterName":"numberOfItems","argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":1306330}],"explicitArguments":["1"],"derivedArguments":["1","0"],"success":true,"durationInNanos":6322438},{"caseNr":2,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":21510,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":18234,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"3","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"3"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":221637},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1074867},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"2","argumentInfo":{"parameterName":"numberOfItems","argumentName":"numberOfItems","formattedValue":"2"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":993893}],"explicitArguments":["3"],"derivedArguments":["3","2"],"success":true,"durationInNanos":5990814},{"caseNr":3,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":21218,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":18297,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"5","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"5"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":196200},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1130609},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"4","argumentInfo":{"parameterName":"numberOfItems","argumentName":"numberOfItems","formattedValue":"4"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":940600}],"explicitArguments":["5"],"derivedArguments":["5","4"],"success":true,"durationInNanos":5886513}],"durationInNanos":18199765,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"no_orders_are_created_when_ordering_a_book_that_is_out_of_stock","description":"no orders are created when ordering a book that is out of stock","tagIds":["FeatureOrder-Order","Story-3"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":20069,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":17948,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"0","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":203630},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1211908},{"name":"no corresponding order exists for the customer","words":[{"value":"Then","isIntroWord":true},{"value":"no corresponding order exists for the customer"}],"status":"PASSED","durationInNanos":20429},{"name":"there are $ items left on stock","words":[{"value":"and","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":199033}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":6230423}],"durationInNanos":6230423,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"single_POJOs_as_Table","description":"single POJOs as Table","tagIds":["FeatureOrder-Order","Story-4"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"the following book","words":[{"value":"Given","isIntroWord":true},{"value":"the following book"},{"value":"com.tngtech.jgiven.example.bookstore.entity.Book@66b51404","argumentInfo":{"argumentName":"book","dataTable":{"headerType":"VERTICAL","data":[["name","Lord of the Rings"],["author","John Tolkien"],["priceInEurCents","30"]]}}}],"status":"PASSED","durationInNanos":2459571}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":4422019}],"durationInNanos":4422019,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_stock_is_reduced_when_a_book_is_ordered","description":"the stock is reduced when a book is ordered","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":["initial","left"],"derivedParameters":["initial","left"],"casesAsTable":true,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":22816,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":19530,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"1","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"1"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":227663},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1115706},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":1022126}],"explicitArguments":["1","0"],"derivedArguments":["1","0"],"success":true,"durationInNanos":5935739},{"caseNr":2,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":23929,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":19739,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"3","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"3"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":249866},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1131073},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"2","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"2"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":957001}],"explicitArguments":["3","2"],"derivedArguments":["3","2"],"success":true,"durationInNanos":5826276},{"caseNr":3,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":23072,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":19496,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"5","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"5"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":244672},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1061415},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"4","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"4"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":974295}],"explicitArguments":["5","4"],"derivedArguments":["5","4"],"success":true,"durationInNanos":5855342}],"durationInNanos":17617357,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"customers_can_order_books","description":"customers can order books","tagIds":["FeatureOrder-Order","Story-1"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":24974,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book on stock","words":[{"value":"and","isIntroWord":true},{"value":"a book on stock"}],"status":"PASSED","durationInNanos":138325,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy with 10 items on stock\n"},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":1098403},{"name":"a corresponding order exists for the customer","words":[{"value":"Then","isIntroWord":true},{"value":"a corresponding order exists for the customer"}],"status":"PASSED","durationInNanos":916713}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":5761152}],"durationInNanos":5761152,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_customer_gets_an_email_when_ordering_a_book","description":"the customer gets an email when ordering a book","tagIds":["FeatureOrder-Order","FeatureEmail-Email","Story-5"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"SKIPPED","durationInNanos":0,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book on stock","words":[{"value":"and","isIntroWord":true},{"value":"a book on stock"}],"status":"SKIPPED","durationInNanos":0,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy with 10 items on stock\n"},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"SKIPPED","durationInNanos":0},{"name":"the customer gets an email","words":[{"value":"Then","isIntroWord":true},{"value":"the customer gets an email"}],"status":"SKIPPED","durationInNanos":0}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":8979182}],"durationInNanos":8979182,"executionStatus":"SCENARIO_PENDING"}]},]);