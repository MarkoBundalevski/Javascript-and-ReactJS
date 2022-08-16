import React, { Component } from "react";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "News title",
    };
    const newsUrl =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-05-21&sortBy=publishedAt&apiKey=c732bb2830814f86acc7d0ef2f8dcdde";

    const fetchNews = (url) => {
      url = newsUrl;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data.articles);
          this.setState(data);
        });
    };

    fetchNews();
  }
  render() {
    return (
      <div>
        <h1>{this.setState({title: data.articles})}</h1>
      </div>
    );
  }
}

export default News;
