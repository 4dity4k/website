---
layout: default
title: "Home"
description: "Orthopedic Surgeon - Knee & Joint Specialist"
---

{% include hero.html %}

<section class="container mx-auto py-12">
  <h2 class="text-2xl font-semibold mb-6 text-center">Our Treatments</h2>

  <div class="grid md:grid-cols-3 gap-6">
    <article class="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src="{{ '/assets/img/service-knee.jpg' | relative_url }}" alt="Knee replacement" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold">Knee Replacement</h3>
        <p class="text-sm text-gray-600 mt-2">Minimally invasive knee replacement with fast recovery.</p>
        <a href="{{ '/services/knee-replacement.html' | relative_url }}" class="text-primary text-sm mt-3 inline-block">Learn more →</a>
      </div>
    </article>

    <article class="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src="{{ '/assets/img/service-arthroscopy.jpg' | relative_url }}" alt="Arthroscopy" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold">Arthroscopy</h3>
        <p class="text-sm text-gray-600 mt-2">Keyhole surgery for joint problems.</p>
        <a href="{{ '/services/arthroscopy.html' | relative_url }}" class="text-primary text-sm mt-3 inline-block">Learn more →</a>
      </div>
    </article>

    <article class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="p-4">
        <h3 class="font-semibold">Sports Injuries</h3>
        <p class="text-sm text-gray-600 mt-2">Comprehensive care for athletes and active individuals.</p>
        <a href="{{ '/pages/services.html' | relative_url }}" class="text-primary text-sm mt-3 inline-block">View all →</a>
      </div>
    </article>
  </div>
</section>

<section id="reviews" class="container mx-auto py-12">
  <h2 class="text-2xl font-semibold mb-6 text-center">What Patients Say</h2>
  <div class="bg-white rounded-lg shadow p-6">
    <div id="testimonial-slider" class="space-y-4">
      <blockquote class="text-gray-700">"Excellent surgeon — very professional and caring." <cite class="block mt-2 text-sm text-gray-500">— Patient A</cite></blockquote>
      <blockquote class="text-gray-700 hidden">"Quick recovery and fantastic care." <cite class="block mt-2 text-sm text-gray-500">— Patient B</cite></blockquote>
      <blockquote class="text-gray-700 hidden">"Highly recommended for knee surgery." <cite class="block mt-2 text-sm text-gray-500">— Patient C</cite></blockquote>
    </div>
  </div>
</section>

<section class="container mx-auto py-12">
  <h2 class="text-2xl font-semibold mb-6 text-center">Gallery</h2>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
    <img src="{{ '/assets/img/gallery-1.jpg' | relative_url }}" class="rounded-lg object-cover h-40 w-full">
    <img src="{{ '/assets/img/gallery-1.jpg' | relative_url }}" class="rounded-lg object-cover h-40 w-full">
    <img src="{{ '/assets/img/gallery-1.jpg' | relative_url }}" class="rounded-lg object-cover h-40 w-full">
    <img src="{{ '/assets/img/gallery-1.jpg' | relative_url }}" class="rounded-lg object-cover h-40 w-full">
  </div>
</section>
