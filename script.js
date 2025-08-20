// All "Add to Cart" buttons ধরুন
const buttons = document.querySelectorAll('button');

// প্রতিটি বাটনে ক্লিক ইভেন্ট যুক্ত করুন
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
