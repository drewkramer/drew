---
title: "Contact"
date: 2018-07-08T01:01:10-04:00
description:
tags:
post_thumbnail:
layout: "page-default"
draft: false
---

Hello there! If you'd like to get in touch with me, feel free to shoot an email to me at [drewjkramer@gmail.com](mailto:drewjkramer@gmail.com). 

You can also find me on [Instagram](https://www.instagram.com/drewkramer), [Facebook](https://www.facebook.com/kramer.drew), [Dribbble](https://www.dribbble.com/drewkramer), [Github](https://www.github.com/drewkramer), & [LinkedIn](https://www.linkedin.com/in/drewjkramer/)

#### Or Use the Form

<form method="POST" name="contact" class="Form Form--contact" netlify-honeypot="bot-field" data-netlify="true" action="/success">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <div class="Form__group">
  <!-- <label class="Label Form__label small">Full Name</label> -->
  <input type="text" name="name" class="form-control form-control--text" required placeholder="Full name" aria-label="Name">
  </div>
  <div class="Form__group">
  <!-- <label class="Label Form__label small">Email</label> -->
  <input type="email" name="_replyto" class="form-control form-control--text" required placeholder="Email" aria-label="Email">
  </div><div class="Form__group">
  <!-- <label class="Label Form__label small">Message</label> -->
  <textarea class="form-control form-control--textearea" name="message" type="text" required placeholder="Your message" aria-label="Message"></textarea>
  </div>
  <div class="Form__group">
  <button type="submit" class="btn btn-secondary btn-submit" aria-label="Send">Send</button>
  </div>
</form>