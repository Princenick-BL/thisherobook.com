import React from 'react'
import Head from 'next/head'


export default function BlogHead({poster,publishedAt,description,title,location}) {

  return (
    <Head>
      <meta name="theme-color" content="#ffffff"/>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={location}/>
      <link rel="preload" href={poster} as="image"/>
      <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com/" crossOrigin=""/>
      <link rel="apple-touch-icon" href="/favicon.ico"></link>
      <link href={`https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=optional`} rel="stylesheet"/>
      <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"  ></script>
      <style
        amp-custom=""
        dangerouslySetInnerHTML={{
          __html: `
          html {
            font-family: sans-serif;
            line-height: 1.15;
              -webkit-text-size-adjust: 100%;
              
          }
          body {
              margin: 0;
              color: rgba(0,0,0,0.85);
              font-size: 16px;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
              font-variant: tabular-nums;
              line-height: 2 ;
              background-color: #ccc;
              font-feature-settings:tnum,tnum;
          }
          article,
          aside,
          footer,
          header,
          nav,
          section {
              display: block;
          }
          h1 {
              font-size: 2em;
              margin: 0.67em 0;
          }
          figcaption,
          figure,
          main {
              display: block;
          }
          figure {
              margin: 1em 40px;
          }
          hr {
              box-sizing: content-box;
              height: 0px;
              overflow: visible;
          }
          pre {
              font-family: monospace,monospace;
              font-size: 1em;
          }
          a {
              background-color: transparent;
              -webkit-text-decoration-skip: objects;
          }
          a:active,
          a:hover {
              outline-width: 0;
          }
          abbr[title] {
              border-bottom: none;
              text-decoration: underline;
              text-decoration: underline dotted;
          }
          b,
          strong {
              font-weight: inherit;
              font-weight: bolder;
          }
          code,
          kbd,
          samp {
              font-family: monospace,monospace;
              font-size: 1em;
          }
          dfn {
              font-style: italic;
          }
          mark {
              background-color: #ff0;
              color: #000;
          }
          small {
              font-size: 80%;
          }
          sub,
          sup {
              font-size: 75%;
              line-height: 0;
              position: relative;
              vertical-align: baseline;
          }
          sub {
              bottom: -0.25em;
          }
          sup {
              top: -0.5em;
          }
          audio,
          video {
              display: inline-block;
          }
          audio:not([controls]) {
              display: none;
              height: 0;
          }
          img {
              border-style: none;
          }
          svg:not(:root) {
              overflow: hidden;
          }
          
          fieldset {
              border: 1px solid silver;
              margin: 0 2px;
              padding: 0.35em 0.625em 0.75em;
          }
          legend {
              box-sizing: border-box;
              color: inherit;
              display: table;
              max-width: 100%;
              padding: 0;
              white-space: normal;
          }

          
          details,
          menu {
              display: block;
          }
          summary {
              display: list-item;
          }
          canvas {
              display: inline-block;
          }
          [hidden],
          template {
              display: none;
          }
          .h00 {
              font-size: 4rem;
          }
          .h0,
          .h1 {
              font-size: 3rem;
          }
          .h2 {
              font-size: 2rem;
          }
          .h3 {
              font-size: 1.5rem;
          }
          .h4 {
              font-size: 1.125rem;
          }
          .h5 {
              font-size: 0.875rem;
          }
          .h6 {
              font-size: 0.75rem;
          }
          .font-family-inherit {
              font-family: inherit;
          }
          .font-size-inherit {
              font-size: inherit;
          }
          .text-decoration-none {
              text-decoration: none;
          }
          .bold {
              font-weight: 700;
          }
          .regular {
              font-weight: 400;
          }
          .italic {
              font-style: italic;
          }
          .caps {
              text-transform: uppercase;
              letter-spacing: 0.2em;
          }
          .left-align {
              text-align: left;
          }
          .center {
              text-align: center;
          }
          .right-align {
              text-align: right;
          }
          .justify {
              text-align: justify;
          }
          .nowrap {
              white-space: nowrap;
          }
          .break-word {
              word-wrap: break-word;
          }
          .line-height-1 {
              line-height: 1rem;
          }
          .line-height-2 {
              line-height: 1.125rem;
          }
          .line-height-3 {
              line-height: 1.5rem;
          }
          .line-height-4 {
              line-height: 2rem;
          }
          .list-style-none {
              list-style: none;
          }
          .underline {
              text-decoration: underline;
          }
          .truncate {
              max-width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
          }
          .list-reset {
              list-style: none;
              padding-left: 0;
          }
          .inline {
              display: inline;
          }
          .block {
              display: block;
          }
          .inline-block {
              display: inline-block;
          }
          .table {
              display: table;
          }
          .table-cell {
              display: table-cell;
          }
          .overflow-hidden {
              overflow: hidden;
          }
          .overflow-scroll {
              overflow: scroll;
          }
          .overflow-auto {
              overflow: auto;
          }
          .clearfix:after,
          .clearfix:before {
              display: table;
          }
          .clearfix:after {
              clear: both;
          }
          .left {
              float: left;
          }
          .right {
              float: right;
          }
          .fit {
              max-width: 100%;
          }
          .max-width-1 {
              max-width: 24rem;
          }
          .max-width-2 {
              max-width: 32rem;
          }
          .max-width-3 {
              max-width: 48rem;
          }
          .max-width-4 {
              max-width: 64rem;
          }
          .border-box {
              box-sizing: border-box;
          }
          .align-baseline {
              vertical-align: baseline;
          }
          .align-top {
              vertical-align: top;
          }
          .align-middle {
              vertical-align: middle;
          }
          .align-bottom {
              vertical-align: bottom;
          }
          .m0 {
              margin: 0;
          }
          .mt0 {
              margin-top: 0;
          }
          .mr0 {
              margin-right: 0;
          }
          .mb0 {
              margin-bottom: 0;
          }
          .ml0,
          .mx0 {
              margin-left: 0;
          }
          .mx0 {
              margin-right: 0;
          }
          .my0 {
              margin-top: 0;
              margin-bottom: 0;
          }
          .m1 {
              margin: 0.5rem;
          }
          .mt1 {
              margin-top: 0.5rem;
          }
          .mr1 {
              margin-right: 0.5rem;
          }
          .mb1 {
              margin-bottom: 0.5rem;

          }
          .ml1,
          .mx1 {
              margin-left: 0.5rem;
          }
          .mx1 {
              margin-right: 0.5rem;
          }
          .my1 {
              margin-top: 0.5rem;
              margin-bottom: 2rem;
          }
          .m2 {
              margin: 1rem;
          }
          .mt2 {
              margin-top: 1rem;
          }
          .mr2 {
              margin-right: 1rem;
          }
          .mb2 {
              margin-bottom: 1rem;
          }
          .ml2,
          .mx2 {
              margin-left: 1rem;
          }
          .mx2 {
              margin-right: 1rem;
          }
          .my2 {
              margin-top: 1rem;
              margin-bottom: 1rem;
          }
          .m3 {
              margin: 1.5rem;
          }
          .mt3 {
              margin-top: 1.5rem;
          }
          .mr3 {
              margin-right: 1.5rem;
          }
          .mb3 {
              margin-bottom: 1.5rem;
          }
          .ml3,
          .mx3 {
              margin-left: 1.5rem;
          }
          .mx3 {
              margin-right: 1.5rem;
          }
          .my3 {
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
          }
          .m4 {
              margin: 2rem;
          }
          .mt4 {
              margin-top: 2rem;
          }
          .mr4 {
              margin-right: 2rem;
          }
          .mb4 {
              margin-bottom: 2rem;
          }
          .ml4,
          .mx4 {
              margin-left: 2rem;
          }
          .mx4 {
              margin-right: 2rem;
          }
          .my4 {
              margin-top: 2rem;
              margin-bottom: 2rem;
          }
          .mxn1 {
              margin-left: calc(0.5rem * -1);
              margin-right: calc(0.5rem * -1);
          }
          .mxn2 {
              margin-left: calc(1rem * -1);
              margin-right: calc(1rem * -1);
          }
          .mxn3 {
              margin-left: calc(1.5rem * -1);
              margin-right: calc(1.5rem * -1);
          }
          .mxn4 {
              margin-left: calc(2rem * -1);
              margin-right: calc(2rem * -1);
          }
          .m-auto {
              margin: auto;
          }
          .mt-auto {
              margin-top: auto;
          }
          .mr-auto {
              margin-right: auto;
          }
          .mb-auto {
              margin-bottom: auto;
          }
          .ml-auto,
          .mx-auto {
              margin-left: auto;
          }
          .mx-auto {
              margin-right: auto;
          }
          .my-auto {
              margin-top: auto;
              margin-bottom: auto;
          }
          .p0 {
              padding: 0;
          }
          .pt0 {
              padding-top: 0;
          }
          .pr0 {
              padding-right: 0;
          }
          .pb0 {
              padding-bottom: 0;
          }
          .pl0,
          .px0 {
              padding-left: 0;
          }
          .px0 {
              padding-right: 0;
          }
          .py0 {
              padding-top: 0;
              padding-bottom: 0;
          }
          .p1 {
              padding: 0.5rem;
          }
          .pt1 {
              padding-top: 0.5rem;
          }
          .pr1 {
              padding-right: 0.5rem;
          }
          .pb1 {
              padding-bottom: 0.5rem;
          }
          .pl1 {
              padding-left: 0.5rem;
          }
          .py1 {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
          }
          .px1 {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
          }
          .p2 {
              padding: 1rem;
          }
          .pt2 {
              padding-top: 1rem;
          }
          .pr2 {
              padding-right: 1rem;
          }
          .pb2 {
              padding-bottom: 1rem;
          }
          .pl2 {
              padding-left: 1rem;
          }
          .py2 {
              padding-top: 1rem;
              padding-bottom: 1rem;
          }
          .px2 {
              padding-left: 1rem;
              padding-right: 1rem;
          }
          .p3 {
              padding: 1.5rem;
          }
          .pt3 {
              padding-top: 1.5rem;
          }
          .pr3 {
              padding-right: 1.5rem;
          }
          .pb3 {
              padding-bottom: 1.5rem;
          }
          .pl3 {
              padding-left: 1.5rem;
          }
          .py3 {
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
          }
          .px3 {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
          }
          .p4 {
              padding: 2rem;
          }
          .pt4 {
              padding-top: 2rem;
          }
          .pr4 {
              padding-right: 2rem;
          }
          .pb4 {
              padding-bottom: 2rem;
          }
          .pl4 {
              padding-left: 2rem;
          }
          .py4 {
              padding-top: 2rem;
              padding-bottom: 2rem;
          }
          .px4 {
              padding-left: 2rem;
              padding-right: 2rem;
          }
          .col {
              float: left;
          }
          .col,
          .col-right {
              box-sizing: border-box;
          }
          .col-right {
              float: right;
          }
          .col-1 {
              width: 8.33333%;
          }
          .col-2 {
              width: 16.66667%;
          }
          .col-3 {
              width: 25%;
          }
          .col-4 {
              width: 33.33333%;
          }
          .col-5 {
              width: 41.66667%;
          }
          .col-6 {
              width: 50%;
          }
          .col-7 {
              width: 58.33333%;
          }
          .col-8 {
              width: 66.66667%;
          }
          .col-9 {
              width: 75%;
          }
          .col-10 {
              width: 83.33333%;
          }
          .col-11 {
              width: 91.66667%;
          }
          .col-12 {
              width: 100%;
          }
          @media (min-width: 40.06rem) {
              .sm-col {
              float: left;
              box-sizing: border-box;
              }
              .sm-col-right {
              float: right;
              box-sizing: border-box;
              }
              .sm-col-1 {
              width: 8.33333%;
              }
              .sm-col-2 {
              width: 16.66667%;
              }
              .sm-col-3 {
              width: 25%;
              }
              .sm-col-4 {
              width: 33.33333%;
              }
              .sm-col-5 {
              width: 41.66667%;
              }
              .sm-col-6 {
              width: 50%;
              }
              .sm-col-7 {
              width: 58.33333%;
              }
              .sm-col-8 {
              width: 66.66667%;
              }
              .sm-col-9 {
              width: 75%;
              }
              .sm-col-10 {
              width: 83.33333%;
              }
              .sm-col-11 {
              width: 91.66667%;
              }
              .sm-col-12 {
              width: 100%;
              }
          }
          @media (min-width: 52.06rem) {
              .md-col {
              float: left;
              box-sizing: border-box;
              }
              .md-col-right {
              float: right;
              box-sizing: border-box;
              }
              .md-col-1 {
              width: 8.33333%;
              }
              .md-col-2 {
              width: 16.66667%;
              }
              .md-col-3 {
              width: 25%;
              }
              .md-col-4 {
              width: 33.33333%;
              }
              .md-col-5 {
              width: 41.66667%;
              }
              .md-col-6 {
              width: 50%;
              }
              .md-col-7 {
              width: 58.33333%;
              }
              .md-col-8 {
              width: 66.66667%;
              }
              .md-col-9 {
              width: 75%;
              }
              .md-col-10 {
              width: 83.33333%;
              }
              .md-col-11 {
              width: 91.66667%;
              }
              .md-col-12 {
              width: 100%;
              }
          }
          @media (min-width: 64.06rem) {
              .lg-col {
              float: left;
              box-sizing: border-box;
              }
              .lg-col-right {
              float: right;
              box-sizing: border-box;
              }
              .lg-col-1 {
              width: 8.33333%;
              }
              .lg-col-2 {
              width: 16.66667%;
              }
              .lg-col-3 {
              width: 25%;
              }
              .lg-col-4 {
              width: 33.33333%;
              }
              .lg-col-5 {
              width: 41.66667%;
              }
              .lg-col-6 {
              width: 50%;
              }
              .lg-col-7 {
              width: 58.33333%;
              }
              .lg-col-8 {
              width: 66.66667%;
              }
              .lg-col-9 {
              width: 75%;
              }
              .lg-col-10 {
              width: 83.33333%;
              }
              .lg-col-11 {
              width: 91.66667%;
              }
              .lg-col-12 {
              width: 100%;
              }
          }
          .flex {
              display: flex;
          }
          @media (min-width: 40.06rem) {
              .sm-flex {
              display: flex;
              }
          }
          @media (min-width: 52.06rem) {
              .md-flex {
              display: flex;
              }
          }
          @media (min-width: 64.06rem) {
              .lg-flex {
              display: flex;
              }
          }
          .flex-column {
              flex-direction: column;
          }
          .flex-wrap {
              flex-wrap: wrap;
          }
          .items-start {
              align-items: flex-start;
          }
          .items-end {
              align-items: flex-end;
          }
          .items-center {
              align-items: center;
          }
          .items-baseline {
              align-items: baseline;
          }
          .items-stretch {
              align-items: stretch;
          }
          .self-start {
              align-self: flex-start;
          }
          .self-end {
              align-self: flex-end;
          }
          .self-center {

              align-self: center;
          }
          .self-baseline {
              align-self: baseline;
          }
          .self-stretch {
              align-self: stretch;
          }
          .justify-start {
              justify-content: flex-start;
          }
          .justify-end {
              justify-content: flex-end;
          }
          .justify-center {
              justify-content: center;
          }
          .justify-between {
              justify-content: space-between;
          }
          .justify-around {
              justify-content: space-around;
          }
          .justify-evenly {
              justify-content: space-evenly;
          }
          .content-start {
              align-content: flex-start;
          }
          .content-end {
              align-content: flex-end;
          }
          .content-center {
              align-content: center;
          }
          .content-between {
              align-content: space-between;
          }
          .content-around {
              align-content: space-around;
          }
          .content-stretch {
              align-content: stretch;
          }
          .flex-auto {
              flex: 1 1 auto;
              min-width: 0;
              min-height: 0;
          }
          .flex-none {
              flex: none;
          }
          .order-0 {
              order: 0;
          }
          .order-1 {
              order: 1;
          }
          .order-2 {
              order: 2;
          }
          .order-3 {
              order: 3;
          }
          .order-last {
              order: 99999;
          }
          .relative {
              position: relative;
          }
          .absolute {
              position: absolute;
          }
          .fixed {
              position: fixed;
          }
          .top-0 {
              top: 0;
          }
          .right-0 {
              right: 0;
          }
          .bottom-0 {
              bottom: 0;
          }
          .left-0 {
              left: 0;
          }
          .z1 {
              z-index: 1;
          }
          .z2 {
              z-index: 2;
          }
          .z3 {
              z-index: 3;
          }
          .z4 {
              z-index: 4;
          }
          .border {
              border-style: solid;
              border-width: 1px;
          }
          .border-top {
              border-top-style: solid;
              border-top-width: 1px;
          }
          .border-right {
              border-right-style: solid;
              border-right-width: 1px;
          }
          .border-bottom {
              border-bottom-style: solid;
              border-bottom-width: 1px;
          }
          .border-left {
              border-left-style: solid;
              border-left-width: 1px;
          }
          .border-none {
              border: 0;
          }
          .rounded {
              border-radius: 3px;
          }
          .circle {
              border-radius: 50%;
          }
          .rounded-top {
              border-radius: 3px 3px 0 0;
          }
          .rounded-right {
              border-radius: 0 3px 3px 0;
          }
          .rounded-bottom {
              border-radius: 0 0 3px 3px;
          }
          .rounded-left {
              border-radius: 3px 0 0 3px;
          }
          .not-rounded {
              border-radius: 0;
          }
          .hide {
              position: absolute;
              height: 1px;
              width: 1px;
              overflow: hidden;
              clip: rect(1px,1px,1px,1px);
          }
          @media (max-width: 40rem) {
              .xs-hide {
              display: none;
              }
          }
          @media (min-width: 40.06rem) and (max-width: 52rem) {
              .sm-hide {
              display: none;
              }
          }
          @media (min-width: 52.06rem) and (max-width: 64rem) {
              .md-hide {
              display: none;
              }
          }
          @media (min-width: 64.06rem) {
              .lg-hide {
              display: none;
              }
          }
          .display-none {
              display: none;
          }
          * {
              box-sizing: border-box;
          }
          body {
              background: #fff;
              color: #4a4a4a;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,
              Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,
              sans-serif;
              min-width: 315px;
              overflow-x: hidden;
              font-smooth: always;
              -webkit-font-smoothing: antialiased;
          }
          main {
              max-width: 700px;
              margin: 0 auto;
          }
          p {
              padding: 0;
              margin: 0;
          }
          .ampstart-accent {
              color: #003f93;
          }
          #content:target {
              margin-top: calc(0px - 3.5rem);
              padding-top: 3.5rem;
          }
          .ampstart-title-lg {
              font-size: 3rem;
              line-height: 2rem;
              letter-spacing: 0.06rem;
          }
          .ampstart-title-md {
              font-size: 2rem;
              line-height: 2.5rem;
              letter-spacing: 0.06rem;
          }
          .ampstart-title-sm {
              font-size: 1.5rem;
              line-height: 2rem;
              letter-spacing: 0.06rem;
          }
          .ampstart-subtitle,
          body {
              line-height: 1.5rem;
              letter-spacing: normal;
          }
          .ampstart-subtitle {
              color: #003f93;
              font-size: 1rem;
          }
          .ampstart-byline,
          .ampstart-caption,
          .ampstart-hint,
          .ampstart-label {
              font-size: 0.875rem;
              color: #4f4f4f;
              line-height: 1.125rem;
              letter-spacing: 0.06rem;
          }
          .ampstart-label {
              text-transform: uppercase;
          }
          .ampstart-footer,
          .ampstart-small-text {
              font-size: 0.75rem;
              line-height: 1rem;
              letter-spacing: 0.06rem;
          }
          .ampstart-card {
              box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14),
              0 1px 1px -1px rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);
          }
          .h1,
          h1 {
              font-size: 3rem;
              line-height: 2rem;
          }
          .h2,
          h2 {
              font-size: 2rem;
              line-height: 2.5rem;
          }
          .h3,
          h3 {
              font-size: 1.5rem;
              line-height: 2rem;
          }
          .h4,
          h4 {
              font-size: 1.125rem;
              line-height: 1.5rem;
          }
          .h5,
          h5 {
              font-size: 0.875rem;
              line-height: 1.125rem;
          }
          .h6,
          h6 {
              font-size: 0.75rem;
              line-height: 1rem;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
              margin: 0;
              padding: 0;
              font-weight: 400;
              letter-spacing: 0.06rem;
          }
          a,
          a:active,
          a:visited {
              color: inherit;
          }
          .ampstart-btn {
              font-family: inherit;
              font-weight: inherit;
              font-size: 1rem;
              line-height: 1.125rem;
              padding: 0.7em 0.8em;
              text-decoration: none;
              white-space: nowrap;
              word-wrap: normal;
              vertical-align: middle;
              cursor: pointer;
              background-color: #000;
              color: #fff;
              border: 1px solid #fff;
          }
          .ampstart-btn:visited {
              color: #fff;
          }
          .ampstart-btn-secondary {
              background-color: #fff;
              color: #000;
              border: 1px solid #000;
          }
          .ampstart-btn-secondary:visited {
              color: #000;
          }
          .ampstart-btn:active .ampstart-btn:focus {
              opacity: 0.8;
          }
          .ampstart-btn[disabled],
          .ampstart-btn[disabled]:active,
          .ampstart-btn[disabled]:focus,
          .ampstart-btn[disabled]:hover {
              opacity: 0.5;
              outline: 0;
              cursor: default;
          }
          .ampstart-dropcap:first-letter {
              color: #000;
              font-size: 3rem;
              font-weight: 700;
              float: left;
              overflow: hidden;
              line-height: 3rem;
              margin-left: 0;
              margin-right: 0.5rem;
          }
          .ampstart-initialcap {
              padding-top: 1rem;
              margin-top: 1.5rem;
          }
          .ampstart-initialcap:first-letter {
              color: #000;
              font-size: 3rem;
              font-weight: 700;
              margin-left: -2px;
          }
          .ampstart-pullquote {
              border: none;
              border-left: 4px solid #000;
              font-size: 1.5rem;
              padding-left: 1.5rem;
          }
          .ampstart-byline time {
              font-style: normal;
              white-space: nowrap;
          }
          .amp-carousel-button-next {
              background-image: url('data:image/svg+xml;charset=utf-8,<svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>Next</title><path d="M25.557 14.7L13.818 2.961 16.8 0l16.8 16.8-16.8 16.8-2.961-2.961L25.557 18.9H0v-4.2z" fill="%23FFF" fill-rule="evenodd"/></svg>');
          }
          .amp-carousel-button-prev {
              background-image: url('data:image/svg+xml;charset=utf-8,<svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>Previous</title><path d="M33.6 14.7H8.043L19.782 2.961 16.8 0 0 16.8l16.8 16.8 2.961-2.961L8.043 18.9H33.6z" fill="%23FFF" fill-rule="evenodd"/></svg>');
          }
          .ampstart-dropdown {
              min-width: 200px;
          }
          .ampstart-dropdown.absolute {
              z-index: 100;
          }
          .ampstart-dropdown.absolute > section,
          .ampstart-dropdown.absolute > section > header {
              height: 100%;
          }
          .ampstart-dropdown > section > header {
              background-color: #000;
              border: 0;
              color: #fff;
          }
          .ampstart-dropdown > section > header:after {
              display: inline-block;
              content: '+';
              padding: 0 0 0 1.5rem;
              color: #003f93;
          }
          .ampstart-dropdown > [expanded] > header:after {
              content: '–';
          }
          .absolute .ampstart-dropdown-items {
              z-index: 200;
          }
          .ampstart-dropdown-item {
              background-color: #000;
              color: #003f93;
              opacity: 0.9;
          }
          .ampstart-dropdown-item:active,
          .ampstart-dropdown-item:hover {
              opacity: 1;
          }
          .ampstart-footer {
              background-color: #fff;
              color: #000;
              padding-top: 5rem;
              padding-bottom: 5rem;
          }
          .ampstart-footer .ampstart-icon {
              fill: #000;
          }
          .ampstart-footer .ampstart-social-follow li:last-child {
              margin-right: 0;
          }
          .ampstart-image-fullpage-hero {
              color: #fff;
          }
          .ampstart-fullpage-hero-heading-text,
          .ampstart-image-fullpage-hero .ampstart-image-credit {
              -webkit-box-decoration-break: clone;
              box-decoration-break: clone;
              background: #000;
              padding: 0 1rem 0.2rem;
          }
          .ampstart-image-fullpage-hero > amp-img {
              max-height: calc(100vh - 3.5rem);
          }
          .ampstart-image-fullpage-hero > amp-img img {
              -o-object-fit: cover;
              object-fit: cover;
          }
          .ampstart-fullpage-hero-heading {
              line-height: 3.5rem;
          }
          .ampstart-fullpage-hero-cta {
              background: transparent;
          }
          .ampstart-readmore {
              background: linear-gradient(0deg,rgba(0,0,0,0.65) 0,transparent);
              color: #fff;
              margin-top: 5rem;
              padding-bottom: 3.5rem;
          }
          .ampstart-readmore:after {
              display: block;
              content: '⌄';
              font-size: 2rem;
          }
          .ampstart-readmore-text {
              background: #000;
          }
          @media (min-width: 52.06rem) {
              .ampstart-image-fullpage-hero > amp-img {
              height: 60vh;
              }
          }
          .ampstart-image-heading {
              color: #fff;
              background: linear-gradient(0deg,rgba(0,0,0,0.65) 0,transparent);
          }
          .ampstart-image-heading > * {
              margin: 0;
          }
          amp-carousel .ampstart-image-with-heading {
              margin-bottom: 0;
          }
          .ampstart-image-with-caption figcaption {
              color: #4f4f4f;
              line-height: 1.125rem;
          }
          amp-carousel .ampstart-image-with-caption {
              margin-bottom: 0;
          }
          .ampstart-input {
              max-width: 100%;
              width: 300px;
              min-width: 100px;
              font-size: 1rem;
              line-height: 1.5rem;
          }
          .ampstart-input [disabled],
          .ampstart-input [disabled] + label {
              opacity: 0.5;
          }
          .ampstart-input [disabled]:focus {
              outline: 0;
          }
          .ampstart-input > input,
          .ampstart-input > select,
          .ampstart-input > textarea {
              width: 100%;
              margin-top: 1rem;
              line-height: 1.5rem;
              border: 0;
              border-radius: 0;
              border-bottom: 1px solid #4a4a4a;
              background: none;
              color: #4a4a4a;
              outline: 0;
          }
          .ampstart-input > label {
              color: #003f93;
              pointer-events: none;
              text-align: left;
              font-size: 0.875rem;
              line-height: 1rem;
              opacity: 0;
              animation: 0.2s;
              animation-timing-function: cubic-bezier(0.4,0,0.2,1);
              animation-fill-mode: forwards;
          }
          .ampstart-input > input:focus,
          .ampstart-input > select:focus,
          .ampstart-input > textarea:focus {
              outline: 0;
          }
          .ampstart-input > input:focus:-ms-input-placeholder,
          .ampstart-input > select:focus:-ms-input-placeholder,
          .ampstart-input > textarea:focus:-ms-input-placeholder {
              color: transparent;
          }
          .ampstart-input > input:focus::placeholder,
          .ampstart-input > select:focus::placeholder,
          .ampstart-input > textarea:focus::placeholder {
              color: transparent;
          }
          .ampstart-input > input:not(:placeholder-shown):not([disabled]) + label,
          .ampstart-input > select:not(:placeholder-shown):not([disabled]) + label,
          .ampstart-input
              > textarea:not(:placeholder-shown):not([disabled])
              + label {
              opacity: 1;
          }
          .ampstart-input > input:focus + label,
          .ampstart-input > select:focus + label,
          .ampstart-input > textarea:focus + label {
              animation-name: a;
          }
          @keyframes a {
              to {
              opacity: 1;
              }
          }
          .ampstart-input > label:after {
              content: '';
              height: 2px;
              position: absolute;
              bottom: 0;
              left: 45%;
              background: #003f93;
              transition: 0.2s;
              transition-timing-function: cubic-bezier(0.4,0,0.2,1);
              visibility: hidden;
              width: 10px;
          }
          .ampstart-input > input:focus + label:after,
          .ampstart-input > select:focus + label:after,
          .ampstart-input > textarea:focus + label:after {
              left: 0;
              width: 100%;
              visibility: visible;
          }
          .ampstart-input > input[type='search'] {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
          }
          .ampstart-input > input[type='range'] {
              border-bottom: 0;
          }
          .ampstart-input > input[type='range'] + label:after {
              display: none;
          }
          .ampstart-input > select {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
          }
          .ampstart-input > select + label:before {
              content: '⌄';
              line-height: 1.5rem;
              position: absolute;
              right: 5px;
              zoom: 2;
              top: 0;
              bottom: 0;
              color: #003f93;
          }
          .ampstart-input-chk,
          .ampstart-input-radio {
              width: auto;
              color: #4a4a4a;
          }
          .ampstart-input input[type='checkbox'],
          .ampstart-input input[type='radio'] {
              margin-top: 0;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border: 1px solid #003f93;
              vertical-align: middle;
              margin-right: 0.5rem;
              text-align: center;
          }
          .ampstart-input input[type='radio'] {
              border-radius: 20px;
          }
          .ampstart-input input[type='checkbox']:not([disabled]) + label,
          .ampstart-input input[type='radio']:not([disabled]) + label {
              pointer-events: auto;
              animation: none;
              vertical-align: middle;
              opacity: 1;
              cursor: pointer;
          }
          .ampstart-input input[type='checkbox'] + label:after,
          .ampstart-input input[type='radio'] + label:after {
              display: none;
          }
          .ampstart-input input[type='checkbox']:after,
          .ampstart-input input[type='radio']:after {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              content: ' ';
              line-height: 1.4rem;
              vertical-align: middle;
              text-align: center;
              background-color: #fff;
          }
          .ampstart-input input[type='checkbox']:checked:after {
              background-color: #003f93;
              color: #fff;
              content: '✓';
          }
          .ampstart-input input[type='radio']:checked {
              background-color: #fff;
          }
          .ampstart-input input[type='radio']:after {
              top: 3px;
              bottom: 3px;
              left: 3px;
              right: 3px;
              border-radius: 12px;
          }
          .ampstart-input input[type='radio']:checked:after {
              content: '';
              font-size: 3rem;
              background-color: #003f93;
          }
          .ampstart-input > label,
          _:-ms-lang(x) {
              opacity: 1;
          }
          .ampstart-input > input:-ms-input-placeholder,
          _:-ms-lang(x) {
              color: transparent;
          }
          .ampstart-input > input::placeholder,
          _:-ms-lang(x) {
              color: transparent;
          }
          .ampstart-input > input::-ms-input-placeholder,
          _:-ms-lang(x) {
              color: transparent;
          }
          .ampstart-input > select::-ms-expand {
              display: none;
          }
          .ampstart-headerbar {
              background-color: #fff;
              color: #000;
              z-index: 999;
              border-bottom: 1px solid rgba(243,243,243,0.9529411765);
          }
          .ampstart-headerbar + :not(amp-sidebar),
          .ampstart-headerbar + amp-sidebar + * {
              margin-top: 3.5rem;
          }
          .ampstart-headerbar-nav .ampstart-nav-item {
              padding: 0 1rem;
              background: transparent;
              opacity: 0.8;
          }
          .ampstart-headerbar-nav {
              line-height: 3.5rem;
          }
          .ampstart-nav-item:active,
          .ampstart-nav-item:focus,
          .ampstart-nav-item:hover {
              opacity: 1;
          }
          .ampstart-navbar-trigger:focus {
              outline: none;
          }
          .ampstart-nav a,
          .ampstart-navbar-trigger,
          .ampstart-sidebar-faq a {
              cursor: pointer;
              text-decoration: none;
          }
          .ampstart-nav .ampstart-label {
              color: inherit;
          }
          .ampstart-navbar-trigger {
              line-height: 3.5rem;
              font-size: 2rem;
          }
          .ampstart-headerbar-nav {
              flex: 1;
          }
          .ampstart-nav-search {
              flex-grow: 0.5;
          }
          .ampstart-headerbar .ampstart-nav-search:active,
          .ampstart-headerbar .ampstart-nav-search:focus,
          .ampstart-headerbar .ampstart-nav-search:hover {
              box-shadow: none;
          }
          .ampstart-nav-search > input {
              border: none;
              border-radius: 3px;
              line-height: normal;
          }
          .ampstart-nav-dropdown {
              min-width: 200px;
          }
          .ampstart-nav-dropdown amp-accordion header {
              background-color: #fff;
              border: none;
          }
          .ampstart-nav-dropdown amp-accordion ul {
              background-color: #fff;
          }
          .ampstart-nav-dropdown .ampstart-dropdown-item,
          .ampstart-nav-dropdown .ampstart-dropdown > section > header {
              background-color: #fff;
              color: #000;
          }
          .ampstart-nav-dropdown .ampstart-dropdown-item {
              color: #003f93;
          }
          .ampstart-sidebar {
              background-color: #fff;
              color: #000;
              min-width: 300px;
              width: 300px;
          }
          .ampstart-sidebar .ampstart-icon {
              fill: #003f93;
          }
          .ampstart-sidebar-header {
              line-height: 3.5rem;
              min-height: 3.5rem;
          }
          .ampstart-sidebar .ampstart-dropdown-item,
          .ampstart-sidebar .ampstart-dropdown header,
          .ampstart-sidebar .ampstart-faq-item,
          .ampstart-sidebar .ampstart-nav-item,
          .ampstart-sidebar .ampstart-social-follow {
              margin: 0 0 2rem;
          }
          .ampstart-sidebar .ampstart-nav-dropdown {
              margin: 0;
          }
          .ampstart-sidebar .ampstart-navbar-trigger {
              line-height: inherit;
          }
          .ampstart-navbar-trigger svg {
              pointer-events: none;
          }
          .ampstart-related-article-section {
              border-color: #4a4a4a;
          }
          .ampstart-related-article-section .ampstart-heading {
              color: #4a4a4a;
              font-weight: 400;
          }
          .ampstart-related-article-readmore {
              color: #000;
              letter-spacing: 0;
          }
          .ampstart-related-section-items > li {
              border-bottom: 1px solid #4a4a4a;
          }
          .ampstart-related-section-items > li:last-child {
              border: none;
          }
          .ampstart-related-section-items .ampstart-image-with-caption {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              margin-bottom: 0;
          }
          .ampstart-related-section-items .ampstart-image-with-caption > amp-img,
          .ampstart-related-section-items
              .ampstart-image-with-caption
              > figcaption {
              flex: 1;
          }
          .ampstart-related-section-items
              .ampstart-image-with-caption
              > figcaption {
              padding-left: 1rem;
          }
          @media (min-width: 40.06rem) {
              .ampstart-related-section-items > li {
              border: none;
              }
              .ampstart-related-section-items
              .ampstart-image-with-caption
              > figcaption {
              padding: 1rem 0;
              }
              .ampstart-related-section-items .ampstart-image-with-caption > amp-img,
              .ampstart-related-section-items
              .ampstart-image-with-caption
              > figcaption {
              flex-basis: 100%;
              }
          }
          .ampstart-social-box {
              display: flex;
          }
          .ampstart-social-box > amp-social-share {
              background-color: #000;
          }
          .ampstart-icon {
              fill: #003f93;
          }
          .ampstart-input {
              width: 100%;
          }
          main .ampstart-social-follow {
              margin-left: auto;
              margin-right: auto;
          }
          main .ampstart-social-follow li {
              transform: scale(1.8);
          }
          h1 + .ampstart-byline time {
              font-size: 1.5rem;
              font-weight: 400;
          }

          .br5{
              border-radius : 5px;
          }
          .fsh1{
              font-size : 2rem;
          }
          .webpage-articleHeader{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              min-height : 60px;
              height : 60px
              border-bottom: 1px solid rgba(243,243,243,0.9529411765);
          }
          .webpage-articleHeader h1{
              margin : 0;
          }
          .webpage-articleHeader .webpage-navMenu{
              position: absolute;
              left: 1rem;

          }
          .webpage-articleHeader .webpage-logo{
              font-size: 1.5rem;
              font-family: Dancing Script ,cursive;
          }

          
          p{
              line-height : 1.8;
              font-size : 1.1rem;
          } 
          .webpage-logo{
              background-image: linear-gradient(
                  to right,
                  #462523 0,
                        #cb9b51 22%,
                  #f6e27a 45%,
                  #f6f2c0 50%,
                  #f6e27a 55%,
                  #cb9b51 78%,
                  #462523 100%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

          }
          amp-story{
              background-story : red;
          }
          .ql-container{
            padding: 1rem;
          }
          .main ol,
          .main ul {
            padding-left: 1.5em;
          }
          .main ol > li,
          .main ul > li {
            list-style-type: none;
          }
          .main ul > li::before {
            content: '2022';
          }
          .main ul[data-checked=true],
          .main ul[data-checked=false] {
            pointer-events: none;
          }
          .main ul[data-checked=true] > li *,
          .main ul[data-checked=false] > li * {
            pointer-events: all;
          }
          .main ul[data-checked=true] > li::before,
          .main ul[data-checked=false] > li::before {
            color: #777;
            cursor: pointer;
            pointer-events: all;
          }
          .main ul[data-checked=true] > li::before {
            content: '2611';
          }
          .main ul[data-checked=false] > li::before {
            content: '2610';
          }
          .main li::before {
            display: inline-block;
            white-space: nowrap;
            width: 1.2em;
          }
          .main li:not(.ql-direction-rtl)::before {
            margin-left: -1.5em;
            margin-right: 0.3em;
            text-align: right;
          }
          .main li.ql-direction-rtl::before {
            margin-left: 0.3em;
            margin-right: -1.5em;
          }
          .main ol li:not(.ql-direction-rtl),
          .main ul li:not(.ql-direction-rtl) {
            padding-left: 1.5em;
          }
          .main ol li.ql-direction-rtl,
          .main ul li.ql-direction-rtl {
            padding-right: 1.5em;
          }
          .main ol li {
            counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
            counter-increment: list-0;
          }
          .main ol li:before {
            content: counter(list-0,decimal) '. ';
          }
          .main ol li.ql-indent-1 {
            counter-increment: list-1;
          }
          .main ol li.ql-indent-1:before {
            content: counter(list-1,lower-alpha) '. ';
          }
          .main ol li.ql-indent-1 {
            counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
          }
          .main ol li.ql-indent-2 {
            counter-increment: list-2;
          }
          .main ol li.ql-indent-2:before {
            content: counter(list-2,lower-roman) '. ';
          }
          .main ol li.ql-indent-2 {
            counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
          }
          .main ol li.ql-indent-3 {
            counter-increment: list-3;
          }
          .main ol li.ql-indent-3:before {
            content: counter(list-3,decimal) '. ';
          }
          .main ol li.ql-indent-3 {
            counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
          }
          .main ol li.ql-indent-4 {
            counter-increment: list-4;
          }
          .main ol li.ql-indent-4:before {
            content: counter(list-4,lower-alpha) '. ';
          }
          .main ol li.ql-indent-4 {
            counter-reset: list-5 list-6 list-7 list-8 list-9;
          }
          .main ol li.ql-indent-5 {
            counter-increment: list-5;
          }
          .main ol li.ql-indent-5:before {
            content: counter(list-5,lower-roman) '. ';
          }
          .main ol li.ql-indent-5 {
            counter-reset: list-6 list-7 list-8 list-9;
          }
          .main ol li.ql-indent-6 {
            counter-increment: list-6;
          }
          .main ol li.ql-indent-6:before {
            content: counter(list-6,decimal) '. ';
          }
          .main ol li.ql-indent-6 {
            counter-reset: list-7 list-8 list-9;
          }
          .main ol li.ql-indent-7 {
            counter-increment: list-7;
          }
          .main ol li.ql-indent-7:before {
            content: counter(list-7,lower-alpha) '. ';
          }
          .main ol li.ql-indent-7 {
            counter-reset: list-8 list-9;
          }
          .main ol li.ql-indent-8 {
            counter-increment: list-8;
          }
          .main ol li.ql-indent-8:before {
            content: counter(list-8,lower-roman) '. ';
          }
          .main ol li.ql-indent-8 {
            counter-reset: list-9;
          }
          .main ol li.ql-indent-9 {
            counter-increment: list-9;
          }
          .main ol li.ql-indent-9:before {
            content: counter(list-9,decimal) '. ';
          }
          .ql-indent-1:not(.ql-direction-rtl) {
            padding-left: 3em;
          }
          .main li.ql-indent-1:not(.ql-direction-rtl) {
            padding-left: 4.5em;
          }
          .ql-indent-1.ql-direction-rtl.ql-align-right {
            padding-right: 3em;
          }
          .main li.ql-indent-1.ql-direction-rtl.ql-align-right {
            padding-right: 4.5em;
          }
          .ql-indent-2:not(.ql-direction-rtl) {
            padding-left: 6em;
          }
          .main li.ql-indent-2:not(.ql-direction-rtl) {
            padding-left: 7.5em;
          }
          .ql-indent-2.ql-direction-rtl.ql-align-right {
            padding-right: 6em;
          }
          .main li.ql-indent-2.ql-direction-rtl.ql-align-right {
            padding-right: 7.5em;
          }
          .ql-indent-3:not(.ql-direction-rtl) {
            padding-left: 9em;
          }
          .main li.ql-indent-3:not(.ql-direction-rtl) {
            padding-left: 10.5em;
          }
          .ql-indent-3.ql-direction-rtl.ql-align-right {
            padding-right: 9em;
          }
          .main li.ql-indent-3.ql-direction-rtl.ql-align-right {
            padding-right: 10.5em;
          }
          .ql-indent-4:not(.ql-direction-rtl) {
            padding-left: 12em;
          }
          .main li.ql-indent-4:not(.ql-direction-rtl) {
            padding-left: 13.5em;
          }
          .ql-indent-4.ql-direction-rtl.ql-align-right {
            padding-right: 12em;
          }
          .main li.ql-indent-4.ql-direction-rtl.ql-align-right {
            padding-right: 13.5em;
          }
          .ql-indent-5:not(.ql-direction-rtl) {
            padding-left: 15em;
          }
          .main li.ql-indent-5:not(.ql-direction-rtl) {
            padding-left: 16.5em;
          }
          .ql-indent-5.ql-direction-rtl.ql-align-right {
            padding-right: 15em;
          }
          .main li.ql-indent-5.ql-direction-rtl.ql-align-right {
            padding-right: 16.5em;
          }
          .ql-indent-6:not(.ql-direction-rtl) {
            padding-left: 18em;
          }
          .main li.ql-indent-6:not(.ql-direction-rtl) {
            padding-left: 19.5em;
          }
          .ql-indent-6.ql-direction-rtl.ql-align-right {
            padding-right: 18em;
          }
          .main li.ql-indent-6.ql-direction-rtl.ql-align-right {
            padding-right: 19.5em;
          }
          .ql-indent-7:not(.ql-direction-rtl) {
            padding-left: 21em;
          }
          .main li.ql-indent-7:not(.ql-direction-rtl) {
            padding-left: 22.5em;
          }
          .ql-indent-7.ql-direction-rtl.ql-align-right {
            padding-right: 21em;
          }
          .main li.ql-indent-7.ql-direction-rtl.ql-align-right {
            padding-right: 22.5em;
          }
          .ql-indent-8:not(.ql-direction-rtl) {
            padding-left: 24em;
          }
          .main li.ql-indent-8:not(.ql-direction-rtl) {
            padding-left: 25.5em;
          }
          .ql-indent-8.ql-direction-rtl.ql-align-right {
            padding-right: 24em;
          }
          .main li.ql-indent-8.ql-direction-rtl.ql-align-right {
            padding-right: 25.5em;
          }
          .ql-indent-9:not(.ql-direction-rtl) {
            padding-left: 27em;
          }
          .main li.ql-indent-9:not(.ql-direction-rtl) {
            padding-left: 28.5em;
          }
          .ql-indent-9.ql-direction-rtl.ql-align-right {
            padding-right: 27em;
          }
          .main li.ql-indent-9.ql-direction-rtl.ql-align-right {
            padding-right: 28.5em;
          }
          .ql-video {
            display: block;
            max-width: 100%;
          }
          .ql-video.ql-align-center {
            margin: 0 auto;
          }
          .ql-video.ql-align-right {
            margin: 0 0 0 auto;
          }
          .ql-bg-black {
            background-color: #000;
          }
          .ql-bg-red {
            background-color: #e60000;
          }
          .ql-bg-orange {
            background-color: #f90;
          }
          .ql-bg-yellow {
            background-color: #ff0;
          }
          .ql-bg-green {
            background-color: #008a00;
          }
          .ql-bg-blue {
            background-color: #06c;
          }
          .ql-bg-purple {
            background-color: #93f;
          }
          .ql-color-white {
            color: #fff;
          }
          .ql-color-red {
            color: #e60000;
          }
          .ql-color-orange {
            color: #f90;
          }
          .ql-color-yellow {
            color: #ff0;
          }
          .ql-color-green {
            color: #008a00;
          }
          .ql-color-blue {
            color: #06c;
          }
          .ql-color-purple {
            color: #93f;
          }
          .ql-font-serif {
            font-family: Georgia,Times New Roman,serif;
          }
          .ql-font-monospace {
            font-family: Monaco,Courier New,monospace;
          }
          .ql-size-small {
            font-size: 0.75em;
          }
          .ql-size-large {
            font-size: 1.5em;
          }
          .ql-size-huge {
            font-size: 2.5em;
          }
          .ql-direction-rtl {
            direction: rtl;
            text-align: inherit;
          }
          .ql-align-center {
            text-align: center;
          }
          .ql-align-justify {
            text-align: justify;
          }
          .ql-align-right {
            text-align: right;
          }
         
          .ql-snow .main h1 {
            font-size: 2em;
          }
          .ql-snow .main h2 {
            font-size: 1.5em;
          }
          .ql-snow .main h3 {
            font-size: 1.17em;
          }
          .ql-snow .main h4 {
            font-size: 1em;
          }
          .ql-snow .main h5 {
            font-size: 0.83em;
          }
          .ql-snow .main h6 {
            font-size: 0.67em;
          }
          .ql-snow .main a {
            text-decoration: underline;
          }
          .ql-snow .main blockquote {
            border-left: 4px solid #ccc;
            margin-bottom: 5px;
            margin-top: 5px;
            padding-left: 16px;
          }
          .ql-snow .main code,
          .ql-snow .main pre {
            background-color: #f0f0f0;
            border-radius: 3px;
          }
          .ql-snow .main pre {
            white-space: pre-wrap;
            margin-bottom: 5px;
            margin-top: 5px;
            padding: 5px 10px;
          }
          .ql-snow .main code {
            font-size: 85%;
            padding: 2px 4px;
          }
          .ql-snow .main pre.ql-syntax {
            background-color: #23241f;
            color: #f8f8f2;
            overflow: visible;
          }
          .ql-snow .main img {
            max-width: 100%;
          }
          
          .ql-snow a {
            color: #06c;
          }
          .ql-container.ql-snow {
            border: 1px solid #ccc;
          }
          `,
        }}
      ></style>
      
      <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${location}"
          },
          "headline": "${description}",
          "image": "${poster}",  
          "author": {
            "@type": "Person",
            "name": "Prince Nick BALLO",
            "url": "https://princenickballo.fr"
          },  
          "publisher": {
            "@type": "Organization",
            "name": "Nickscorp",
            "logo": {
              "@type": "ImageObject",
              "url": ""
            }
          },
          "datePublished":"${publishedAt}"
        }
        `
      }}>
      </script>
    </Head>
  )
}
