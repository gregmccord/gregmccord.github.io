---
layout: page
title: Ticket Stub Website
description: TSX and CSS practice frontend challenge
img: assets/img/12.jpg
importance: 1
category: websites
related_publications: false
toc:
  beginning: true
website_link: https://gregmccord.github.io/conference-tickets/
---

## Overview

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). This is purely a front-end solution and doesn't connect with a backend or database.

#### Process

I used Vite to set up this React project. react-dropzone is used to handle file uploads and heic2any to handle accepting iPhone photos. Getting the website itself set up with Vite and React was relatively simple, and React made managing multiple pages a breeze from that point on (including redirection logic to make sure that users couldn't skip the form and get directly to the ticket page). I needed to relearn how to use hooks in order to manage passing data throughout the app. The biggest challenge for me definitely came from managing UI elements and making things look good AND scalable. It's one thing to have a site that looks good on the screen you designed it on, but it's another to make sure that it scales perfectly to a variety of smart phones and tablets as well. It took quite a bit of time to get the initial stylings done to make the background and colors look correct, and from there I had to make sure I used flexboxes and distance measurements correctly. Flexbox definitely made scaling the application much more seamless, but I also had to be very careful with using pixel measurements (typically for height paddings), setting min+max widths/heights, and using percent based margins for the width. This general rule of thumb helped the application scale while still giving me a good amount of control.

#### Sample View

My goal was to try and maintain parity with target implementation, but I thought there were some opportunities to improve functionality and support more use cases (like HEIC photos on iPhones rather than just PNG and JPG). See some photos of the target website and my implementation below. See the link at the top of this page to go to the website itself!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-design-form.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-design-ticket.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Above) Design photos that served as my basis of comparison.
</div>

Now, here is a collection of screenshots ranging from mobile to desktop including some showing error and loading states. All of these were taken in a Chrome browser, but I have also tested the implementation on Safari and with screen widths ranging from 350p (narrow phone) to 3440p (ultrawide monitor) to ensure consistency across a range of platforms.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-ss-form.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-ss-ticket.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Above) Desktop images from my implementation.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/mobile-ss-form.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/mobile-ss-ticket.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Above) Mobile images from my implementation.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-ss-form-filled.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-ss-form-error.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/websites/ticket-challenge/desktop-ss-form-loading.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Above) Desktop images showing filled, error, and loading states for the form.
</div>

#### Running Locally

When running locally via npm,

- To start the server, execute 'npm run dev' (launches on port 5173 by default)
- For file formatting, execute 'npm run format'
- If you'd like a stock image to test with, feel free to download and use this one provided by Frontend Mentor

![](/assets/img/websites/ticket-challenge/image-avatar.jpg)

## Personal Goals

There were a few goals I had in mind when I began this project both in terms of skills I wanted to develop and good habits I wanted to reinforce, especially in a language/setup that I was less comfortable with.

#### Learn and Develop Skillset

- Refresh on React programming as I am more comfortable with backend work.
- Use a predesigned stylistic template as a model and go from there.
- Test edge cases rigorously.
- Build a multi-page (relatively static) website from the ground up.

#### Maintain proper code structure

- assets/ # Images, fonts, and other static files
- components/ # Reusable UI components
- contexts/ # Components with state and logic, often connected to data
- hooks/ # Enables functional components to access data from class components
- pages/ # Top-level components representing different application routes
- styles/ # Global styles or CSS modules
- index.css # General website stylings independent of page
- main.tsx # Root component and application setup
- Routes.tsx # Root control component that organizes the site

## Next Steps

I don't think I will go any further with this project, but if I thought anything would be worth making an extension for, it would be making it so that refreshing the page on the ticket page preserved your information. I was more interested in making sure that I had the redirection logic working correctly so that you couldn't skip the landing page, but it could be an interesting adaptation to consider.

## Author

I am the sole coder for this project. CSS stylings are intended to replicate the challenge solution but were created by me. All visual assets were provided by Frontend Mentor.
