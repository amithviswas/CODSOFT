// JavaScript for testimonial slider
const testimonials = document.querySelector('.testimonial-slider');
const testimonialItems = document.querySelectorAll('.testimonial');

let currentItem = 0;
const totalItems = testimonialItems.length;

function showTestimonial(index) {
    testimonialItems.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}


function nextTestimonial() {
    currentItem++;
    if (currentItem >= totalItems) {
        currentItem = 0;
    }
    showTestimonial(currentItem);
}

// Initial setup
showTestimonial(currentItem);

// Auto slide testimonials every 5 seconds
setInterval(nextTestimonial, 5000);
