import React from 'react';
import "../../Assets/css/blog.css";
import{
	Link
}from 'react-router-dom';
function Blog() {
  return (

 <div>
 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1" style={{height:"5rem"}}>
</div>


{/*Start from here*/}

 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify bottom-scroll">
 <div>

<h1 className="blog-heading"><Link to="/Blog2" className="blog-hyperlinks">

White Hat Jr. and What it Stands For in Our Society

</Link></h1>

<h5 className="blog-date">Date: 04 October 2020</h5>
<p className="blog-content">
Recently there has been a lot of buzz around for this new startup called White Hat Jr.
For those who don't know, it is an online programming teaching platform aimed at children 
from ages 6 to 18...
<Link to="/Blog2" className="blog-hyperlinks" style={{fontWeight:"bold"}}>[Read More]</Link>
</p>
<span className="blog-tags">Tags: White Hat Jr., Careers, Computer Science</span>
</div>
</div>




{/*Add this for spacing*/}
 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1" style={{height:"5rem"}}>
</div>











 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify bottom-scroll">
 <div>

<h1 className="blog-heading"><Link to="/Blog1" className="blog-hyperlinks">

First Blog

</Link></h1>

<h5 className="blog-date">Date: 28 September 2020</h5>
<p className="blog-content">
This is my first blog. I don't know in which direction it will go. Plan is track my progress and
maybe share something I find interesting...
<Link to="/Blog1" className="blog-hyperlinks" style={{fontWeight:"bold"}}>[Read More]</Link>
</p>
<span className="blog-tags">Tags: First Blog</span>
</div>
</div>
















</div>
  );
}

export default Blog;
