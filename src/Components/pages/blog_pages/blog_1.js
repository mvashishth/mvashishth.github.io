import React from 'react';
{/*No need to import css*/}


function Blog1() {
  return (

 <div>
 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1" style={{height:"5rem"}}>
</div>


{/*Start from here*/}

 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify bottom-scroll">
 <div>

<h1 className="blog-heading">

First Blog
</h1>

<h5 className="blog-date">

Date: 28 September 2020

</h5>
<p className="blog-content">

This is my first blog. I don't know in which direction it will go. Plan is track my progress and
maybe share something I find interesting. Rest I hope I'll keep on updating this blog. It's a way out
of procrastination. Btw go checkout the repo for this website.
This website also serves another purpose. I'll try to showcase my design skills here and maybe my sense of
humour as well. Right now the goal is to complete the website of my fictional rocket company, learn game design
and learn WebAssembly. What is WebAssembly you ask. I don't know, that is why I want to learn it. I feel like
it'll be all the rage in a few years. Btw, here is a PSA. Comment your code kids. It is already hard to read
a well documented code. Don't make it anymore harder. I feel like writing a bit more but nothing is coming
in my mind right now and at this point I feel like I am just trying to reach the word limit of an essay.
Anyways, look around and let me know what I can improve. 

</p>
<span className="blog-tags">
Tags: First Post
</span>
</div>
</div>




</div>
  );
}

export default Blog1;
