var hidMessage = '<li class=\"uiUnifiedStory uiStreamStory genericStreamStory\" style=\"background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOkRCNjFDODMzNUMwMkREMTFBRjZFREZGMjgzNEZGODczIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBREE1OEYxOEM2RDExRTI5QkE3OTVBQjM1NUY0MkQzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBREE1OEYwOEM2RDExRTI5QkE3OTVBQjM1NUY0MkQzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0ODAxMTc0MDcyMDY4MTE4MjJBODdBODAwMjFENDA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MjJBODdBODAwMjFENDA4Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+ZmFjZWJvb2tfZmF2aWNvbl92MjwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5t55VgAAAaxJREFUeNrMU8kvQ0EY/037SrRCUVoufcGzRS2JItKTA+FCxEGIg7O/Q9xcRLiKROIuERfEdiEuUlJLLSGo1tK0tr6+Z5YSJGK7+JKZ+eZbfvP9vpkhnu6xJQAuOmL4mZjo2JQIIR78XjwGOgX/ABA04I/yTwBqC+zo73DDnZ/DjSkmI/paKtHdWAbyBYDEpvpqJzrbq3jwmj8gAHrqeMDU/Bbi+hcAt+F7vF1fEkKhKDSqOzNTkWZOwuFlGBVyNizmZCx7T3D3pAqAT0XXwbCaGhT0drnfuWZmvRicWPnQREI4jbe8mR6JPnJ9feMIQyNzXK+tkUUTWYCmiZrDlEL0MYZQ5EEkUy/bx1WN7wdG5zG5sM11VVU5uBSnZVozzNxYWJANeecMqcmCmYXylh1WpCf8RbINxnPTa20sV4rT049DEW5qa3XBVZ4HWyJhaz+A0pJcKIq4XqXYgSSr8NntabQKDewz2by7FxgeX0WzR0ERrYJRml3wYXrRhyca5D+6giPLgpPTGwToYXsHQVzf3MFoIDbCvrOq6S7a7hj55uvTBQOTZCCbzwIMAO8KkW+2a2tEAAAAAElFTkSuQmCC) 20px 10px no-repeat; padding: 15px 20px 15px 45px;\">Unsuggested hid a post here.</li>'

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
      post.insertAdjacentHTML('beforeBegin', hidMessage);
      post.style.display = 'none';
      console.log('Hid a suggested post!')
    }
  });
}
