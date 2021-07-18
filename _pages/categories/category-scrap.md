---
title: "Scrap"
layout: archive
permalink: categories/scrap
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories['Scrap'] %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
