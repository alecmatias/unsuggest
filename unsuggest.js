window.onload = function() {
  var fauxEach = Array.prototype.forEach;
  var initialPosts = document.querySelectorAll('.uiUnifiedStory');

  fauxEach.call(initialPosts, function(post) {
    if (post.querySelector('a[href="\/about\/ads"]')) {
      post.style.display = 'none';
    }
  });
}

var observer = new MutationSummary({
  callback: hideSuggestedPosts, // required
  rootNode: document.querySelector('#contentArea'), // optional, defaults to window.document
  queries: [
    { element: '.uiUnifiedStory' }
  ]
});

function hideSuggestedPosts(summaries) {
  var newPosts = summaries[0];
  newPosts.added.forEach(function(post) {
    if (post.querySelector('a[href="\/about\/ads"]')) {
      post.style.display = 'none';
      console.log('Hid a suggested post!')
    }
  });
}
