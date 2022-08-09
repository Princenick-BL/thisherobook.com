import Head from 'next/head'

export const config = { amp: true };

export default function Home() {

  const style = { 
    borderRadius : "15px",
    maxWidth:"calc( 100% - 6px )",
    backgroundColor:"#fff",
    border : "3px solid #f4f4f4f4",
    overflow : "hidden"
  }

  const anims = [
    "fade-in",
    "fly-in-bottom",
    "fly-in-left",
    "fly-in-right",
    "fly-in-top",
    "pulse",
  ]

  function randomElement(items){
    return items[Math.floor(Math.random()*items.length)];
  }

  return (
    <>
      <Head>
        <title>Example AMP Story in Next.js</title>
        <meta name="viewport" content="width=device-width"/>
        <meta name="theme-color" content="#000" />
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
        <script
          async
          key="amp-video"
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""
        />
       
      </Head>

      <amp-story
        standalone=""
        title="Stories in AMP - Hello World"
        publisher="AMP Project"
        publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
        poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
        poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
        poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
        style= {{"background-color":"#000"}}
      >
        {/* <!-- A story consists of one or more pages. Each page is declared by an `amp-story-page` element. Pages are designed by layering videos, images and text. Here we have a page that uses two layers. One layer filling the available space with an image and one text layer that shows a heading. --> */}
        <amp-story-page id="page-1" style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img  id="image1"
              animate-in="fade-in"
              src="https://picsum.photos/450/720"
              width={450}
              height={720}
              layout="responsive"
              alt="..."
              style={{
                position : "absolute", 
                left : "0",
              }}
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <div
              animate-in="fly-in-bottom"
              style = {{
                height: "max-content",
                position : "absolute",
                maxWidth : "100%",
                maxHeight:"30%",
                top : "0",
                // backgroundColor : "#fff",
                color : "#fff",
                padding : "1rem",
                paddingBottom : "60px",
              }}
            >
              <h1
                style={{
                  // fontFamily: "Dancing Script, cursive",
                  fontSize : "1.5rem",
                  textAlign : "center",
                  lineHeight : "2",
                  backgroundImage: "linear-gradient(to right, #462523 0, #cb9b51 22%, #cb9b51 45%, #cb9b51 50%, #cfb844 55%, #cb9b51 78%, #462523 100%)",
                  "background-clip": "text",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                  "font-family": "Dancing Script ,cursive",

                }}
               >LuxeStoryBlog</h1>
            </div>
          </amp-story-grid-layer>
          
          <amp-story-grid-layer template="vertical">
            <amp-img  id="image1"
              animate-in="fade-in"
              animate-in-delay="1s"
              animate-in-duration="1s"
              src={"/img/calc.webp"}
              width={450}
              height={720}
              layout="responsive"
              alt="..."
              style={{
                position : "absolute", 
                left : "0",
                bottom : "0"
              }}
            ></amp-img>
          </amp-story-grid-layer>
          
          <amp-story-grid-layer template="vertical">
            <div
              animate-in="fly-in-bottom"
              style = {{
                height: "max-content",
                position : "absolute",
                maxWidth : "100%",
                maxHeight:"30%",
                bottom : "0",
                // backgroundColor : "#fff",
                color : "#fff",
                padding : "1rem",
                paddingBottom : "60px",
              }}
            >
              <h1
                style={{
                  // fontFamily: "Dancing Script, cursive",
                  fontSize : "1.5rem",
                  textAlign : "left",
                  lineHeight : "2"
                }}
               >FERRARI 812 GTS: LE RETOUR DE LA SPIDER V12</h1>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
        <amp-story-page id="page-2"  style = {style}>
          <amp-story-grid-layer template="vertical">
            <amp-img
              src="https://picsum.photos/1024/720"
              animate-in="fly-in-top"
              width="400"
              height="720"
              layout="responsive"
              style={{
                position:"absolute",
                width : "160%",
                height : "60%",

              }}
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in={randomElement(anims) || "fly-in-bottom"}
              grid-area="lower-third"
              style={{
                display:"flex",
                flexDirection : "column",
                alignItems : "center",
                justifyContent : "center",

              }}
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>            
        
        </amp-story-page>

        {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
        <amp-story-page id="page-3"  style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="page-4"  style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="page-5"  style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="page-6"  style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="page-7"  style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="page-8"  style = {style}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>mon

        {/* <!-- Stories can use predefined layouts to style the page. Here we're using the `thirds` template. For an overview about the available layouts take a look at the [layouts sample](/documentation/examples/style-layout/amp_story_layouts/). --> */}
        <amp-story-page id="page-9"  style = {style}>
          <amp-story-grid-layer template="thirds">
            <amp-img
              grid-area="upper-third"
              src="https://amp.dev/static/samples/img/story_thirds_1.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
            <amp-img
              grid-area="middle-third"
              src="https://amp.dev/static/samples/img/story_thirds_2.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
            <amp-img
              grid-area="lower-third"
              src="https://amp.dev/static/samples/img/story_thirds_3.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
        <amp-story-bookend
          src="https://amp.dev/static/samples/json/bookend.json"
          layout="nodisplay"
        />
      </amp-story>
    </>
  )
}