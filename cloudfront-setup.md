1. visit you s3 and enable static website hosting 
2. create cloud front distribution
   1. select s3 bucket
   2. use OAI (Origin Access Identity)
   3. signed requests
3. update the bucket policy in s3
   1. one for readonly access to cloudfront
   2. one for backend to CRUD
4. create a ssl certificate from ACM (Amazon Certificate Manager)
   1. for *.edgenest.0xbuilder.in
   2. update domain records in Godaddy(or other if any)
   3. associate the certifacte in the cloudfront distribution
5. create a cloudfront function,
   1. publish the function
   2. create an association with distribution (view request)

User visits → react.edgenest.0xbuilder.in
  ↓
CloudFront (Origin Request)
  ↓
CloudFront function (map react(subdomain) to bucket/react/index.html)
  ↓
CloudFront fetches from S3 (using OAC)

// i have two options to create objects in s3(also called how do you map user request to s3 object)

1.
    i store the user files based on project id.
    so when user request for subdomain.edgenest.0xbuilder.in 
        i'll have to use a lambda function and
        I query it using a neon db, dynamo db or s3 json file and cache it.
    and then map it to s3/projectid
    so when user updates the domain, i update neondb, dynamodb or s3 json
2.
    i store the user objects directly like, s3/subdomain
    so when user requests for subdomain.edgenest.0xbuilder.in 
        i'll use a cloudfront function to map it s3 object
    so when user updates subdomain, i'll rename(update new and delete old) the folder to it

for now i'm gonna go with second option, cause it includes no cost(of db and lambda function), simple setup