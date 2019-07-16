##MongooseMask

Express Middleware to filter out Mongoose model attributes.
You pass an array of fields you do not want returned as part of
json or jsonp requests.

###Install
To install the latest official version, use NPM:

    npm install mongoosemask --save

To run the tests and see what is supported run either of the following commands

    npm test
    grunt

###Usage

    app.use(mongoosemask(['_id', '_privatefield']));

The '_id' and the '_privatefield' will then be removed from your json objects before sending to the
client.

    maksedObj = {
        //ALL fields except _id and _private
    };

You can also call the mask explicitly

    var maskedModel = mongomask.mask(model, ['_id']);

Additionally there is also a expose method which you can use to expose items instead of excluding them.

Mask all values on a given object except for those that
are explicitly exposed through the values array. The value
can be a String which will directly be a one-to-one mapping
for example

        _id -> _id will expose the _id mongoose value

or an object that maps keys to values
for example
    {_id:'id'}
    Will expose _id as id on the object.
    [ '_id', {_id:'id} ]
    Will expose both id and _id,
     {'nested.value.here' : 'exposed.at.any.level'}
     Will create a sub object {exposed:{at:{any:level:'valuehere'}}}]

    var exposedModel = mongoosemask.expose(model, [{_id:'id'}, {'email':'username'}, 'name', {'nested.value' : 'user.profile' }]);
     exposedModel = {
     id:12345,
     username:'my@email.com',
     name:'nodejs',
     user:{
            profile:'public ...'
          }
     }


###Notes
If you are using 'express-partial-response' you must place this middleware
AFTER you place the express-partial-response middleware as this middlware only works
with mongoose objects which the express-partial-response middleware does not return

###CHANGELOG

###0.0.5
Quick fix for nested objects.

###0.0.4
Added dot'.' notation support to expose/mask methods. The method will try to walk the
chain until it finds the value to expose/mask.

mask( ['this.sub.value'], model );
expose(['this.sub.value', { 'this.sub.value.two' : 'new.position.in.exposed.model' }], model );

If the expose method can not find the value then it will set it as undefined.

One limitation is that the dot notation can not traverse a sub array so model.[ {value:value}, {value:value}]
will not be able to mask the model.value of the two sub models.

###0.0.3
Added the ability to pass a function as the mask callback for the express middleware.
if you have a complex item that needs masking  you can pass a
callback funtion that will be invoked before your object is serialized to json.

 The callback must have the following signature.
 function(obj, mask, done);

     express.use(mongooseMask(function(value, mask, done){
             var masked = mask(value, ['_id', '__v']);
             if(masked.data){
                 masked.data = mask(value.data, ['_id', '__v']);
             }
             done(null, masked);
         }));


###0.0.6
Fixed NPE when passing nested objects

###0.0.2
Added support for calling mask directly.
Added expose() method as an inverse of mask.
 
###0.0.1
Initial release