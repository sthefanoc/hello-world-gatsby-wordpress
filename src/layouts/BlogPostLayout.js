import React from "react";
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPostLayout = ({data}) => {
    const post = data.markdownRemark;
    return (
        <div>
          <Header></Header>
          <div className="container">
            <div className="row justify-content-md center">
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
          </div>
          <Footer></Footer>
        </div>
    )
};

export default BlogPostLayout;

export const query = graphql`
query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}){
        html
        frontmatter {
            title 
        }
    }
}
`
  