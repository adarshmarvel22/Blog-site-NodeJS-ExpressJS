

const express=require('express');
const bodyParser=require('body-parser');
// const request = require('request')
const https = require('https');
const _ = require('lodash');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const port = 3000;

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare.Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.Scelerisque eleifend donec pretium vulputate sapien";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.Scelerisque eleifend donec pretium vulputate sapien.Scelerisque eleifend donec pretium vulputate sapien";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien.Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.Scelerisque eleifend donec pretium vulputate sapien";

let posts=[];

app.get('/', (req, res) => {

res.render("home",{StartingContent:homeStartingContent,posts:posts});

    })

      app.get('/about', (req, res) => {

        res.render("about",{aboutContent:aboutContent});
        })  

      app.get('/contact', (req, res) => {
      
        res.render("contact",{contactContent:contactContent});
       })
      
      app.get('/compose', (req, res) => {
      
        res.render("compose");
       })
       app.post('/compose', function (req, res) {

        const post={
          title:req.body.title,
          content:req.body.post
        };
        posts.push(post);
        res.redirect("/");
        })
        app.get('/posts/:postname', function (req, res) {
        
          const requestedtitle=_.lowerCase(req.params.postname)
          

          posts.forEach(myfunction);
          function myfunction(post){
            const storedtitle=_.lowerCase(post.title)
            if(storedtitle===requestedtitle){
             
              res.render("post",{
title:post.title,
content:post.content
              });
            }
            // res.send(req.params.postname)
          }
        })


app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      })

