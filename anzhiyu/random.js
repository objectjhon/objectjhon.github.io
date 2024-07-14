var posts=["posts/helloWorld.html","posts/algorithm1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };