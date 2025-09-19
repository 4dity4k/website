---
layout: default
title: "Contact"
permalink: /pages/contact.html
description: "Contact & Appointments"
---

<section class="container mx-auto py-12">
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold">Contact & Appointments</h2>
      <p class="text-gray-600 mt-2">Call or fill the form to book an appointment.</p>

      <div class="mt-4">
        <p class="text-sm text-gray-600">📍 Clinic Address: XYZ Road, Lucknow</p>
        <p class="text-sm text-gray-600">📞 <a href="tel:+911234567890" class="text-primary">+91 12345 67890</a></p>
        <p class="text-sm text-gray-600">✉️ <a href="mailto:info@drprashanttripathi.com" class="text-primary">info@drprashanttripathi.com</a></p>
      </div>
    </div>

    <div>
      <!-- Formspree - replace FORM_ID with your form endpoint -->
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="bg-white p-6 rounded-lg shadow space-y-4">
        <label class="block">
          <span class="text-sm">Name</span>
          <input name="name" required class="mt-1 block w-full rounded border-gray-200 shadow-sm" />
        </label>
        <label class="block">
          <span class="text-sm">Phone</span>
          <input name="phone" required class="mt-1 block w-full rounded border-gray-200 shadow-sm" />
        </label>
        <label class="block">
          <span class="text-sm">Message</span>
          <textarea name="message" rows="4" class="mt-1 block w-full rounded border-gray-200 shadow-sm"></textarea>
        </label>
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  </div>
</section>
