import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="header">
          <ul>
            <li><a href="/home/" className="button primaryButton">Home</a></li>
            <li><a href="/technology/">Technology</a></li>
            <li><a href="/creativity/">Creativity</a></li>
            <li><a href="/entrepreneurship/">Entrepreneurship</a></li>
            <li><a href="/self/">Self</a></li>
            <li><a href="/culture/">Culture</a></li>
            <li><a href="/digital_design/">Digital design</a></li>
            <li><a href="/popular/">Popular</a></li>
            <li><a href="/politics/">Politics</a></li>
            <li><a href="/more/">More</a></li>
            <li><a href="/getstarted/" className="button secondaryButton">Get started</a></li>
          </ul>
        </div>
        <div className="mainStory">
          <div className="mainStoryDescription">
            <h1>Interesting ideas that set your mind in motion.</h1>
            <p>Hear directly from the people who know it best. From tech to
               politics to creativity and more -- whatever your interest, we´ve
               got you covered.
            </p>
            <ul>
              <li className="button blackButton">Get started</li>
              <li className="button whiteButton">Learn more</li>
            </ul>
          </div>
          <div className="mainStoryImageContainer"></div>
        </div>

        <div className="mainContent">
          <div className="miniStory firstStory">
            <div className="miniStoryImage puff1"></div>
            <div className="miniStoryContent firstStory">
              <div>
                <h2>The boy who tamed the sea</h2>
                <p>At 5:30 am, on any morning I can handle it,
                  I´ll slip out of the dark mouth of my covers
                  and creep through the silver lig...
                </p>
              </div>
              <div className="author">
                <div className="imageAuthor author1"></div>
                <div className="authorName">
                  <span>Carl Moore</span>
                  <p>Oct 27   8 min read</p>
                </div>
                <div className="bookmarkSign"></div>
              </div>
          </div>
          </div>

          <div className="miniStory firstStory">
            <div className="miniStoryImage puff2"></div>
            <div className="miniStoryContent firstStory">
              <div>
                <h2>The Role of Human Emotions in the Future of Transport</h2>
                <p>Getting from A to B is about to feel very different
                </p>
              </div>
              <div className="author">
                <div className="imageAuthor author2"></div>
                <div className="authorName">
                  <span>Ben Bland</span>
                  <p>Nov 1   7 min read</p>
                </div>
                <div className="bookmarkSign"></div>
              </div>
          </div>
          </div>
          <div className="miniStory firstStory">
            <div className="miniStoryImage puff4"></div>
            <div className="miniStoryContent firstStory">
              <div>
                <h2>The March of Losers</h2>
                <p>
                  Around the world, the victims are becoming the abusers,
                    and Donald Trump is their king
                </p>
              </div>
              <div className="author">
                <div className="imageAuthor author4"></div>
                <div className="authorName">
                  <span>Lindsey Smith</span>
                  <p>Nov 9  31 min read</p>
                </div>
                <div className="bookmarkSign"></div>
              </div>
            </div>
          </div>
          <div className="miniStory firstStory">
            <div className="miniStoryImage puff3"></div>
            <div className="miniStoryContent firstStory">
              <div>
                <h2>The burning season</h2>
                <p>
                  You cannot save everything when the fires
                    come to Northern California
                </p>
              </div>
              <div className="author">
                <div className="imageAuthor author3"></div>
                <div className="authorName">
                  <span>Henry Wismayer</span>
                  <p>Nov 10   8 min read</p>
                </div>
                <div className="bookmarkSign"></div>
              </div>
            </div>
          </div>

          </div>
        </div>
    )
  }

}

export default App
