console.log("Exercises: Animation-Cat walk");

// The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.



var img = document.getElementsByTagName('img')[0];
img.style.left = 0 + 'px';

var moving = "right"; // Which way are we moving



var catWalk = function() {

  	if (parseInt(img.style.left) <= 1190 && moving === "right" ) { // If we are moving right, and we aren't at the end
  		img.style.left = parseInt(img.style.left) + 10 + 'px'; // Move closer to the right
  	} 

  	else { // If we are moving left, or moving isnt the string "right"
  		img.style.left = parseInt(img.style.left) - 10 + 'px';  // Move it back to the left edge
  		moving = "left";
  	}
};

// Instead of just an else condition, make sure that we aren't the left edge

setInterval(catWalk, 31);//moves at 100 milliseconds..setInterval will call the animation to begin.







// window.setInterval(function() {
// x += 10;
// document.getElementsByTagName('img')[0].style.left = x + 'px'},100)