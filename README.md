# YorRL - A URL shortener website

## Introduction

Hello! My name is Tarn. This is my personal project after I finished my WebDev course.
I did this to challenge me to do something bigger.
A learnt a lot from all the struggles through this project.

## How does it work ?

Basically, it takes the URL and the use SHA256 to hash the URL into unique code and then
store the code as the primary key and store the actual link as well in the database.

When user enter the URL and hit the submit button, it sends request to the server to 
hash the URL and store it to the database. Once the server finish, it sends back the 
unique code and the client displays that to the user.

When user try to access the shorten URL, the client sends request to server to fetch
the actual link from database by given unique code. Then once server is done, it displays
the anchor tag to the actual URL.

## Things that I think could be improved

1) I would like to do something to verify that the URL that user enters is an actual URL
not just some text.

2) I would like to better at styling.
