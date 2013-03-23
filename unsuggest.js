// $('#contentArea').on('DOMSubtreeModified', function() {
//   console.log("Dom ready")
$('.uiUnifiedStory:contains("Laura")').css({backgroundColor: '#f00'});
// });

// Use document to listen to all events on the page (you might want to be more specific)
// var $observerSummaryRoot = $("#contentArea");

// function callback(summaries){
//     console.log(summaries);
// }

// $observerSummaryRoot.mutationSummary("connect", callback, [{ all: true }]);

var observer = new MutationSummary({
  callback: handleChanges, // required
  //rootNode: #contentArea, // optional, defaults to window.document
  queries: [
    { element: '.uiUnifiedStory' }
  ]
});

function handleChanges(summaries) {
  var suggestedPosts = summaries[0];
  suggestedPosts.added.forEach(function(newEl) {
    console.log("HELLO" + newEl);
    // if (newEl.has(':contains("James")')) {
    //   newEl.hide();
    // }
    $(newEl).has('a[href="\/about\/ads"]').css({backgroundColor: '#f00'});
  });
}
